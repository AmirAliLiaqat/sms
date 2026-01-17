import React from "react";
import { FileText, Calendar, Trophy, AlertCircle, TrendingUp, Clock } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const examResults = [
  { semester: "Sem 1", gpa: 3.5 },
  { semester: "Sem 2", gpa: 3.2 },
  { semester: "Sem 3", gpa: 3.8 },
];

const upcomingExams = [
  { subject: "Advanced Java", date: "Jan 25, 2025", time: "10:00 AM", type: "Mid-Term", room: "Hall A" },
  { subject: "DBMS", date: "Jan 27, 2025", time: "10:00 AM", type: "Mid-Term", room: "Hall B" },
  { subject: "Software Engineering", date: "Jan 29, 2025", time: "02:00 PM", type: "Mid-Term", room: "Lab 2" },
];

const recentResults = [
  { subject: "Web Technologies", marks: 88, grade: "A", date: "Dec 15, 2024" },
  { subject: "Operating Systems", marks: 76, grade: "B+", date: "Dec 12, 2024" },
  { subject: "Computer Networks", marks: 92, grade: "A+", date: "Dec 10, 2024" },
  { subject: "Mathematics IV", marks: 65, grade: "C+", date: "Dec 08, 2024" },
];

const StudentExams = () => {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Exams & Results</h1>
        <p className="text-slate-400 font-medium">View schedules and academic performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#0B1120] p-6 rounded-2xl shadow-lg shadow-slate-200 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Current CGPA</p>
            <h3 className="text-4xl font-black text-[#FFD60A] mb-2">3.82</h3>
            <p className="text-[10px] text-slate-400 font-medium">Need 4.0 for Distinction</p>
          </div>
          <Trophy className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 group-hover:scale-110 transition-transform" />
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Credits</p>
          <h3 className="text-3xl font-black text-slate-800">85</h3>
          <p className="text-[10px] text-green-500 font-bold mt-1">+12 this semester</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Backlogs</p>
          <h3 className="text-3xl font-black text-slate-800">0</h3>
          <p className="text-[10px] text-slate-400 font-medium mt-1">Keep it up!</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Upcoming</p>
          <h3 className="text-3xl font-black text-slate-800">3</h3>
          <p className="text-[10px] text-amber-500 font-bold mt-1">Exams next week</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Schedule */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Calendar size={20} className="text-[#FFD60A]" />
                Upcoming Exams
              </h3>
              <button className="text-xs font-bold text-slate-500 hover:text-slate-800">Download Hall Ticket</button>
            </div>
            <div className="space-y-4">
              {upcomingExams.map((exam, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all gap-4">
                  <div className="bg-white min-w-[80px] h-20 rounded-xl flex flex-col items-center justify-center text-center shadow-sm border border-slate-100">
                    <span className="text-xs font-bold text-red-500 uppercase">{exam.date.split(" ")[0]}</span>
                    <span className="text-2xl font-black text-slate-800">{exam.date.split(" ")[1].replace(",", "")}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0B1120] text-white uppercase tracking-wide">
                        {exam.type}
                      </span>
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {exam.time}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-800">{exam.subject}</h4>
                    <p className="text-xs text-slate-500 font-medium">Venue: {exam.room}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
             <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <TrendingUp size={20} className="text-purple-500" />
               Performance History
             </h3>
             <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={examResults}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="semester" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis 
                      domain={[0, 4]}
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                    />
                    <Tooltip 
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    />
                    <Bar dataKey="gpa" fill="#4F46E5" radius={[6, 6, 0, 0]} barSize={50} />
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>

        {/* Recent Results List */}
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FileText size={20} className="text-green-500" />
              Recent Results
            </h3>
            <div className="space-y-6">
              {recentResults.map((res, idx) => (
                <div key={idx} className="flex items-center justify-between pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{res.subject}</h4>
                    <p className="text-[10px] font-medium text-slate-400">{res.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-[#0B1120]">{res.grade}</div>
                    <div className="text-[10px] font-bold text-slate-400">{res.marks}/100</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-xl bg-slate-50 text-slate-600 text-xs font-bold hover:bg-slate-100 transition-colors">
              View All Semesters
            </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentExams;
