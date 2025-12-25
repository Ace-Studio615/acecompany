import React from 'react'
import Sidebar from "../components/Sidebar.jsx";
import FinancialBreakdown from "../components/FinancialBreakdown";

const Analytics = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
                    <h1 className="text-xl font-semibold text-gray-800">Company Analytics</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Dec 2025</span>
                        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs">
                            AC
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-8">
                    {/* New Financial Component */}
                    <div className="space-y-8">
                        <FinancialBreakdown />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Analytics;
