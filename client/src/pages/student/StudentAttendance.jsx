import React, { useState } from "react";
import { Calendar as CalendarIcon, PieChart, CheckCircle, XCircle, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, getDay } from "date-fns";

const overallStats = [
  { label: "Present", value: "85%", count: 42, color: "text-green-500", bg: "bg-green-50", icon: CheckCircle },
  { label: "Absent", value: "10%", count: 5, color: "text-rose-500", bg: "bg-rose-50", icon: XCircle },
  { label: "Late", value: "5%", count: 3, color: "text-amber-500", bg: "bg-amber-50", icon: AlertCircle },
];

const subjectAttendance = [
  { subject: "Adv Java", total: 20, present: 18, percentage: 90 },
  { subject: "DBMS", total: 18, present: 15, percentage: 83.3 },
  { subject: "Soft Eng", total: 22, present: 20, percentage: 90.9 },
  { subject: "Stats", total: 15, present: 12, percentage: 80 },
  { subject: "Web Tech", total: 16, present: 16, percentage: 100 },
];

const attendanceHistory = {
  "2025-01-02": "Present",
  "2025-01-03": "Present",
  "2025-01-06": "Late",
  "2025-01-07": "Present",
  "2025-01-08": "Absent",
  "2025-01-09": "Present",
  "2025-01-10": "Present",
  "2025-01-13": "Present",
  "2025-01-14": "Present",
  "2025-01-15": "Absent",
  "2025-01-16": "Present",
  "2025-01-17": "Present", // Today
};

const StudentAttendance = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Calculate empty placeholders for start of month
  const startDay = getDay(monthStart); // 0 (Sun) to 6 (Sat)
  // Adjust so Monday is 0, Sunday is 6 if needed, but standard calendar is Sun-Sat usually. Let's stick to standard.
  const placeholders = Array.from({ length: startDay });

  const getStatusColor = (date) => {
    const key = format(date, "yyyy-MM-dd");
    const status = attendanceHistory[key];
    if (status === "Present") return "bg-green-500 text-white shadow-green-200";
    if (status === "Absent") return "bg-rose-500 text-white shadow-rose-200";
    if (status === "Late") return "bg-amber-500 text-white shadow-amber-200";
    return "";
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Attendance Record</h1>
        <p className="text-slate-400 font-medium">Track your presence and punctuality.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {overallStats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-800">{stat.value}</h3>
              <p className="text-xs text-slate-400 font-medium mt-1">{stat.count} Days</p>
            </div>
            <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <CalendarIcon size={20} className="text-[#FFD60A]" />
              Monthly View
            </h3>
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
              <button 
                onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                className="p-2 hover:bg-white rounded-lg transition-colors shadow-sm"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-sm font-black w-32 text-center">
                {format(currentDate, "MMMM yyyy")}
              </span>
              <button 
                onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                className="p-2 hover:bg-white rounded-lg transition-colors shadow-sm"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-4">
            {placeholders.map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {daysInMonth.map((date, i) => {
              const statusClass = getStatusColor(date);
              const isToday = isSameDay(date, new Date());
              return (
                <div 
                  key={i} 
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center text-sm font-bold border transition-all hover:scale-105 cursor-pointer relative ${
                    statusClass 
                      ? `${statusClass} border-transparent shadow-lg` 
                      : isToday 
                        ? 'bg-[#0B1120] text-white border-[#0B1120]' 
                        : 'bg-slate-50 border-slate-100 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {format(date, 'd')}
                  {statusClass && (
                    <div className="w-1 h-1 bg-white rounded-full mt-1 opacity-50" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-6 mt-8 justify-center">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <div className="w-3 h-3 rounded-full bg-green-500" /> Present
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <div className="w-3 h-3 rounded-full bg-rose-500" /> Absent
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <div className="w-3 h-3 rounded-full bg-amber-500" /> Late
            </div>
          </div>
        </div>

        {/* Subject wise stats */}
        <div className="space-y-6">
          <div className="bg-[#0B1120] rounded-[2rem] p-8 text-white relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <PieChart size={20} className="text-[#FFD60A]" />
                 By Subject
               </h3>
               <div className="space-y-5">
                 {subjectAttendance.map((sub, idx) => (
                   <div key={idx}>
                     <div className="flex justify-between text-sm mb-1.5 font-medium">
                       <span className="text-slate-300">{sub.subject}</span>
                       <span className={sub.percentage < 75 ? "text-rose-400 font-bold" : "text-[#FFD60A] font-bold"}>
                         {sub.percentage}%
                       </span>
                     </div>
                     <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div 
                         className={`h-full rounded-full ${sub.percentage < 75 ? "bg-rose-500" : "bg-gradient-to-r from-yellow-400 to-yellow-600"}`} 
                         style={{ width: `${sub.percentage}%` }}
                       />
                     </div>
                   </div>
                 ))}
               </div>
               <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 text-center font-medium">
                 Minimum 75% attendance required in each subject.
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;
