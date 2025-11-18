import React, { useState, useEffect } from 'react';

interface RolePermission {
    roleId: string;
    roleName: string;
    permissions: {
        [resource: string]: {
            [action: string]: boolean;
        };
    };
}

export const PermissionMatrix: React.FC = () => {
    const [matrix, setMatrix] = useState<RolePermission[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasChanges, setHasChanges] = useState<boolean>(false);

    useEffect(() => {
        loadMatrix();
    }, []);

    const loadMatrix = async () => {
        setLoading(true);
        try {
            // Simulare date pentru demonstrație
            const mockData: RolePermission[] = [
                {
                    roleId: '1',
                    roleName: 'Administrator',
                    permissions: {
                        Users: { create: true, read: true, update: true, delete: true, execute: false },
                        Roles: { create: true, read: true, update: true, delete: true, execute: false },
                        Applications: { create: true, read: true, update: true, delete: false, execute: true },
                        Payments: { create: true, read: true, update: true, delete: false, execute: true },
                    }
                },
                {
                    roleId: '2',
                    roleName: 'Operator',
                    permissions: {
                        Users: { create: false, read: true, update: false, delete: false, execute: false },
                        Roles: { create: false, read: true, update: false, delete: false, execute: false },
                        Applications: { create: true, read: true, update: true, delete: false, execute: false },
                        Payments: { create: true, read: true, update: false, delete: false, execute: false },
                    }
                },
                {
                    roleId: '3',
                    roleName: 'Client',
                    permissions: {
                        Users: { create: false, read: false, update: false, delete: false, execute: false },
                        Roles: { create: false, read: false, update: false, delete: false, execute: false },
                        Applications: { create: true, read: true, update: false, delete: false, execute: false },
                        Payments: { create: false, read: true, update: false, delete: false, execute: false },
                    }
                }
            ];
            setMatrix(mockData);
        } catch (error) {
            console.error('Error loading permission matrix:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePermissionChange = (roleId: string, resource: string, action: string, value: boolean) => {
        setMatrix(prevMatrix =>
            prevMatrix.map(role => {
                if (role.roleId === roleId) {
                    return {
                        ...role,
                        permissions: {
                            ...role.permissions,
                            [resource]: {
                                ...role.permissions[resource],
                                [action]: value,
                            }
                        },
                    };
                }
                return role;
            })
        );
        setHasChanges(true);
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            // await apiClient.put(API_ENDPOINTS.PERMISSIONS.UPDATE, {matrix});
            setHasChanges(false);
            alert('Matricea de permisiuni a fost salvată cu succes.');
        } catch (error) {
            console.error('Error saving permission matrix:', error);
            alert('Eroare la salvarea matricei de permisiuni.');
        } finally {
            setLoading(false);
        }
    };

    const resources = matrix.length > 0 ? Object.keys(matrix[0].permissions) : [];
    const actions = ['create', 'read', 'update', 'delete', 'execute'] as const;

    return (
        <div className='p-4 md:p-6'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4'>
                <div>
                    <h2 className='text-xl md:text-2xl font-bold'>Matricea Permisiunilor</h2>
                    <p className='text-xs md:text-sm text-gray-500'>Configurează permisiunile pentru fiecare rol</p>
                </div>
                {hasChanges && (
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className='bg-blue-600 text-white px-4 md:px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 text-sm md:text-base w-full sm:w-auto'
                    >
                        {loading ? 'Se salvează...' : 'Salvează Modificări'}
                    </button>
                )}
            </div>

            {loading && !hasChanges && <div className='text-center py-4 text-sm'>Se încarcă...</div>}

            <div className='bg-white rounded-lg shadow overflow-hidden'>
                {resources.map((resource) => (
                    <div key={resource} className='mb-4 md:mb-6 last:mb-0'>
                        <div className='bg-gray-100 px-4 md:px-6 py-2 md:py-3 border-b'>
                            <h3 className='font-semibold text-base md:text-lg'>{resource}</h3>
                        </div>
                        
                        {/* Desktop View - Table */}
                        <div className='hidden md:block overflow-x-auto'>
                            <table className='min-w-full'>
                                <thead>
                                    <tr className='bg-gray-50'>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                            Rol
                                        </th>
                                        {actions.map((action) => (
                                            <th key={action} className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                {action === 'create' && 'Creare'}
                                                {action === 'read' && 'Citire'}
                                                {action === 'update' && 'Actualizare'}
                                                {action === 'delete' && 'Ștergere'}
                                                {action === 'execute' && 'Executare'}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200'>
                                    {matrix.map((role) => (
                                        <tr key={role.roleId} className='hover:bg-gray-50'>
                                            <td className='px-6 py-4 whitespace-nowrap font-medium'>
                                                {role.roleName}
                                            </td>
                                            {actions.map((action) => (
                                                <td key={action} className='px-6 py-4 whitespace-nowrap text-center'>
                                                    <input
                                                        type='checkbox'
                                                        checked={role.permissions[resource]?.[action] || false}
                                                        onChange={(e) =>
                                                            handlePermissionChange(role.roleId, resource, action, e.target.checked)
                                                        }
                                                        className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer'
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile View - Cards */}
                        <div className='md:hidden divide-y divide-gray-200'>
                            {matrix.map((role) => (
                                <div key={role.roleId} className='p-4'>
                                    <h4 className='font-semibold text-gray-900 mb-3'>{role.roleName}</h4>
                                    <div className='space-y-2'>
                                        {actions.map((action) => (
                                            <label key={action} className='flex items-center justify-between py-2'>
                                                <span className='text-sm text-gray-700'>
                                                    {action === 'create' && 'Creare'}
                                                    {action === 'read' && 'Citire'}
                                                    {action === 'update' && 'Actualizare'}
                                                    {action === 'delete' && 'Ștergere'}
                                                    {action === 'execute' && 'Executare'}
                                                </span>
                                                <input
                                                    type='checkbox'
                                                    checked={role.permissions[resource]?.[action] || false}
                                                    onChange={(e) =>
                                                        handlePermissionChange(role.roleId, resource, action, e.target.checked)
                                                    }
                                                    className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer'
                                                />
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};