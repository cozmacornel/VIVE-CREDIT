import {useState} from "react";

interface GeneralSettingsProps {
    isDark?: boolean;
}

function GeneralSettings({ isDark = false }: GeneralSettingsProps) {
    const [companyName, setCompanyName] = useState("");
    const [timezone, setTimezone] = useState("UTC");
    const handleSave = () => {
        alert('General settings saved!');
    };
    const handleCancel = () => {
        setCompanyName("");
        setTimezone("UTC");
    };
    return (
        <div className="space-y-6">
            <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    Company Name:
                </label>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter company name"
                    />
                
            </div>
            <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    Timezone:
                </label>
                    <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="UTC">UTC</option>
                        <option value="PST">PST</option>
                        <option value="EST">EST</option>
                    </select>
            </div>
            <div>
                
                <button 
                    onClick={handleCancel}
                    className="px-6 py-2 bg-gray-600 rounded-lg font-medium hover:bg-gray-700 transition"
                >
                    Anuleaza
                </button>
                <button 
                    onClick={handleSave}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    Salveaza
                </button>
            </div>
        </div>
    )
}
export default GeneralSettings;