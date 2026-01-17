import React from "react";
import { Users, BookOpen, Wallet, ChevronRight } from "lucide-react";

const ManagementDepartments = () => {
    const departments = [
        { id: 1, name: "Science", head: "Dr. Alan Grant", staff: 12, budget: "$45,000", color: "bg-blue-500" },
        { id: 2, name: "Mathematics", head: "Dr. Katherine Johnson", staff: 8, budget: "$30,000", color: "bg-purple-500" },
        { id: 3, name: "Humanities", head: "Prof. John Keating", staff: 10, budget: "$25,000", color: "bg-orange-500" },
        { id: 4, name: "Sports", head: "Coach Carter", staff: 5, budget: "$60,000", color: "bg-green-500" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-[#0B1120]">Departments</h1>
                <p className="text-slate-400 font-medium">Overview of school departments</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept) => (
                    <div key={dept.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                        <div className="flex items-start justify-between mb-6">
                            <div className={`p-4 rounded-2xl ${dept.color} bg-opacity-10 text-${dept.color.split("-")[1]}-600`}>
                                <BookOpen size={24} />
                            </div>
                            <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 mb-2">{dept.name}</h3>
                        <p className="text-sm text-slate-500 mb-6 font-medium">Head: <span className="text-slate-700 font-bold">{dept.head}</span></p>

                        <div className="space-y-3 pt-6 border-t border-slate-100">
                             <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm font-bold flex items-center gap-2">
                                    <Users size={16} /> Staff Count
                                </span>
                                <span className="font-bold text-slate-700">{dept.staff}</span>
                             </div>
                             <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm font-bold flex items-center gap-2">
                                    <Wallet size={16} /> Budget
                                </span>
                                <span className="font-bold text-slate-700">{dept.budget}</span>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagementDepartments;
