import React from 'react';

const StatCard = ({ title, value, change, isPositive = true, children }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
            <p className="text-sm text-gray-500 font-medium mb-2">{title}</p>

            {/* If a value is provided, show the big number */}
            {value && (
                <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                    {change && (
                        <span className={`text-xs font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </span>
                    )}
                </div>
            )}

            {/* This is where your list (children) will appear */}
            <div className="mt-2 w-full">
                {children}
            </div>
        </div>
    );
};

export default StatCard;
