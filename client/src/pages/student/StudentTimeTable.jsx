import React from "react";
import { Clock } from "lucide-react";

const timeSlots = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 11:15",
  "11:15 - 12:15",
  "12:15 - 01:15",
  "01:15 - 02:00",
  "02:00 - 03:00",
  "03:00 - 04:00"
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const schedule = {
  Monday: [
    { subject: "Adv Java", room: "Lab 2", type: "Lab", color: "bg-indigo-100 border-indigo-200 text-indigo-700" },
    { subject: "DBMS", room: "Room 101", type: "Theory", color: "bg-blue-50 border-blue-100 text-blue-700" },
    { type: "Break" },
    { subject: "Soft Eng", room: "Room 104", type: "Theory", color: "bg-emerald-50 border-emerald-100 text-emerald-700" },
    { subject: "Stats", room: "Room 102", type: "Theory", color: "bg-orange-50 border-orange-100 text-orange-700" },
    { type: "Lunch" },
    { subject: "Library", room: "Lib", type: "Self", color: "bg-slate-50 border-slate-100 text-slate-700" },
    { subject: "Sports", room: "Ground", type: "Activity", color: "bg-yellow-50 border-yellow-100 text-yellow-700" }
  ],
  Tuesday: [
    { subject: "DBMS", room: "Room 101", type: "Theory", color: "bg-blue-50 border-blue-100 text-blue-700" },
    { subject: "Adv Java", room: "Room 101", type: "Theory", color: "bg-indigo-50 border-indigo-100 text-indigo-700" },
    { type: "Break" },
    { subject: "Stats", room: "Room 102", type: "Theory", color: "bg-orange-50 border-orange-100 text-orange-700" },
    { subject: "Soft Eng", room: "Room 104", type: "Theory", color: "bg-emerald-50 border-emerald-100 text-emerald-700" },
    { type: "Lunch" },
    { subject: "Web Lab", room: "Lab 1", type: "Lab", span: 2, color: "bg-pink-50 border-pink-100 text-pink-700" },
    null // Spanned
  ],
  Wednesday: [
    { subject: "Soft Eng", room: "Room 104", type: "Theory", color: "bg-emerald-50 border-emerald-100 text-emerald-700" },
    { subject: "Stats", room: "Room 102", type: "Theory", color: "bg-orange-50 border-orange-100 text-orange-700" },
    { type: "Break" },
    { subject: "Adv Java", room: "Lab 2", type: "Lab", span: 2, color: "bg-indigo-100 border-indigo-200 text-indigo-700" },
    null,
    { type: "Lunch" },
    { subject: "Mentor", room: "Room 101", type: "Meeting", color: "bg-purple-50 border-purple-100 text-purple-700" },
    { subject: "Club", room: "Hall", type: "Activity", color: "bg-yellow-50 border-yellow-100 text-yellow-700" }
  ],
  Thursday: [
    { subject: "DBMS Lab", room: "Lab 3", type: "Lab", span: 2, color: "bg-blue-100 border-blue-200 text-blue-700" },
    null,
    { type: "Break" },
    { subject: "Web Tech", room: "Room 104", type: "Theory", color: "bg-pink-50 border-pink-100 text-pink-700" },
    { subject: "Soft Eng", room: "Room 104", type: "Theory", color: "bg-emerald-50 border-emerald-100 text-emerald-700" },
    { type: "Lunch" },
    { subject: "Library", room: "Lib", type: "Self", color: "bg-slate-50 border-slate-100 text-slate-700" },
    { subject: "Games", room: "Ground", type: "Activity", color: "bg-yellow-50 border-yellow-100 text-yellow-700" }
  ],
  Friday: [
    { subject: "Stats", room: "Room 102", type: "Theory", color: "bg-orange-50 border-orange-100 text-orange-700" },
    { subject: "Web Tech", room: "Room 104", type: "Theory", color: "bg-pink-50 border-pink-100 text-pink-700" },
    { type: "Break" },
    { subject: "Project", room: "Lab 4", type: "Lab", span: 2, color: "bg-teal-50 border-teal-100 text-teal-700" },
    null,
    { type: "Lunch" },
    { subject: "Seminar", room: "Hall", type: "Events", color: "bg-rose-50 border-rose-100 text-rose-700" },
    { subject: "Free", room: "-", type: "Self", color: "bg-slate-50 border-slate-100 text-slate-700" }
  ]
};

const StudentTimeTable = () => {
  return (
    <div className="space-y-8 pb-12 h-[calc(100vh-100px)] flex flex-col">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Weekly Timetable</h1>
        <p className="text-slate-400 font-medium">Your academic schedule at a glance.</p>
      </div>

      <div className="flex-1 bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 custom-scrollbar">
          <table className="w-full min-w-[1000px] h-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 bg-[#0B1120] text-white text-left font-black w-32 sticky left-0 z-10">Day / Time</th>
                {timeSlots.map((slot, i) => (
                  <th key={i} className="p-4 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider text-center border-b border-slate-100 min-w-[120px]">
                    <div className="flex items-center justify-center gap-2">
                       <Clock size={12} /> {slot}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map((day) => (
                <tr key={day} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 bg-slate-50 text-slate-700 font-bold sticky left-0 z-10 border-r border-slate-100">{day}</td>
                  {schedule[day].map((cell, idx) => {
                    if (!cell) return null; // Skip if spanned
                    if (cell.type === "Break" || cell.type === "Lunch") {
                      return (
                        <td key={idx} className="p-2 text-center bg-slate-50/30">
                          <div className="h-full flex flex-col items-center justify-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 -rotate-90 whitespace-nowrap">
                              {cell.type}
                            </span>
                          </div>
                        </td>
                      );
                    }
                    return (
                      <td key={idx} colSpan={cell.span || 1} className="p-2 align-top">
                        <div className={`h-full min-h-[80px] rounded-xl p-3 border flex flex-col justify-between transition-all hover:scale-[1.02] hover:shadow-md cursor-default ${cell.color}`}>
                          <div>
                            <div className="text-sm font-black mb-1">{cell.subject}</div>
                            <div className="text-[10px] font-bold opacity-80 uppercase tracking-wide">{cell.type}</div>
                          </div>
                          <div className="flex items-center gap-1 text-[10px] font-bold opacity-60">
                            <span>{cell.room}</span>
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTimeTable;
