import React, { useState } from "react";
import { Bell, Calendar, ChevronRight } from "lucide-react";

const allNotices = [
  {
    id: 1,
    title: "End Semester Examination Schedule Released",
    category: "Examination",
    date: "Jan 15, 2025",
    content: "The final timetable for the upcoming semester examinations has been released. Students are requested to download the schedule from the exam portal. Hall tickets will be available from Jan 20th.",
    priority: "High"
  },
  {
    id: 2,
    title: "Annual Sports Day Registration",
    category: "Events",
    date: "Jan 12, 2025",
    content: "Registrations for the Annual Sports Day meet are now open. Interested students can register with the Sports Department before Jan 18th.",
    priority: "Medium"
  },
  {
    id: 3,
    title: "Library Maintenance Announcement",
    category: "General",
    date: "Jan 10, 2025",
    content: "The central library will remain closed on this Sunday for scheduled maintenance. Please plan your study hours accordingly.",
    priority: "Low"
  },
  {
    id: 4,
    title: "Guest Lecture on AI",
    category: "Academic",
    date: "Jan 08, 2025",
    content: "Department of Computer Science is organizing a guest lecture on 'Future of AI' by Dr. Alan Smith on Jan 22nd at the Main Auditorium.",
    priority: "Medium"
  },
];

const StudentNotices = () => {
  const [selectedNotice, setSelectedNotice] = useState(allNotices[0]);

  return (
    <div className="space-y-8 pb-12 h-[calc(100vh-100px)] flex flex-col">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Announcements</h1>
        <p className="text-slate-400 font-medium">Stay updated with latest news and notices.</p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Notices List */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Bell size={20} className="text-[#FFD60A]" />
              Recent Notices
            </h3>
          </div>
          <div className="overflow-y-auto flex-1 p-4 space-y-2 custom-scrollbar">
            {allNotices.map((notice) => (
              <button
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className={`w-full text-left p-4 rounded-xl transition-all border ${
                  selectedNotice.id === notice.id
                    ? "bg-[#0B1120] text-white border-[#0B1120] shadow-lg shadow-slate-200"
                    : "bg-white border-slate-100 hover:bg-slate-50 text-slate-600"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded ${
                    selectedNotice.id === notice.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {notice.category}
                  </span>
                  <span className={`text-[10px] font-medium ${selectedNotice.id === notice.id ? "text-slate-400" : "text-slate-400"}`}>
                    {notice.date}
                  </span>
                </div>
                <h4 className={`text-sm font-bold line-clamp-2 ${selectedNotice.id === notice.id ? "text-white" : "text-slate-800"}`}>
                  {notice.title}
                </h4>
              </button>
            ))}
          </div>
        </div>

        {/* Notice Detail View */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 flex flex-col overflow-y-auto custom-scrollbar">
          {selectedNotice ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                  selectedNotice.priority === 'High' ? 'bg-rose-100 text-rose-600' :
                  selectedNotice.priority === 'Medium' ? 'bg-amber-100 text-amber-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {selectedNotice.priority} Only
                </span>
                <span className="text-sm font-bold text-slate-400 flex items-center gap-2">
                  <Calendar size={14} />
                  {selectedNotice.date}
                </span>
              </div>
              
              <h2 className="text-3xl font-black text-slate-800 leading-tight">
                {selectedNotice.title}
              </h2>
              
              <div className="w-full h-px bg-slate-100 my-4" />
              
              <div className="prose prose-slate prose-lg">
                <p className="text-slate-600 font-medium leading-relaxed">
                  {selectedNotice.content}
                </p>
                <p className="text-slate-600 font-medium leading-relaxed mt-4">
                  For further query, please contact the administration office.
                </p>
              </div>

              <div className="pt-8 mt-auto">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Signed By</p>
                <p className="text-sm font-black text-slate-800 mt-1">Dr. Admin Principal</p>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400 font-medium">
              Select a notice to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentNotices;
