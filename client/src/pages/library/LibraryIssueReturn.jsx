import React, { useState } from "react";
import { QrCode, Search, CornerDownLeft, CornerUpRight } from "lucide-react";

const LibraryIssueReturn = () => {
    const [action, setAction] = useState("issue"); // 'issue' | 'return'

    return (
        <div className="space-y-8">
            <div>
                 <h1 className="text-3xl font-black text-[#0B1120]">Issue / Return</h1>
                <p className="text-slate-400 font-medium">Process book transactions</p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 max-w-4xl mx-auto">
                <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8 w-fit mx-auto">
                    <button
                        onClick={() => setAction("issue")}
                        className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                            action === "issue" ? "bg-white text-[#0B1120] shadow-md" : "text-slate-500 hover:text-slate-700"
                        }`}
                    >
                        <CornerUpRight size={18} /> Issue Book
                    </button>
                    <button
                        onClick={() => setAction("return")}
                        className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                            action === "return" ? "bg-white text-[#0B1120] shadow-md" : "text-slate-500 hover:text-slate-700"
                        }`}
                    >
                        <CornerDownLeft size={18} /> Return Book
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="relative">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Student / Faculty ID</label>
                         <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-800 outline-none focus:border-[#FFD60A] transition-colors placeholder:font-medium placeholder:text-slate-400"
                                placeholder="Enter ID or Scan Card..."
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white rounded-lg text-slate-400 hover:text-[#0B1120] shadow-sm border border-slate-100 transition-colors">
                                <QrCode size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                         <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Book ISBN / ID</label>
                         <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-800 outline-none focus:border-[#FFD60A] transition-colors placeholder:font-medium placeholder:text-slate-400"
                                placeholder="Enter Book ISBN..."
                            />
                             <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white rounded-lg text-slate-400 hover:text-[#0B1120] shadow-sm border border-slate-100 transition-colors">
                                <QrCode size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-end">
                         <button className={`px-8 py-4 rounded-xl font-black text-white shadow-lg shadow-slate-200 hover:opacity-90 transition-opacity flex items-center gap-2 ${
                            action === 'issue' ? 'bg-[#0B1120]' : 'bg-green-600 shadow-green-200'
                        }`}>
                             {action === 'issue' ? <CornerUpRight size={20} /> : <CornerDownLeft size={20} />}
                             {action === 'issue' ? 'Issue Book Now' : 'Process Return'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryIssueReturn;
