import { useState } from "react";
import {
  BarChart3,
  Users,
  School,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  Globe,
  Database,
  ArrowRight,
  TrendingDown,
  Activity,
  Zap,
  ShieldCheck,
  XCircle,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const [selectedSignup, setSelectedSignup] = useState(null);

  const stats = [
    { label: "Partner Schools", value: "142", icon: School, color: "indigo", status: "Active" },
    { label: "Total Users", value: "85.2k", icon: Users, color: "emerald", status: "Live" },
    { label: "System Health", value: "99.9%", icon: Globe, color: "blue", status: "Stable" },
    { label: "Active Nodes", value: "12", icon: Database, color: "amber", status: "Online" },
  ];

  const recentSchools = [
    { name: "Global Academy", date: "Just now", revenue: "$2,400", status: "Active", location: "New York, USA", students: 1200, plan: "Premium" },
    { name: "Future Stars Pre-school", date: "2 hours ago", revenue: "$850", status: "Active", location: "Montreal, Canada", students: 450, plan: "Starter" },
    { name: "Westside High", date: "5 hours ago", revenue: "$1,800", status: "Pending", location: "Austin, TX", students: 850, plan: "Pro" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Platform Overview</h1>
          <p className="text-slate-500 font-bold text-lg">Central control for all your educational institutions.</p>
        </div>
        <div className="hidden md:flex gap-4 mb-1">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Network Traffic</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-slate-900">14.2 GB/s</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label}
            className={`bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:shadow-2xl transition-all cursor-pointer`}
          >
            <div className="absolute top-0 right-0 p-8 text-slate-50 opacity-10 group-hover:scale-125 transition-transform duration-500">
              <stat.icon size={100} strokeWidth={1} />
            </div>

            <div className={`w-14 h-14 bg-${stat.color}-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${stat.color}-500/20 group-hover:rotate-12 transition-transform`}>
              <stat.icon size={24} />
            </div>

            <h3 className="text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</h3>
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span className={`text-[10px] font-black text-${stat.color}-600 uppercase`}>{stat.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900">Revenue Growth</h3>
              <p className="text-slate-400 font-bold">Platform-wide monthly recurring revenue</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black uppercase text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all">Export Report</button>
              <select className="bg-slate-900 text-white rounded-xl px-4 py-2 font-black text-[10px] uppercase outline-none shadow-lg shadow-slate-200">
                <option>Last 12 Months</option>
                <option>Last 6 Months</option>
              </select>
            </div>
          </div>

          <div className="h-72 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 font-black flex-col gap-4 relative overflow-hidden group">
            <div className="absolute inset-x-10 bottom-10 top-20 flex items-end justify-between">
              {[40, 65, 45, 90, 55, 75, 85, 40, 60, 95, 70, 80].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className={`w-4 bg-indigo-500/20 rounded-t-lg relative group/bar`}
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500 rounded-full -translate-y-1 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
            <Activity size={40} className="text-indigo-100 mb-2 group-hover:scale-125 transition-transform" />
            <span className="text-xs uppercase tracking-[0.2em] opacity-50">Real-time Analytics Engine</span>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-10">
            {[
              { label: "New Licenses", value: "48", trend: "+12%", up: true },
              { label: "Churn Rate", value: "0.4%", trend: "-2%", up: false },
              { label: "Avg Revenue", value: "$3,240", trend: "+5%", up: true },
            ].map(item => (
              <div key={item.label} className="p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.label}</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-slate-900">{item.value}</span>
                  <div className={`flex items-center gap-1 text-[10px] font-black ${item.up ? 'text-emerald-500' : 'text-indigo-500'}`}>
                    {item.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                    {item.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Registrations */}
        <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl shadow-indigo-900/20 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />

          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black tracking-tight">Recent Signups</h3>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-indigo-400">
              <Activity size={16} className="animate-pulse" />
            </div>
          </div>

          <div className="space-y-8 flex-1">
            {recentSchools.map((school, i) => (
              <div
                key={i}
                onClick={() => setSelectedSignup(school)}
                className="flex items-center justify-between p-3 -m-3 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center font-black text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    {school.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-none mb-1 group-hover:text-white">{school.name}</h4>
                    <p className="text-[10px] text-slate-500 font-bold">{school.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-sm text-indigo-400">{school.revenue}</p>
                  <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-slate-500" />
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 w-full py-5 bg-indigo-600 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-indigo-600 transition-all flex items-center justify-center gap-3 active:scale-95 group shadow-xl shadow-indigo-600/30">
            Platform Audit Log
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Signup Detail Modal */}
      <AnimatePresence>
        {selectedSignup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSignup(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${selectedSignup.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                    Registration {selectedSignup.status}
                  </div>
                  <button onClick={() => setSelectedSignup(null)} className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors">
                    <XCircle size={24} />
                  </button>
                </div>

                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-indigo-200">
                    {selectedSignup.name[0]}
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900">{selectedSignup.name}</h2>
                    <p className="text-slate-500 font-bold flex items-center gap-2">
                      <Globe size={14} className="text-indigo-500" />
                      {selectedSignup.location}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Students</p>
                    <p className="text-xl font-black text-slate-900">{selectedSignup.students}+</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Plan Tier</p>
                    <p className="text-xl font-black text-indigo-600">{selectedSignup.plan.toUpperCase()}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-400">License ID:</span>
                    <span className="font-black text-slate-900">#SMS-REG-49201-99</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-400">Onboarding Date:</span>
                    <span className="font-black text-slate-900">{selectedSignup.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-400">Subscription Value:</span>
                    <span className="font-black text-emerald-600">{selectedSignup.revenue}/mo</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    Inspect
                  </button>
                  <button className="flex-1 py-4 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <MessageSquare size={16} />
                    Contact
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
