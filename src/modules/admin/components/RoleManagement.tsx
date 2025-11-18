import React, {useState, useEffect} from 'react';
import type {Role, Permission} from '../../../types/global';
import {API_ENDPOINTS} from '../../../core/services/api/endpoints';
import {apiClient} from '../../../core/services/api/apiClient';

export const RoleManagement: React.FC = () => {
    const [roles, setRoles] = useState<Role[]>([]);
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [editingRole, setEditingRole] = useState<Role | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<{name: string; description: string; permissionIds: string[]}>({
        name: '', description: '', permissionIds: []});
    
    useEffect(() => {
        loadRoles();
        loadPermissions();
    }, []);
    
    const loadRoles = async () => {
        setLoading(true);
        try {
            const response = await apiClient.get<Role[]>(API_ENDPOINTS.ROLES.LIST);
            setRoles(response.data||[]);
        } catch (error) {
            console.error('Error loading roles:', error);
            // Date de exemplu pentru demonstrație
            setRoles([
                {
                    id: '1',
                    name: 'Administrator',
                    description: 'Acces complet la sistem',
                    permissions: [
                        { id: '1', resource: 'Users', action: 'create' },
                        { id: '2', resource: 'Users', action: 'read' },
                        { id: '3', resource: 'Users', action: 'update' },
                        { id: '4', resource: 'Users', action: 'delete' }
                    ]
                },
                {
                    id: '2',
                    name: 'Operator',
                    description: 'Acces la operațiuni de bază',
                    permissions: [
                        { id: '5', resource: 'Applications', action: 'read' },
                        { id: '6', resource: 'Applications', action: 'create' }
                    ]
                }
            ]);
        } finally {
            setLoading(false);
        }
    };
    
    const loadPermissions = async () => {
        try {
            const response = await apiClient.get<Permission[]>(API_ENDPOINTS.PERMISSIONS.LIST);
            setPermissions(response.data||[]);
        } catch (error) {
            console.error('Error loading permissions:', error);
            // Permisiuni de exemplu pentru demonstrație
            setPermissions([
                { id: '1', resource: 'Users', action: 'create' },
                { id: '2', resource: 'Users', action: 'read' },
                { id: '3', resource: 'Users', action: 'update' },
                { id: '4', resource: 'Users', action: 'delete' },
                { id: '5', resource: 'Roles', action: 'create' },
                { id: '6', resource: 'Roles', action: 'read' },
                { id: '7', resource: 'Roles', action: 'update' },
                { id: '8', resource: 'Roles', action: 'delete' },
                { id: '9', resource: 'Applications', action: 'create' },
                { id: '10', resource: 'Applications', action: 'read' },
                { id: '11', resource: 'Applications', action: 'update' },
                { id: '12', resource: 'Applications', action: 'approve' },
                { id: '13', resource: 'Payments', action: 'create' },
                { id: '14', resource: 'Payments', action: 'read' },
                { id: '15', resource: 'Payments', action: 'process' },
                { id: '16', resource: 'Reports', action: 'read' },
                { id: '17', resource: 'Reports', action: 'export' }
            ]);
        } 
    };
    const handleCreate=() => {
        setEditingRole(null);
        setFormData({name:'', description:'', permissionIds:[]});
        setShowModal(true);
    };
    const handleEdit=(role:Role) => {
        setEditingRole(role);
        setFormData({
            name:role.name,
            description:role.description,
            permissionIds:role.permissions.map((p: Permission)=>p.id),
        });
        setShowModal(true);
    };
    const handleSubmit=async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (editingRole) {
                await apiClient.put(`${API_ENDPOINTS.ROLES.UPDATE}/${editingRole.id}`, formData);
            } else {
                await apiClient.post(API_ENDPOINTS.ROLES.CREATE, formData);
            }
            setShowModal(false);
            loadRoles();
        } catch (error) {
            console.error('Error saving role:', error);
        } finally {
            setLoading(false);
        }
    };
    const handleDelete=async (roleId:string) => {
        if (!window.confirm('Are you sure you want to delete this role?')) return;
        setLoading(true);
        try {
            await apiClient.delete(`${API_ENDPOINTS.ROLES.DELETE}/${roleId}`);
            loadRoles();
        } catch (error) {
            console.error('Error deleting role:', error);
        } finally {
            setLoading(false);
        }
    };
    const groupPermissionsByResource = () => {
        const grouped: {[key: string]: Permission[]} = {};
        permissions.forEach(permission => {
            if (!grouped[permission.resource]) {
                grouped[permission.resource] = [];
            }
            grouped[permission.resource].push(permission);
        });
        return grouped;
    };
    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold text-gray-900'>Roluri</h2>
                <button onClick={handleCreate}
                className='bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200'
                >
                    Creaza Rol Nou
                </button>
            </div>
            {loading && <div className='text-center py-4 text-gray-600'>Se încarcă...</div>}
            {!loading && roles.length === 0 && (
                <div className='text-center py-12 bg-gray-50 rounded-lg'>
                    <p className='text-gray-500 text-lg mb-4'>Nu există roluri definite</p>
                    <p className='text-gray-400 text-sm'>Creați un rol nou pentru a începe</p>
                </div>
            )}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {roles.map ((role)=>(
                    <div key={role.id} className='bg-white rounded-lg  shadow p-6'>
                        <div className='flex justify-between items-start mb-4'>
                            <div>
                                <h3 className='text-lg font-semibold'>{role.name}</h3>
                                <p className='text-sm text-gray-500'>{role.description}</p>
                            </div>
                            <div className='flex gap-2'>
                                <button onClick={() => handleEdit(role)}
                                  className='text-blue-600 hover:text-blue-800 '>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(role.id)}
                                  className='text-red-600 hover:text-red-900 '>
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className='text-xs text-gray-700 mb-2 font-medium'>
                                Permisiuni ({role.permissions.length}):
                            </p>
                            <div className='flex flex-wrap gap-2'>
                                {role.permissions.slice(0, 5).map((perm: Permission)=>(
                                    <span key={perm.id}
                                    className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-green-800'>
                                        {perm.resource}:{perm.action}
                                    </span>
                                ))}
                                {role.permissions.length > 5 && (
                                    <span className='text-xs text-gray-500 '>
                                        +{role.permissions.length - 5} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (
                <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50'>
                    <div className='relative top-20 mx-auto p-5 border w-2/3 max-w-4xl shadow-lg rounded-md bg-white'>
                        <div className='mt-3'>
                            <h3 className='text-lg leading-6 font-medium text-gray-900 mb-4'>
                                {editingRole ? 'Editeaza Rol' : 'Creaza Rol Nou'}
                            </h3>
                            <form>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Nume Rol</label>
                                    <input type='text' value={formData.name}
                                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500'/>
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1 mt-4'>Descriere</label>
                                    <textarea value={formData.description} required rows={3}
                                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500'/>
                                        

                                </div>
                                <div className='mt-4'>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>Permisiuni</label>
                                    {permissions.length === 0 ? (
                                        <div className='border border-gray-300 p-4 rounded-md bg-gray-50 text-center text-gray-500'>
                                            Nu există permisiuni disponibile
                                        </div>
                                    ) : (
                                        <div className='max-h-96 overflow-y-auto border border-gray-300 p-4 rounded-md bg-gray-50'>
                                            {Object.entries(groupPermissionsByResource()).map(([resource, perms]) => (
                                                <div key={resource} className='mb-4 last:mb-0'>
                                                    <h4 className='text-sm font-semibold mb-3 text-gray-800 bg-white px-3 py-2 rounded'>{resource}</h4>
                                                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 pl-2'>
                                                        {perms.map((perm) => (
                                                            <label key={perm.id} className='flex items-center cursor-pointer hover:bg-white p-2 rounded transition-colors'>
                                                                <input
                                                                    type='checkbox'
                                                                    checked={formData.permissionIds.includes(perm.id)}
                                                                    onChange={(e) => {
                                                                        if(e.target.checked) {
                                                                            setFormData({
                                                                                ...formData,
                                                                                permissionIds: [...formData.permissionIds, perm.id],
                                                                            });
                                                                        } else {
                                                                            setFormData({
                                                                                ...formData,
                                                                                permissionIds: formData.permissionIds.filter(id => id !== perm.id),
                                                                            });
                                                                        }
                                                                    }}
                                                                    className='mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                                                                />
                                                                <span className='text-sm text-gray-700'>{perm.action}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className='mt-6 flex justify-end gap-4'>
                                    <button type='button' onClick={() => setShowModal(false)}
                                      className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-200'>
                                        Anuleaza 
                                    </button>
                                    <button type='submit' onClick={handleSubmit}
                                      className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors duration-200'>
                                        Salveaza
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}