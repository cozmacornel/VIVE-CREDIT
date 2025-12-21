import {useState} from 'react';
import GeneralSettings from './modules/admin/components/GeneralSettings';
import LendingSettings from './modules/admin/components/LendingSettings';
import NotificationSettings from './modules/admin/components/NotificationSettings';

function App() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(false);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };
    const toggleTheme = () => {
        setIsDark(!isDark)
    };
    return (
        <div className={`min-h-screen py-4 sm:py-8 px-4 transition-colors duration-300
         ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 ' 
         : 'bg-gradient-to-br from-gray-500 to-gray-100'}`}>
            <div>
                <div className={`rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0
                    ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} style={{maxWidth:'400px'}}>
                    <h1 className="text-2xl sm:text-3xl font-bold">Setari Sistem</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={toggleTheme}
                            className={`px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium transition
                                ${ isDark ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                            ☀️ 
                        </button>
                        <button 
                            onClick={toggleTheme}
                            className={` px-3 sm:px-3 py-2 rounded text-xs sm:text-sm font-medium transition
                                ${isDark ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300' } `}>
                            🌙 
                        </button>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 px-0 sm:px-6'>
                    <div className='flex flex-col gap-2 sm:gap-3 w-full lg:w-40'>
                        <button
                            onClick={() => toggleSection('general')}
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium 
                            hover:bg-blue-700 transition text-sm sm:text-base"
                        >
                                General
                        </button>
                        <button
                            onClick={() => toggleSection('lending')}
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base"
                        >
                                Imprumuturi
                        </button>
                        <button
                            onClick={() => toggleSection('notifications')}
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base"
                        >
                                Notificari
                        </button>
                    </div>
                    <div className='flex-1 w-full lg:ml-6'>
                        {expandedSection==='general'&& (
                            <div className={`p-4 sm:p-6 rounded-lg w-full sm:w-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{maxWidth: '700px'}}>
                                <div className='flex justify-between items-center mb-4'>
                                   <h2 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>General Settings</h2>
                                    <button onClick={() =>toggleSection('general')}
                                    className={`text-xl sm:text-2xl hover:opacity-70 transition ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        x
                                    </button>
                                </div>
                                <GeneralSettings isDark={isDark}/>
                            </div>
                        )}
                        {expandedSection==='lending'&& (
                            <div className={`p-4 sm:p-6 rounded-lg w-full sm:w-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{maxWidth: '700px'}}>
                                <div className='flex justify-between items-center mb-4'>
                                      <h2 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Lending Settings</h2>
                                    <button onClick={() =>toggleSection('lending')}
                                    className={`text-xl sm:text-2xl hover:opacity-70 transition ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        x
                                    </button>
                                </div>
                                <LendingSettings isDark={isDark}/>
                            </div>
                        )}
                        {expandedSection==='notifications'&& (
                            <div className={`p-4 sm:p-6 rounded-lg w-full sm:w-auto ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{maxWidth: '700px'}}>
                                <div className='flex justify-between items-center mb-4'>
                                      <h2 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Notification Settings</h2>
                                    <button onClick={() =>toggleSection('notifications')}
                                    className={`text-xl sm:text-2xl hover:opacity-70 transition ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        x
                                    </button>
                                </div>
                                <NotificationSettings />
                            </div>
                        )}
                        {!expandedSection && (
                            <div className={`p-4 sm:p-6 rounded-lg w-full sm:w-auto ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                                <h2 className="text-lg sm:text-xl font-bold">Selecteaza o sectiune pentru a edita setarile</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;
