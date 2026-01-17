import React from "react";
import { Bell, Info, AlertTriangle, Calendar } from "lucide-react";

const StaffNotices = () => {
    const notices = [
        { id: 1, title: "Annual Staff Meeting", date: "Jan 20, 2024", type: "General", content: "All staff members are required to attend the annual meeting in the main auditorium at 2:00 PM.", priority: "High" },
        { id: 2, title: "Holiday Schedule Update", date: "Jan 18, 2024", type: "HR", content: "The school will remain closed on Jan 26th for Republic Day celebrations.", priority: "Medium" },
        { id: 3, title: "IT System Maintenance", date: "Jan 15, 2024", type: "IT", content: "Internal server maintenance scheduled for this weekend. Access may be intermittent.", priority: "Low" },
    ];

    return (
        <div className="space-y-8">
            <div>
                 <h1 className="text-3xl font-black text-[#0B1120]">Notice Board</h1>
                <p className="text-slate-400 font-medium">Important announcements and updates</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {notices.map((notice) => (
                    <div key={notice.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex gap-6 hover:shadow-md transition-shadow">
                         <div className={`p-4 rounded-2xl h-fit shrink-0 ${
                             notice.priority === 'High' ? 'bg-rose-50 text-rose-600' :
                             notice.priority === 'Medium' ? 'bg-blue-50 text-blue-600' :
                             'bg-slate-50 text-slate-600'
                         }`}>
                            <Bell size={24} />
                         </div>
                         <div className="flex-1">
                             <div className="flex items-center justify-between mb-2">
                                 <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${
                                      notice.priority === 'High' ? 'bg-rose-100 text-rose-700' :
                                      notice.priority === 'Medium' ? 'bg-blue-100 text-blue-700' :
                                      'bg-slate-100 text-slate-700'
                                 }`}>
                                     {notice.type}
                                 </span>
                                 <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                     <Calendar size={14} />
                                     {notice.date}
                                 </div>
                             </div>
                             <h3 className="text-xl font-bold text-slate-800 mb-2">{notice.title}</h3>
                             <p className="text-slate-600 font-medium leading-relaxed">
                                 {notice.content}
                             </p>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffNotices;
