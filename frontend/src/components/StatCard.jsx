import React from 'react';

const StatCard = ({ title, value, change, isPositive = true }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <div className="flex items-baseline gap-2 mt-2">
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                <span className={`text-xs font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
            </div>
        </div>
    );
};

export default StatCard;
