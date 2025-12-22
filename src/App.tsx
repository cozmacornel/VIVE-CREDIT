import { useState } from 'react';
import GeneralSettings from './modules/admin/components/GeneralSettings';
import LendingSettings from './modules/admin/components/LendingSettings';
import NotificationSettings from './modules/admin/components/NotificationSettings';

function App() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen py-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-500 to-gray-100'
    }`}>
      <div style={{ marginLeft: '10px' }}>
        {/* Title with Theme Toggle Buttons */}
        <div className={`rounded-lg p-6 mb-6 flex justify-between items-center ${
          isDark 
            ? 'bg-gray-800 text-white' 
            : 'bg-white text-gray-900'
        }`} style={{ width: '300px' }}>
          <h1 className="text-3xl font-bold">Setari Sistem</h1>
          <div className="flex gap-2">
            <button 
              onClick={toggleTheme}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                isDark 
                  ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ☀️
            </button>
            <button 
              onClick={toggleTheme}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                isDark 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🌙
            </button>
          </div>
        </div>

        {/* Layout - Buttons left, Components right */}
        <div className="flex" style={{ marginLeft: '25px' }}>
          {/* Left: Buttons */}
          <div className="flex flex-col gap-3 w-40">
            <button
              onClick={() => toggleSection('general')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              General
            </button>
            <button
              onClick={() => toggleSection('lending')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Lending
            </button>
            <button
              onClick={() => toggleSection('notification')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Notification
            </button>
          </div>

          {/* Right: Components */}
          <div className="flex-1" style={{ marginLeft: '100px' }}>
            {/* General Settings */}
            {expandedSection === 'general' && (
              <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{width:'700px'}}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>General Settings</h2>
                  <button
                    onClick={() => toggleSection('general')}
                    className={`text-2xl hover:opacity-70 transition ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                  >
                    ✕
                  </button>
                </div>
                <GeneralSettings isDark={isDark} />
              </div>
            )}

            {/* Lending Settings */}
            {expandedSection === 'lending' && (
              <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{width:'700px'}}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Lending Settings</h2>
                  <button
                    onClick={() => toggleSection('lending')}
                    className={`text-2xl hover:opacity-70 transition ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                  >
                    ✕
                  </button>
                </div>
                <LendingSettings isDark={isDark} />
              </div>
            )}

            {/* Notification Settings */}
            {expandedSection === 'notification' && (
              <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{width:'700px'}}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Notification Settings</h2>
                  <button
                    onClick={() => toggleSection('notification')}
                    className={`text-2xl hover:opacity-70 transition ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                  >
                    ✕
                  </button>
                </div>
                <NotificationSettings/>
              </div>
            )}

            {/* Empty state when nothing is selected */}
            {!expandedSection && (
              <div className={`rounded-lg p-6  text-center ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-500'}`} style={{width:'700px'}}>
                <p className="text-lg">Select a section from the left to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

