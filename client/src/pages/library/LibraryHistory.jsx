import React from "react";
import { History, Calendar, DollarSign } from "lucide-react";

const LibraryHistory = () => {
     const history = [
        { id: 1, user: "John Doe (Student)", book: "The Great Gatsby", issued: "Jan 10, 2024", returned: "Jan 17, 2024", fine: "$0.00", status: "Returned" },
        { id: 2, user: "Sarah Smith (Student)", book: "Physics 101", issued: "Dec 15, 2023", returned: "Jan 05, 2024", fine: "$2.50", status: "Late Return" },
        { id: 3, user: "Michael Brown (Faculty)", book: "Advanced Calculus", issued: "Jan 05, 2024", returned: "-", fine: "$0.00", status: "Issued" },
    ];

    return (
        <div className="space-y-8">
            <div>
                 <h1 className="text-3xl font-black text-[#0B1120]">History & Fines</h1>
                <p className="text-slate-400 font-medium">View transaction records and fines</p>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                     <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">User & Book</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Dates</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Fine</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {history.map((record) => (
                            <tr key={record.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                     <div className="font-bold text-slate-800">{record.user}</div>
                                     <div className="text-xs text-slate-500 font-medium italic">{record.book}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                            <span className="w-14 text-slate-400 uppercase tracking-wider text-[10px] font-bold">Issued:</span> {record.issued}
                                        </div>
                                         <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                            <span className="w-14 text-slate-400 uppercase tracking-wider text-[10px] font-bold">Returned:</span> {record.returned}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                                        record.status === 'Returned' ? 'bg-green-100 text-green-700' :
                                        record.status === 'Late Return' ? 'bg-orange-100 text-orange-700' :
                                        'bg-blue-100 text-blue-700'
                                    }`}>
                                        {record.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className={`font-black ${record.fine === '$0.00' ? 'text-slate-400' : 'text-rose-600'}`}>
                                        {record.fine}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LibraryHistory;
