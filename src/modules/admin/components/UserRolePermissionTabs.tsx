import React, { useState } from 'react';
import { UserManagement } from './UserManagement';
import { RoleManagement } from './RoleManagement';
import { PermissionMatrix } from './PermissionMatrix'; 

type TabType = 'users' | 'roles'|'permissions';

export const UserRolePermissionTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('users');

    return (
        <div className='p-4 md:p-6'>
            {/* Tab Buttons */}
            <div className='mb-4 md:mb-6 border-b border-gray-200 -mx-4 md:mx-0'>
                <div className='flex space-x-2 md:space-x-4 overflow-x-auto px-4 md:px-0'>
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm border-b-2 transition-colors duration-200 whitespace-nowrap ${
                            activeTab === 'users'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        👤 Utilizatori
                    </button>
                    <button
                        onClick={() => setActiveTab('roles')}
                        className={`px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm border-b-2 transition-colors duration-200 whitespace-nowrap ${
                            activeTab === 'roles'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        🛡️ Roluri
                    </button>
                    <button
                        onClick={() => setActiveTab('permissions')}
                        className={`px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm border-b-2 transition-colors duration-200 whitespace-nowrap ${
                            activeTab === 'permissions'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        🔑 Matrice
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === 'users' && <UserManagement />}
                {activeTab === 'roles' && <RoleManagement />}
                {activeTab === 'permissions' && <PermissionMatrix />}
            </div>
        </div>
    );
};
