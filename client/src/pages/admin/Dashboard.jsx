import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  UserPlus,
  FileText,
  Bell,
  BookOpen,
  TrendingUp,
  CreditCard,
  PieChart as PieChartIcon,
  Zap,
} from "lucide-react";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import {
  enrollmentData,
  facultyDeptData,
  genderData,
  recentActivities,
} from "../../mock/admin/dashboard";

const COLORS = ["#0B1120", "#FFD60A", "#4F46E5", "#10B981", "#F43F5E"];

const StatCard = ({ title, value, icon: Icon, iconBgClass }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 border-l-4 border-transparent hover:border-l-4 hover:border-[#FFD60A] flex items-center justify-between group"
    >
      <div>
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
          {title}
        </h3>
        <div className="text-3xl font-black text-slate-800 tracking-tight">
          {value}
        </div>
      </div>
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${iconBgClass}`}
      >
        <Icon size={22} className="stroke-[2.5]" />
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stats = [
    {
      title: "Total Applications",
      value: "128",
      icon: UserPlus,
      iconBgClass: "bg-blue-600 shadow-blue-200",
    },
    {
      title: "Pending Reviews",
      value: "12",
      icon: Bell,
      iconBgClass: "bg-[#FFD60A] !text-black shadow-yellow-200",
    },
    {
      title: "Total Faculty",
      value: "64",
      icon: Users,
      iconBgClass: "bg-purple-600 shadow-purple-200",
    },
    {
      title: "Active Students",
      value: "1,250",
      icon: GraduationCap,
      iconBgClass: "bg-indigo-600 shadow-indigo-200",
    },
    {
      title: "Monthly Revenue",
      value: "$45.2k",
      icon: CreditCard,
      iconBgClass: "bg-green-500 shadow-green-200",
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            Command Center
          </h1>
          <p className="text-slate-400 font-medium italic">
            Real-time overview of school operations and performance.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Zap size={20} className="text-yellow-400 fill-yellow-400" />
          Quick Action
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Enrollment Chart */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <TrendingUp size={20} className="text-[#FFD60A]" />
                Enrollment Trends
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Student growth over the last 7 months
              </p>
            </div>
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-[#FFD60A]/20 transition-all">
              <option>Year 2025</option>
              <option>Year 2024</option>
            </select>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentData}>
                <defs>
                  <linearGradient
                    id="colorStudents"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#FFD60A" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#FFD60A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                    padding: "12px",
                  }}
                  itemStyle={{ fontWeight: 700, fontSize: "12px" }}
                />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#FFD60A"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorStudents)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gender Distribution Pie Chart */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
              <PieChartIcon size={20} className="text-[#4F46E5]" />
              Gender Mix
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Diversity snapshot
            </p>
          </div>

          <div className="flex-1 h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Department Faculty Chart */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
          <div className="mb-8">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
              <Users size={20} className="text-purple-600" />
              Faculty Distribution
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Headcount by department
            </p>
          </div>

          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={facultyDeptData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#4F46E5"
                  radius={[6, 6, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
              <BookOpen size={20} className="text-[#FFD60A]" />
              System Audit
            </h3>
            <button className="text-[10px] font-black uppercase tracking-widest text-[#FFD60A] bg-[#0B1120] px-4 py-2 rounded-lg hover:bg-slate-800 transition-all">
              View All
            </button>
          </div>

          <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2 scrollbar-hide">
            {recentActivities.map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-[1.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <activity.icon size={16} className={activity.color} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-700">
                    {activity.text}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium italic">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Quick Command Area"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="space-y-6">
          <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">
              Flash Broadcast
            </p>
            <p className="text-amber-600/80 text-[10px] font-medium italic leading-relaxed">
              Instantly send an emergency alert or important update to all
              students and staff members in the system.
            </p>
          </div>
          <ModalField
            label="Broadcast Heading"
            name="subject"
            placeholder="e.g. Emergency Weather Alert"
          />
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Message Body
            </label>
            <textarea
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 min-h-[100px] text-sm font-medium"
              placeholder="Describe the situation..."
            ></textarea>
          </div>
          <ModalField
            label="Target Audience"
            name="target"
            type="select"
            options={[
              "Universal (All)",
              "Active Students",
              "On-duty Faculty",
              "Parents Only",
            ]}
          />
        </div>
      </SharedModal>
    </div>
  );
};

export default Dashboard;
