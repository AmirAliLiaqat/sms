import React from "react";
import { FileText, Download, Calendar, PieChart } from "lucide-react";

const ManagementReports = () => {
    const reports = [
        { id: 1, title: "Monthly Attendance Report", type: "Academic", date: "Jan 01, 2024", size: "2.4 MB", icon: Calendar, color: "bg-blue-500" },
        { id: 2, title: "Q4 Financial Statement", type: "Financial", date: "Jan 10, 2024", size: "1.8 MB", icon: PieChart, color: "bg-green-500" },
        { id: 3, title: "Staff Performance Review", type: "HR", date: "Dec 30, 2023", size: "3.2 MB", icon: FileText, color: "bg-purple-500" },
        { id: 4, title: "Library Inventory Audit", type: "Inventory", date: "Jan 12, 2024", size: "1.5 MB", icon: FileText, color: "bg-orange-500" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-[#0B1120]">Reports</h1>
                <p className="text-slate-400 font-medium">Access and download system reports</p>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-2">
                <div className="grid grid-cols-1">
                    {reports.map((report) => (
                        <div key={report.id} className="group flex items-center justify-between p-6 hover:bg-slate-50 rounded-2xl transition-all border-b border-slate-50 last:border-0">
                            <div className="flex items-center gap-4">
                                <div className={`p-4 rounded-xl ${report.color} bg-opacity-10 text-${report.color.split("-")[1]}-600`}>
                                    <report.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-[#0B1120] transition-colors">{report.title}</h3>
                                    <div className="flex items-center gap-4 mt-1 text-sm font-medium text-slate-400">
                                        <span>{report.type}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span>{report.date}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span>{report.size}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="p-3 rounded-xl bg-slate-100 text-slate-500 hover:bg-[#0B1120] hover:text-white transition-all shadow-sm hover:shadow-lg">
                                <Download size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagementReports;
