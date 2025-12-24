import React from 'react';

const Sidebar = () => {
    const menuItems = ['Dashboard', 'Analytics', 'Team', 'Settings'];

    return (
        <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
            <div className="p-6 text-2xl font-bold border-b border-slate-800">
                TechCorp
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="block py-2.5 px-4 rounded hover:bg-slate-800 transition"
                    >
                        {item}
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
