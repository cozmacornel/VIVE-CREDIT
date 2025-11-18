import {useState} from 'react';
import {Link,} from 'react-router-dom';

interface MenuItem {
    id: string;
    label: string;
    icon: string;
    path: string;
    children?: MenuItem[];
}
interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}
export const SideBar: React.FC<SideBarProps> = ({isOpen, onClose}) => {
    const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

    const menuItems: MenuItem[] = [
        {
            id:'admin',
            label:'Administrare',
            icon:'🛡️',
            path:'/admin',
            children:[
                {
                    id:'users',
                    label:'Utilizatori & Roluri',
                    icon:'👥',
                    path:'/admin/users',
                },
                {
                    id:'audit',
                    label:'Audit Dashboard',
                    icon:'📋',
                    path:'/admin/audit',
                }

            ]
        },
        {
            id:'config',
            label:'Configurari',
            icon:'⚙️',
            path:'/config',
            children:[
                {
                    id:'risk-config',
                    label:'Configurare Risc',
                    icon:'🔒',
                    path:'/admin/risk-config',
                },
                {
                    id:'products',
                    label:'Configurari Produse',
                    icon:'📦',
                    path:'/admin/products',
                }
            ]
        },
        {
            id:'operations',
            label:'Operatiuni',
            icon:'📊',
            path:'/operator',
            children:[
                {
                    id:'onboarding',
                    label:'Onboarding',
                    icon:'fas fa-user-plus',
                    path:'/operator/onboarding',
                },
                {
                    id:'applications',
                    label:'Aplicatii',
                    icon:'fas fa-file-invoice-dollar',
                    path:'/operator/applications',
                },
                {
                    id:'kyc',
                    label:'KYC',
                    icon:'fas fa-id-card',
                    path:'/operator/kyc',
                },
                {
                    id:'scoring',
                    label:'Scoring',
                    icon:'fas fa-chart-line',
                    path:'/operator/scoring',
                },
                {
                    id:'contracting',
                    label:'Contractare',
                    icon:'fas fa-file-signature',
                    path:'/operator/contracting',
                }
            ]
        },
        {
            id:'services',
            label:'Servicii',
            icon:'🔔',
            path:'/operator',
            children:[
                {
                    id:'payments',
                    label:'Plati',
                    icon:'fas fa-credit-card',
                    path:'/operator/payments',
                },
                {
                    id:'collections',
                    label:'Colectari',
                    icon:'fas fa-hand-holding-usd',
                    path:'/operator/collections',
                },
                {
                    id:'servicing',
                    label:'Servicing',
                    icon:'fas fa-tools',
                    path:'/operator/servicing',
                }
            ]
        }
    ];
    const toggleMenu = (menuid: string) => {
        setExpandedMenus(prev => {
            const newSet = new Set(prev);
            if (newSet.has(menuid)) {
                newSet.delete(menuid);
            } else {
                newSet.add(menuid);
            }
            return newSet;
        });
    };
    const renderMenuItem = (item: MenuItem, level: number = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedMenus.has(item.id);
        const paddingLeft = `${(level+1)*1}rem`;

        return (
            <div key={item.id} className="w-full">
                {hasChildren ? (
                    <div
                        className={`flex items-center justify-between w-full px-4 py-2 
                            hover:bg-gray-200 cursor-pointer ${level>0 ? 'border-l-2 border-blue-300' : ''}`}
                        style={{paddingLeft}}
                        onClick={() => toggleMenu(item.id)}
                    >
                        <div className="flex items-center space-x-2">
                            <span className= 'text-xl'>{item.icon}</span>
                            <span className={`${level===0 ? 'font-semibold text-gray-800' : 'text-gray-700'} text-sm`}>
                                {item.label}
                            </span>
                        </div>
                        <svg
                            className={`w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                        
                ) : (
                    <Link
                        to={item.path}
                        className={`flex items-center w-full px-4 py-2 
                            hover:bg-gray-200 ${level>0 ? 'border-l-2 border-blue-300' : ''}`}
                        style={{paddingLeft}}
                        onClick={onClose}
                    >
                        <div className="flex items-center space-x-2">
                            <span className='text-xl'>{item.icon}</span>
                            <span className={`${level===0 ? 'font-semibold text-gray-800' : 'text-gray-700'} text-sm`}>
                                {item.label}</span>
                        </div>
                    </Link>
                )}
                {hasChildren && isExpanded && (
                    <div>
                        {item.children!.map(child => renderMenuItem(child, level + 1))}
                    </div>
                )}
            </div>
        )
        
    }
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 flex lg:hidden"
                    onClick={onClose}
                >
                </div>
            )}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform 
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    transition-transform duration-300 ease-in-out flex flex-col`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className="flex items-center space-x-2">
                        <span className='text-2xl'></span>
                        <h2 className="text-lg font-semibold text-gray-800">Meniu</h2>
                    </div>
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-gray-200"
                        onClick={onClose}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto mt-4">
                    {menuItems.map(item => renderMenuItem(item))}
                </div>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <div className='grid grid-cols-2 gap-2 text-xs'>
                        <div className='bg-white p-2 rounded shadow-sm'>
                            <div className='text-gray-500'>Utilizatori</div>
                            <div className='font-bold text-blue-600'>124</div>
                        </div>
                        <div className='bg-white p-2 rounded shadow-sm'>
                            <div className='text-gray-500'>Aplicatii </div>
                            <div className='font-bold text-blue-600'>89</div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}