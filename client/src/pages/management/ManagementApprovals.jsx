import React from "react";
import { Check, X, FileText, Clock } from "lucide-react";

const ManagementApprovals = () => {
    const approvals = [
        { id: 1, title: "Leave Request - Sarah Wilson", type: "Leave", date: "Jan 16, 2024", desc: "Medical leave for 3 days due to flu.", status: "Pending" },
        { id: 2, title: "New Microscope Purchase", type: "Expense", date: "Jan 15, 2024", desc: "Requesting approval for 5 new microscopes for Biology lab.", status: "Pending" },
        { id: 3, title: "Field Trip - Grade 10", type: "Event", date: "Jan 14, 2024", desc: "Educational trip to the Science Museum.", status: "Pending" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-[#0B1120]">Approvals</h1>
                <p className="text-slate-400 font-medium">Review and process pending requests</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {approvals.map((item) => (
                    <div key={item.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl mt-1">
                                <Clock size={24} />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-slate-100 text-slate-500 uppercase tracking-wide">{item.type}</span>
                                    <span className="text-xs font-bold text-slate-400">{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">{item.desc}</p>
                            </div>
                        </div>

                        <div className="flex gap-3 shrink-0">
                            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-500 font-bold hover:bg-rose-50 hover:text-rose-600 transition-colors">
                                <X size={18} />
                                Reject
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B1120] text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-slate-200">
                                <Check size={18} />
                                Approve
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagementApprovals;
