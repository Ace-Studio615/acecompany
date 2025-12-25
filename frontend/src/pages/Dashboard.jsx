import React from 'react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
                    <h1 className="text-xl font-semibold text-gray-800">Company Overview</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Dec 2025</span>
                        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs">
                            AC
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatCard title="Total Revenue" value="$425,000" change="+12.5%" />
                        <StatCard title="Active Projects" value="14" change="+2" />
                        <StatCard title="Employee Count" value="156" change="0%" />
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 min-h-[400px]">
                        <h2 className="text-lg font-bold mb-4">Quarterly Growth</h2>
                        <div className="border-2 border-dashed border-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-400 italic">
                            Chart visualization area
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
