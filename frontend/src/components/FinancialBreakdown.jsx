import React from 'react';

const FinancialBreakdown = () => {
    // Example data - later this could come from a JSON file or API
    const financialData = [
        { month: 'January', income: 45000, spending: 32000 },
        { month: 'February', income: 52000, spending: 34000 },
        { month: 'March', income: 48000, spending: 31000 },
        { month: 'April', income: 61000, spending: 38000 },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800">Financial Summary</h2>
                <p className="text-sm text-gray-500">Gross income vs operational spending</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="bg-gray-50 text-gray-600 text-sm uppercase font-semibold">
                        <th className="px-6 py-4">Month</th>
                        <th className="px-6 py-4 text-right">Gross Income</th>
                        <th className="px-6 py-4 text-right">Spending</th>
                        <th className="px-6 py-4 text-right">Net Profit</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {financialData.map((row, index) => {
                        const profit = row.income - row.spending;
                        return (
                            <tr key={index} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 font-medium text-gray-900">{row.month}</td>
                                <td className="px-6 py-4 text-right text-green-600 font-medium">
                                    +${row.income.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-right text-red-500">
                                    -${row.spending.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-right font-bold text-gray-800">
                                    ${profit.toLocaleString()}
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinancialBreakdown;
