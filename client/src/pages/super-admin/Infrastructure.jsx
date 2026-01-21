import { useState } from "react";
import {
  Server,
  Database,
  Activity,
  Cpu,
  HardDrive,
  Globe,
  ShieldCheck,
  Zap,
  Terminal,
  RefreshCcw,
  CheckCircle2,
  Plus,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState('nodes');

  const clusters = [
    { id: 1, name: "US-EAST-01", region: "N. Virginia, USA", load: 45, status: "Healthy", uptime: "99.99%", providers: "AWS" },
    { id: 2, name: "EU-WEST-04", region: "London, UK", load: 28, status: "Healthy", uptime: "100%", providers: "DigitalOcean" },
    { id: 3, name: "AP-SOUTH-02", region: "Mumbai, India", load: 88, status: "High Load", uptime: "98.5%", providers: "Google Cloud" },
  ];

  const logs = [
    { id: 1, type: "System", message: "Daily backup completed for #SMS-CLUSTER-A1", time: "2 mins ago", level: "info" },
    { id: 2, type: "Security", message: "Failed login attempt from 192.168.1.1 (SuperAdmin IP)", time: "15 mins ago", level: "warning" },
    { id: 3, type: "Deployment", message: "New module 'LMS Engine' deployed to 12 schools", time: "1 hour ago", level: "success" },
    { id: 4, type: "Database", message: "Query latency spike detected in EU-WEST node", time: "3 hours ago", level: "error" },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Global Infrastructure</h1>
          <p className="text-slate-500 font-bold text-lg">Real-time health monitoring of database clusters and edge nodes.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm">
            <RefreshCcw size={20} />
          </button>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200">
            <Terminal size={18} />
            Open Global Console
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 p-1.5 bg-slate-100 rounded-[1.5rem] w-fit">
        {[
          { id: 'nodes', label: "Cloud Nodes", icon: Globe },
          { id: 'databases', label: "DB Instances", icon: Database },
          { id: 'security', label: "Firewall & Security", icon: ShieldCheck },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-white text-indigo-600 shadow-lg shadow-slate-200/50' : 'text-slate-500 hover:text-slate-900'
              }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats Quick Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total CPU Usage", value: "32.4%", icon: Cpu, color: "blue" },
          { label: "RAM Allocation", value: "64.8 GB", icon: HardDrive, color: "indigo" },
          { label: "Network IO", value: "2.4 GB/s", icon: Zap, color: "amber" },
          { label: "Request Rate", value: "12.5k /s", icon: Activity, color: "emerald" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 group">
            <div className={`w-10 h-10 rounded-xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center mb-4 transition-all group-hover:bg-${stat.color}-600 group-hover:text-white`}>
              <stat.icon size={20} />
            </div>
            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Infrastructure Control */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
            <div className="p-10 border-b border-slate-100">
              <h3 className="text-2xl font-black text-slate-900">Registered Clusters</h3>
              <p className="text-slate-400 font-bold">Manage high-availability availability zones.</p>
            </div>
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {clusters.map(cluster => (
                <div key={cluster.id} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${cluster.status === 'Healthy' ? 'bg-emerald-500 shadow-emerald-100' : 'bg-amber-500 shadow-amber-100'
                      }`}>
                      <Server size={24} />
                    </div>
                    <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">{cluster.providers}</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-1">{cluster.name}</h4>
                  <p className="text-xs font-bold text-slate-500 mb-6 flex items-center gap-1.5">
                    <Globe size={12} className="text-indigo-400" />
                    {cluster.region}
                  </p>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase text-slate-400">Node Load</span>
                      <span className={`text-sm font-black ${cluster.load > 80 ? 'text-rose-600' : 'text-indigo-600'}`}>{cluster.load}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${cluster.load}%` }}
                        className={`h-full transition-all ${cluster.load > 80 ? 'bg-rose-500' : cluster.load > 60 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                      />
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${cluster.status === 'Healthy' ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{cluster.status}</span>
                    </div>
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              ))}

              <button className="p-8 border-4 border-dashed border-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 group hover:border-indigo-400 transition-all text-slate-400 hover:text-indigo-600">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 border border-slate-100">
                  <Plus size={28} />
                </div>
                <span className="font-extrabold uppercase tracking-widest text-xs">Provision New Node</span>
              </button>
            </div>
          </div>
        </div>

        {/* Real-time System Logs */}
        <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-indigo-900/20 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black tracking-tight">System Events</h3>
            <div className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-indigo-400 animate-pulse">Live Feed</div>
          </div>

          <div className="space-y-8 flex-1">
            {logs.map(log => (
              <div key={log.id} className="group relative pl-4 border-l-2 border-white/10 hover:border-indigo-500 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${log.level === 'error' ? 'text-rose-400' :
                    log.level === 'warning' ? 'text-amber-400' :
                      log.level === 'success' ? 'text-emerald-400' : 'text-indigo-400'
                    }`}>{log.type}</span>
                  <span className="text-[8px] font-bold text-slate-500">{log.time}</span>
                </div>
                <p className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{log.message}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white/5 rounded-[2rem] border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <h4 className="font-black text-xs uppercase tracking-widest">Integrity Check</h4>
            </div>
            <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
              Next global backup scheduled for <span className="text-white">03:00 AM UTC</span>. All system health metrics are within thresholds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
