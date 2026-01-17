import React, { useState } from "react";
import { Bell, Megaphone, Calendar, Clock, ChevronRight } from "lucide-react";

const FacultyAnnouncements = () => {
  const [filter, setFilter] = useState("all");

  const announcements = [
    {
      id: 1,
      title: "Faculty Meeting - Department Changes",
      content: "There will be a mandatory faculty meeting this Friday to discuss upcoming changes to the department structure.",
      date: "Jan 18, 2024",
      time: "10:00 AM",
      type: "Staff",
      priority: "High",
    },
    {
      id: 2,
      title: "Mid-Term Grade Submission Deadline",
      content: "Please ensure all mid-term grades are submitted by the 25th of January.",
      date: "Jan 20, 2024",
      time: "05:00 PM",
      type: "Academic",
      priority: "High",
    },
     {
      id: 3,
      title: "Campus Maintenance Schedule",
      content: "The main building will undergo maintenance on Saturday. Please clear your lockers if necessary.",
      date: "Jan 22, 2024",
      time: "08:00 AM",
      type: "General",
      priority: "Medium",
    },
     {
      id: 4,
      title: "New Library Resources",
      content: "The library has acquired new journals for the Physics and Math departments.",
      date: "Jan 15, 2024",
      time: "09:00 AM",
      type: "General",
      priority: "Low",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Announcements</h1>
        <p className="text-slate-400 font-medium">Stay updated with latest news and notices</p>
      </div>

       <div className="flex gap-2 pb-4 overflow-x-auto">
          {['all', 'Staff', 'Academic', 'General'].map((type) => (
             <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
                    filter === type 
                    ? 'bg-[#0B1120] text-white shadow-lg shadow-slate-200' 
                    : 'bg-white text-slate-500 hover:bg-slate-50 border border-transparent hover:border-slate-100'
                }`}
             >
                 {type}
             </button>
          ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
         {announcements
            .filter(item => filter === 'all' || item.type === filter)
            .map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-1.5 h-full ${
                    item.priority === 'High' ? 'bg-rose-500' : 
                    item.priority === 'Medium' ? 'bg-orange-500' : 'bg-blue-500'
                }`} />
                
                <div className="ml-4">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                             <span className={`px-2 py-1 rounded-lg text-[10px] uppercase font-bold tracking-wider ${
                                item.priority === 'High' ? 'bg-rose-50 text-rose-600' : 
                                item.priority === 'Medium' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                            }`}>
                                {item.priority} Priority
                            </span>
                             <span className="text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                <Megaphone size={12} /> {item.type}
                            </span>
                        </div>
                        <span className="text-xs font-medium text-slate-400 flex items-center gap-2">
                             <Calendar size={14} /> {item.date}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {item.content}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                             <Clock size={14} /> Posted at {item.time}
                        </div>
                        <button className="text-sm font-bold text-[#0B1120] flex items-center gap-1 hover:gap-2 transition-all">
                            Read More <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default FacultyAnnouncements;
