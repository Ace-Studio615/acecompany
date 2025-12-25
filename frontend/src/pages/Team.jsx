import React from 'react';
import SideBar from '../components/SideBar';
import StatCard from "../components/StatCard.jsx";

const Team = () => {
    const SoftwareTeam = [
        { position: 'Manager', name: 'Richard' , salary: 90000},
        { position: 'Engineer', name: 'Layla' , salary: 50000},
        { position: 'Developer', name: 'Kyle' , salary: 60000},
    ];
    const CustomerService = [
        { position: 'Manager', name: 'Richard' , salary: 90000},
        { position: 'Secretary', name: 'Layla' , salary: 50000},
        { position: 'Phone Line', name: 'Kyle' , salary: 60000},
        { position: 'Online Service', name: 'Kyle' , salary: 50000},
    ];
    const CyberSecurity = [
        { position: 'Manager', name: 'Richard' , salary: 90000},
        { position: 'Cyber Security', name: 'Layla' , salary: 50000},
        { position: 'Cyber Security', name: 'Kyle' , salary: 60000},
    ];
    const MarketingTeam = [
        { position: 'Manager', name: 'Richard' , salary: 90000},
        { position: 'Designer', name: 'Layla' , salary: 50000},
        { position: 'Marketer', name: 'Kyle' , salary: 60000},
    ];
    return (
        <div className="flex h-screen bg-gray-100">
            <SideBar />
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
                    <h1 className="text-xl font-semibold text-gray-800">Company Teams</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Dec 2025</span>
                        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs">
                            AC
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatCard title="Marketing Team">
                            <ul className="space-y-3">
                                {MarketingTeam.map((item, index) => (
                                    <li key={index} className="flex justify-between text-sm border-b border-gray-50 pb-1">
                                        <span className="text-gray-600">{item.position}</span>
                                        <span className="text-gray-600">{item.name}</span>
                                        <span className="font-semibold text-gray-800">{item.salary}</span>
                                    </li>
                                ))}
                            </ul>
                        </StatCard>
                        <StatCard title="Customer Service Team">
                            <ul className="space-y-3">
                                {CustomerService.map((item, index) => (
                                    <li key={index} className="flex justify-between text-sm border-b border-gray-50 pb-1">
                                        <span className="text-gray-600">{item.position}</span>
                                        <span className="text-gray-600">{item.name}</span>
                                        <span className="font-semibold text-gray-800">{item.salary}</span>
                                    </li>
                                ))}
                            </ul>
                        </StatCard>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatCard title="Software Team">
                            <ul className="space-y-3">
                                {SoftwareTeam.map((item, index) => (
                                    <li key={index} className="flex justify-between text-sm border-b border-gray-50 pb-1">
                                        <span className="text-gray-600">{item.position}</span>
                                        <span className="text-gray-600">{item.name}</span>
                                        <span className="font-semibold text-gray-800">{item.salary}</span>
                                    </li>
                                ))}
                            </ul>
                        </StatCard>
                        <StatCard title="Cybersecurity Team">
                            <ul className="space-y-3">
                                {CyberSecurity.map((item, index) => (
                                    <li key={index} className="flex justify-between text-sm border-b border-gray-50 pb-1">
                                        <span className="text-gray-600">{item.position}</span>
                                        <span className="text-gray-600">{item.name}</span>
                                        <span className="font-semibold text-gray-800">{item.salary}</span>
                                    </li>
                                ))}
                            </ul>
                        </StatCard>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Team;
