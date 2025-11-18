import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

export const ClientLayout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const clientData = {
        firstName: "Ion",
        lastName: "Popescu",
        email: "ion.popescu@example.com",
        phone: "+40 712 345 678",
        activeLoans:1,
        totalAmount:5000,
        nextPayment:{
            date:"2024-07-15",
            amount:450
        }
    };
    return (
        <div className='min-h-screen flex flex-col bg-gray-50'>
            <header className='bg-white shadow-sm border-b border-gray-200'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
                    <div className='flex justify-between items-center h-16'>
                        <Link to='/' className='flex items-center space-x-2 group'>
                            <span className="text-2xl"></span>
                            <div>
                                <h1 className="font-bold text-xl text-blue-600 group-hover:text-blue-800 transition">VIVE CREDIT</h1>
                                <p className="text-xs text-gray-500">Portal Client</p>
                            </div>
                        </Link>
                        <nav className='space-x-6 hidden md:flex items-center'>
                            <Link to="/client/onboarding" className=' text-gray-600 hover:text-blue-600 transition'>
                            Onboarding
                            </Link>
                            <Link to='/client/application' className=' text-gray-600 hover:text-blue-600 transition'>
                            Application
                            </Link>
                            <Link to='/client/payment' className=' text-gray-600 hover:text-blue-600 transition'>
                            Payment
                            </Link>
                            <Link to='/client/servicing' className=' text-gray-600 hover:text-blue-600 transition ml-4'>
                            Cereri Servicing
                            </Link>
                        </nav>
                        <div className='flex items-center space-x-4'>
                            <button className='relative p-2 text-gray-600 hover:text-blue-200 transition'>
                                <svg>
                                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className='hidden md:flex items-center space-x-3 border-l pl-4'>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-gray-800">
                                        Bună, {clientData.firstName} {clientData.lastName}
                                    </p>
                                    <p className="text-xs text-gray-600">{clientData.email}</p>
                                </div>
                                <div className='w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold'>
                                    {clientData.firstName[0]}{clientData.lastName[0]}
                                </div>
                            </div>
                            <button
                                className='md:hidden p-2 text-gray-600 hover:text-blue-600 transition'
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <svg className='w-6 h-6' viewBox="0 0 24 24" stroke='currentColor' fill="none" >
                                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className='md:hidden bg-white border-t border-gray-200'>
                        <nav className='max-w-7xl mx-auto px-4 py-4 space-y-2'>
                            <Link to="/client/onboarding" className=' block px-4 py-2 text-gray-600 hover:text-blue-50 rounded'>
                            Onboarding
                            </Link>
                            <Link to='/client/application' className=' block px-4 py-2 text-gray-600 hover:text-blue-50 rounded'>
                            Application
                            </Link>
                            <Link to='/client/payment' className=' block px-4 py-2 text-gray-600 hover:text-blue-50 rounded'>
                            Payment
                            </Link>
                            <Link to='/client/servicing' className=' block px-4 py-2 text-gray-600 hover:text-blue-50 rounded'>
                            Cereri Servicing
                            </Link>
                        </nav>
                    </div>
                )}
            </header>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <p className="text-xs text-blue-200 mb-1">Credite Active</p>
                            <h2 className="text-2xl font-bold">{clientData.activeLoans}</h2>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-blue-200 mb-1">Suma Totală</p>
                            <h2 className="text-2xl font-bold">{clientData.totalAmount} RON</h2>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-blue-200 mb-1">Următoarea Rată</p>
                            <h2 className="text-2xl font-bold">{clientData.nextPayment.amount} RON</h2>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-blue-200 mb-1">Data Scadenta</p>
                            <h2 className="text-2xl font-bold">{clientData.nextPayment.date}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-800 mb-3">Contact</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>Tel:0800 123 456</li>
                                <li>Email: contact@vivecredit.com</li>
                                <li>Program: L-V 9:00-18:00</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-800 mb-3">Link-uri Rapide</h3>
                            <ul className="text-sm space-y-2">
                                <Link to="faq" className="text-gray-600 hover:text-blue-600 transition block ">
                                    Întrebări Frecvente
                                </Link>
                                <Link to="/client/terms" className="text-gray-600 hover:text-blue-600 transition block ">
                                    Termeni și Condiții
                                </Link>
                                <Link to="/client/privacy" className="text-gray-600 hover:text-blue-600 transition block ">
                                    Politica de Confidențialitate
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-800 mb-3">Securitate</h3>
                            <p className="text-sm text-gray-600">
                                Toate tranzacțiile sunt securizate și criptate pentru a vă proteja informațiile personale.
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24"  fill="currentColor">
                                    <path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm-.5-14h-1v5l4.25 2.52.5-.86-3.75-2.22V7z" fill="#4A90E2"/>
                                </svg>
                                <span>Protectie Date Personale</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} VIVE CREDIT. Toate drepturile rezervate.
                    </div>
                </div>
            </footer>
        </div>
    )
}