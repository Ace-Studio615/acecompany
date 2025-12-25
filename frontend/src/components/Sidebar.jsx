import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
            <div className="p-6 text-2xl font-bold border-b border-slate-800">
                TechCorp
            </div>
            <nav className="flex-1 p-4 space-y-2">
                <Link to="/" className="block py-2.5 px-4 rounded hover:bg-slate-800 transition">
                    Dashboard
                </Link>
                <Link to="/team" className="block py-2.5 px-4 rounded hover:bg-slate-800 transition">
                    Team
                </Link>
                <Link to="/analytics" className="block py-2.5 px-4 rounded hover:bg-slate-800 transition">
                    Analytics
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
