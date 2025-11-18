import {useState} from 'react';
import {Header} from '../components/Header';
import {SideBar} from '../components/SideBar';
import {Outlet} from 'react-router-dom';
import {Footer} from '../components/Footer';

export const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className='min-h-screen flex flex-col bg-gray-50'>
            <Header/>
            <div className='flex flex-1 overflow-hidden'>
                <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
                    <main className='flex-grow overflow-y-auto p-4 lg:p-8'>
                        <button onClick={() => setIsSidebarOpen(true)}
                          className='lg:hidden mb-4 p-2 bg-blue-600 text-white rouded-md shadow-lg'  >
                            <svg className='w-6 h-6' viewBox="0 0 24 24" stroke='currentColor' fill="none" >
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <Outlet />
                    </main>
            </div>
            <Footer/>
        </div>
    )
}