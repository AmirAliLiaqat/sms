import React from "react";
import { DollarSign, Download, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const ManagementFinance = () => {
    const transactions = [
        { id: 1, desc: "Tuition Fees - 10th Grade", amount: "+$45,200", type: "income", date: "Jan 15, 2024" },
        { id: 2, desc: "Library Books Purchase", amount: "-$2,500", type: "expense", date: "Jan 14, 2024" },
        { id: 3, desc: "Canteen Vendor Payment", amount: "-$1,200", type: "expense", date: "Jan 12, 2024" },
        { id: 4, desc: "Sports Equipment Grant", amount: "+$5,000", type: "income", date: "Jan 10, 2024" },
    ];

    return (
        <div className="space-y-8">
             <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-[#0B1120]">Finance Summary</h1>
                    <p className="text-slate-400 font-medium">Financial health and transaction history</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                    <Download size={18} />
                    Download Report
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0B1120] rounded-[2rem] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-white/10 rounded-xl">
                                <DollarSign size={24} className="text-yellow-400" />
                            </div>
                            <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Total Balance</span>
                        </div>
                        <h2 className="text-5xl font-black mb-2">$845,240.50</h2>
                        <p className="text-green-400 font-bold flex items-center gap-2">
                            <ArrowUpRight size={16} /> +12.5% from last month
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">Monthly Income</p>
                            <h3 className="text-2xl font-black text-slate-800">$124,500</h3>
                        </div>
                        <div className="h-10 w-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                     <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">Monthly Expenses</p>
                            <h3 className="text-2xl font-black text-slate-800">$42,300</h3>
                        </div>
                         <div className="h-10 w-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-600">
                            <ArrowDownLeft size={20} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-100">
                    <h3 className="font-black text-lg text-slate-800">Recent Transactions</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Description</th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {transactions.map((t) => (
                                <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-8 py-4 font-bold text-slate-700">{t.desc}</td>
                                    <td className="px-8 py-4 text-slate-500 font-medium">{t.date}</td>
                                    <td className={`px-8 py-4 font-black text-right ${t.type === 'income' ? 'text-green-600' : 'text-slate-800'}`}>
                                        {t.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagementFinance;
