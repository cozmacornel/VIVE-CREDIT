import {useState} from "react";

function LendingSettings({ isDark = false }) {
    const [minAmount, setMinAmount] = useState(1000);
    const [maxAmount, setMaxAmount] = useState(50000);
    const [interestRate, setInterestRate] = useState(5.0);

    const handleSave = () => {
        alert('Lending settings saved!');
    };
    const handleCancel = () => {
        setMinAmount(1000);
        setMaxAmount(50000);
        setInterestRate(5.0);
    };
    return (
        <div className="space-y-6">
            <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    Minimum Loan Amount:
                </label>
                    <input 
                        type="number"
                        value={minAmount}
                        onChange={(e) => setMinAmount(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder= "Enter minimum loan amount"
                    />
                
            </div>
            <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    Maximum Loan Amount:
                </label>
                    <input 
                        type="number"
                        value={maxAmount}
                        onChange={(e) => setMaxAmount(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder= "Enter maximum loan amount"
                    />
            </div>
            <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    Interest Rate: {interestRate} (%):
                </label>
                    <input 
                        type="range"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder= "Enter interest rate"
                    />
                    <div className="flex justify-between text-xs mt-1 text-gray-500">
                        <span>0%</span>
                        <span>30%</span>
                    </div>
            </div>
            <div>
                
                <button 
                    onClick={handleSave}
                    className=" px-6 py-2 rounded-lg font-medium transition bg-gray-600 text-gray-800 hover:bg-gray-300"
                >
                    Salveaza
                </button>
                <button 
                    onClick={handleCancel}
                    className=" px-6 py-2 rounded-lg font-medium transition bg-blue-600 text-white hover:bg-blue-700"
                >
                    Anuleaza
                </button>
            </div>
        </div>
    )
}
export default LendingSettings;