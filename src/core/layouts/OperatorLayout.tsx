import {useState} from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';

export const OperatorLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const activeModule = location.pathname.split('/')[2] || 'applications';

    const operatorData = {
        firstName: 'Maria',
        lastName: 'Ionescu',
        role: 'Operator credite',
        email: 'maria.ionescu@example.com',
        tasksToday:12,
        completedTasks:8
    };
    const operatorMenu = [
        {
            id:'applications',
            label:'Aplicații Credite',
            icon:'📄',
            path:'/operator/applications',
            badge: 5
        },
        {
            id: 'kyc',
            label: 'Verificare KYC',
            icon: '🕵️‍♂️',
            path:'/operator/kyc',
            badge: 4
        },
        {
            id: 'scoring',
            label: 'Scoring',
            icon: '📊',
            path:'/operator/scoring',
            badge: 2
        },
        {
            id: 'contracting',
            label: 'Contractare',
            icon: '✍️',
            path:'/operator/contracting',
            badge: 1
        },
        {
            id:'payment',
            label:'Plăți',
            icon:'💳',
            path:'/operator/payment',
            badge: 0
        },
        {
            id: 'collections',
            label: 'Colectări',
            icon: '📞',
            path:'/operator/collections',
            badge: 6
        },
        {
            id:'servicing',
            label:'Servicing',
            icon:'🛠️',
            path:'/operator/servicing',
            badge: 0
        }
    ]
    return(
        <div className='min-h-screen flex flex-col bg-gray-50'>
            <header className='bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30'>
                <div className=' px-4 sm:px-6 lg:px-8 '>
                    <div className='flex justify-between items-center h-16'>
                        <div className='flex items-center space-x-4'>
                            <button onClick={() => setIsSidebarOpen(true)}
                              className='lg:hidden p-2 bg-blue-600 text-white rounded-md shadow-lg'  >
                                <svg className='w-6 h-6' viewBox="0 0 24 24" stroke='currentColor' fill="none" >
                                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className='flex items-center justify-between px-4 py-3 md:py-4'>
                            <Link to='/' className='flex items-center space-x-2 group'>
                                <span className="text-2xl"></span>
                                <div>
                                    <h1 className="font-bold text-xl text-blue-600 group-hover:text-blue-800 transition">VIVE CREDIT</h1>
                                    <p className="text-xs text-gray-500">Portal Operator</p>
                                </div>
                            </Link>
                        </div>
                        <div className='hidden md:flex items-center space-x-4 '>
                            <button className='px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100 transition'>
                                Aplicatie noua
                            </button>
                            <button className='px-3 py-1.5 bg-green-50 text-green-600 rounded-md text-sm font-medium hover:bg-green-100 transition'>
                                Task Rapid
                            </button>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <div className='hidden md:block'>
                                <input
                                    type='text'
                                    placeholder='Cautare...'
                                    className='px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <button className='relative p-2 text-gray-600 hover:text-blue-200 transition'>
                                <svg className='w-6 h-6' viewBox="0 0 24 24" stroke='currentColor' fill="none" >
                                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                    5
                                </span>
                            </button>
                            <div className='flex items-center space-x-3 border-l pl-4'>
                                <div className='hidden md:block text-right'>
                                    <p className="text-sm font-semibold text-gray-800">
                                        Bună, {operatorData.firstName} {operatorData.lastName}
                                    </p>
                                    <p className="text-xs text-gray-600">{operatorData.role}
                                    </p>
                                </div>
                                <div className='w-10 h-10 to-blue-600 bg-gradient-to-r from-blue-500 to-blue-600  rounded-full flex items-center justify-center font-bold shadow-md'>
                                    {operatorData.firstName[0]}{operatorData.lastName[0]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='flex flex-1 overflow-hidden'>
                <aside
                    className={`fixed lg:static inset-y-0 left-0  w-64 bg-white border-r border-gray-200
                         z-40 transform transition-transform duration-300 ease-in-out
                         ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} overflow-y-auto`}
                         
                >
                    <div className='p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100'>
                        <h3 className='text-sm font-semibold text-gray-800 mb-2'>Task-uri Astazi</h3>
                        <div className='flex items-center justify-between text-sm'>
                            <span className='text-xs text-gray-600'>Progres</span>
                            <span className='text-xs font-bold text-blue-600'>
                                {operatorData.completedTasks}/{operatorData.tasksToday}</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-2 mt-2'>
                            <div
                                className='bg-blue-600 h-2 rounded-full transition-all'
                                style={{width: `${(operatorData.completedTasks / operatorData.tasksToday) * 100}%`}}
                            />

                            
                        </div>
                    </div>
                    <nav className='p-4'>
                        <h3 className='text-xs font-semibold text-gray-500 uppercase mb-3'>Module</h3>
                            <div className='space-y-1'>
                                {operatorMenu.map(item => (
                                    <Link
                                        key={item.id}
                                        to={item.path}
                                        className={`flex items-center justify-between px-4 py-3 mt-1 text-sm 
                                            font-medium rounded-md transition-all duration-200 
                                            ${activeModule === item.id ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        <div className='flex items-center'>
                                            <span className='text-xl mr-3'>{item.icon}</span>
                                            <span>{item.label}</span>
                                        </div>
                                        {item.badge! > 0 && (
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full
                                                ${activeModule === item.id ? 'bg-white text-blue-600' : 'bg-red-500 text-white'}`}>
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        
                    </nav>
                    <div className='p-4 border-t border-gray-200 mt-4'>
                        <h3 className='text-xs font-semibold text-gray-500 uppercase mb-3'>Statistici Rapide</h3>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between p-2 bg-green-50 rounded-md'>
                                <span className='text-xs text-gray-600'>Aprobate</span>
                                <span className='text-sm font-bold text-green-600'>23</span>
                            </div>
                            <div className='flex items-center justify-between p-2 bg-yellow-50 rounded-md'>
                                <span className='text-xs text-gray-600'>În așteptare</span>
                                <span className='text-sm font-bold text-yellow-600'>15</span>
                            </div>
                            <div className='flex items-center justify-between p-2 bg-red-50 rounded-md'>
                                <span className='text-xs text-gray-600'>Respins</span>
                                <span className='text-sm font-bold text-red-600'>4</span>
                            </div>
                        </div>
                    </div>
                </aside>
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                    </div>
                )}
                <main className='flex-1 overflow-y-auto p-4 lg:p-8'>
                    <div className='mb-6 flex items-center space-x-2 text-sm text-gray-600'>
                        <Link to='/' className='hover:text-blue-600 transition'>Home</Link>
                        <span>/</span>
                        <span className='font-semibold text-gray-800'>
                            {operatorMenu.find(m => m.id === activeModule)?.label || 'Dashboard' }
                        </span>
                    </div>
                    <Outlet />
                </main>
                
            </div>
            <footer className='bg-white border-t border-gray-200 py-4'>
                <div className='px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-600'>
                        <p>&copy; 2025 VIVE CREDIT - Operator Portal</p>
                        <div className='flex space-x-4 mt-2 md:mt-0'>
                            <Link to='/help' className='hover:text-blue-600 transition'>Ajutor</Link>
                            <Link to='/docs' className='hover:text-blue-600 transition'>Documentație</Link>
                            <Link to='/support' className='hover:text-blue-600 transition'>Suport</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}