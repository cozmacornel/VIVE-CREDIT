import {useState} from "react";



function NotificationSettings() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);

    const handleSave = () => {
        alert('Notification settings saved!');
    };
    const handleCancel = () => {
        setEmailNotifications(true);
        setSmsNotifications(false);
    };
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-500 rounded-lg">
                <div className="flex flex-col">
                    <span className="font-medium text-gray-900">Email Notifications</span>
                    <span className="text-gray-500 text-sm">Primesti actualizari prin email</span>
                </div>
                <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`w-14 h-8 relative inline-flex items-center rounded-full transition-colors duration-300 focus:outline-none 
                        ${emailNotifications ? 'bg-blue-600' : 'bg-gray-300'}`}
                >
                    <span
                        className={`inline-block w-6 h-6 transform bg-white rounded-full shadow transition-transform duration-300
                            ${emailNotifications ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-500 rounded-lg">
                <div className="flex flex-col">
                    <span className="font-medium text-gray-900">Notificari SMS</span>
                    <span className="text-gray-500 text-sm">Primesti alertari pri SMS</span>
                </div>
                <button
                    onClick={() => setSmsNotifications(!smsNotifications)}
                    className={`w-14 h-8 relative inline-flex items-center rounded-full transition-colors duration-300 focus:outline-none
                        ${smsNotifications ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                    <span
                        className={`inline-block w-6 h-6 transform bg-white rounded-full shadow transition-transform duration-300
                            ${smsNotifications ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
            </div>
            <div>
                <button 
                    className={`px-6 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-lg font-medium transition ${
                        'bg-gray-600 text-white hover:bg-gray-700'
                    }`}
                    onClick={handleCancel}
                >
                    Anuleaza
                </button>
                <button 
                    className=" px-6 py-2 rounded-lg font-medium transition bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    onClick={handleSave}
                >
                    Salveaza
                </button>
            </div>
        </div>
    )
}
export default NotificationSettings;