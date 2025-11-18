import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white py-3">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-center text-sm'>
                    <p className='text-gray-400 mb-2 md:mb-0'>
                        © {currentYear} VIVE CREDIT. Toate drepturile rezervate.
                    </p>
                    <div className='flex space-x-4'>
                        <Link to='/terms' className='text-gray-400 hover:text-white transition-colors duration-200'>
                            Termeni
                        </Link>
                        <Link to='/privacy' className='text-gray-400 hover:text-white transition-colors duration-200'>
                            Confidențialitate
                        </Link>
                        <Link to='/contact' className='text-gray-400 hover:text-white transition-colors duration-200'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}