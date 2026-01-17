import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Clock, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import {
  studentStats,
  performanceData,
  upcomingClasses,
  recentNotices,
} from "../../mock/student/dashboard";

const StudentDashboard = () => {
  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Student Dashboard</h1>
        <p className="text-slate-400 font-medium">
          Welcome back! Here's your daily overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {studentStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                  <stat.icon size={24} className={`text-${stat.color.split("-")[1]}-600`} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {stat.title}
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-800 mb-1">{stat.value}</h3>
              <p className="text-xs text-slate-500 font-medium">{stat.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Performance Chart */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-800">Academic Performance</h3>
              <select className="bg-slate-50 border-none rounded-lg text-sm font-bold text-slate-600 px-4 py-2">
                <option>This Sem</option>
                <option>Last Sem</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="subject" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="score" fill="#0B1120" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">Today's Schedule</h3>
              <button className="text-sm font-bold text-[#FFD60A] bg-[#0B1120] px-4 py-2 rounded-lg">
                View Full
              </button>
            </div>
            <div className="space-y-4">
              {upcomingClasses.map((cls, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center font-bold text-lg text-slate-700 shadow-sm border border-slate-100">
                    {cls.subject.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800">{cls.subject}</h4>
                    <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                      <Clock size={12} /> {cls.time}
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      {cls.room}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                    cls.status === 'In Progress' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    {cls.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Notice Board */}
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <AlertCircle size={20} className="text-[#FFD60A]" />
              Notice Board
            </h3>
            <div className="space-y-6">
              {recentNotices.map((notice, idx) => (
                <div key={idx} className="relative pl-6 pb-6 border-l-2 border-slate-100 last:pb-0 last:border-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#FFD60A]" />
                  <p className="text-xs font-bold text-slate-400 mb-1">{notice.date}</p>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">{notice.title}</h4>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500 uppercase tracking-wide">
                    {notice.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
