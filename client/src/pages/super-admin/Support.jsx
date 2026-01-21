import { useState } from "react";
import {
  MessageSquare,
  LifeBuoy,
  Inbox,
  Send,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Clock,
  User,
  Globe,
  Phone,
  Mail,
  MoreVertical,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import SuperAdminModal from "../../components/shared/SuperAdminModal";

const Support = () => {
  const [activeTicket, setActiveTicket] = useState(null);

  const tickets = [
    { id: "TKT-4921", school: "Oakridge International", subject: "Database Latency Issue", type: "Technical", priority: "High", status: "Open", time: "18 mins ago" },
    { id: "TKT-4922", school: "Heritage Public School", subject: "Billing Discrepancy", type: "Billing", priority: "Medium", status: "Assigned", time: "2 hours ago" },
    { id: "TKT-4923", school: "Global Academy", subject: "How to export results?", type: "Feature Support", priority: "Low", status: "Closed", time: "1 day ago" },
    { id: "TKT-4924", school: "Sunset High", subject: "Portal Master Switch Bug", type: "Security", priority: "Critical", status: "Open", time: "4 hours ago" },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Support Center</h1>
          <p className="text-slate-500 font-bold text-lg">Manage school administrator inquiries and platform-wide support tickets.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-6 py-4 rounded-2xl border border-slate-200 flex items-center gap-3 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-xs font-black uppercase tracking-widest text-slate-900">4 Staff Online</span>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Tickets", value: "14", icon: Inbox, color: "indigo" },
          { label: "Avg Response", value: "2.4h", icon: Clock, color: "blue" },
          { label: "Critical Issues", value: "3", icon: AlertTriangle, color: "rose" },
          { label: "Resolved Today", value: "28", icon: CheckCircle2, color: "emerald" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 group hover:border-indigo-500 transition-all shadow-sm">
            <div className={`w-10 h-10 rounded-xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center mb-4 transition-all group-hover:bg-${stat.color}-600 group-hover:text-white`}>
              <stat.icon size={20} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Ticket List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-10">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black text-slate-900">Incoming Feed</h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" placeholder="Search by ID or School..." className="pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none font-bold text-sm text-slate-700 w-64" />
              </div>
            </div>

            <div className="space-y-4">
              {tickets.map(ticket => (
                <div
                  key={ticket.id}
                  onClick={() => setActiveTicket(ticket)}
                  className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-between group hover:bg-white hover:border-indigo-500 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${ticket.priority === 'Critical' ? 'bg-rose-600' :
                        ticket.priority === 'High' ? 'bg-amber-600' :
                          ticket.priority === 'Medium' ? 'bg-indigo-600' : 'bg-blue-600'
                      }`}>
                      <LifeBuoy size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">{ticket.id}</span>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tight ${ticket.status === 'Open' ? 'bg-rose-50 text-rose-600' :
                            ticket.status === 'Assigned' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'
                          }`}>{ticket.status}</span>
                      </div>
                      <h4 className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{ticket.subject}</h4>
                      <p className="text-xs font-bold text-slate-500 mt-0.5">{ticket.school}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{ticket.type}</p>
                      <p className="text-xs font-bold text-slate-900">{ticket.time}</p>
                    </div>
                    <ChevronRight size={20} className="text-slate-300 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-10 py-5 bg-slate-50 text-slate-400 hover:text-indigo-600 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all border border-slate-100">
              Load Unified Ticket Map
            </button>
          </div>
        </div>

        {/* Global Support Actions */}
        <div className="space-y-8">
          <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-indigo-900/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
              <MessageSquare size={120} />
            </div>
            <h3 className="text-2xl font-black mb-4">Platform-wide Broadcast</h3>
            <p className="text-indigo-100 font-bold mb-8 text-sm leading-relaxed">Instantly send a critical technical update or maintenance alert to all registered school administrators.</p>
            <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/30">
              Draft Announcement
            </button>
          </div>

          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-10">
            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">System Status</h3>
            <div className="space-y-6">
              {[
                { name: "Authentication API", status: "Operational", color: "emerald" },
                { name: "Global Cloud DB", status: "Operational", color: "emerald" },
                { name: "Messaging Gateway", status: "Partial Outage", color: "rose" },
                { name: "Deployment Runner", status: "Operational", color: "emerald" },
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-600">{service.name}</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-black uppercase tracking-tight text-${service.color}-600`}>{service.status}</span>
                    <div className={`w-2 h-2 rounded-full bg-${service.color}-500 shadow-[0_0_8px_rgba(var(--${service.color}-500),0.5)]`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">On-Call Engineer</h4>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black">AA</div>
                <div>
                  <p className="text-sm font-black text-slate-900">Amir Ali Liaqat</p>
                  <p className="text-[10px] font-bold text-emerald-500 uppercase">Available for escalations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Inspector Modal */}
      <SuperAdminModal
        isOpen={activeTicket !== null}
        onClose={() => setActiveTicket(null)}
        title="Ticket Inspector"
        subtitle={activeTicket ? `Ref: ${activeTicket.id}` : ""}
        icon={LifeBuoy}
        color="indigo"
      >
        {activeTicket && (
          <div className="space-y-8">
            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                  <User size={18} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">Admin Response Requested</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activeTicket.school}</p>
                </div>
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">{activeTicket.subject}</h4>
              <p className="text-sm font-bold text-slate-600 leading-relaxed">
                The administrator of {activeTicket.school} is reporting an issue with the {activeTicket.type} module. High urgency detected due to portal-wide downtime suspicion.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Assign Internal Handler</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-white border-2 border-slate-100 rounded-2xl flex items-center gap-3 hover:border-indigo-500 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center"><User size={14} /></div>
                  <span className="text-xs font-black text-slate-700">Tech Support</span>
                </button>
                <button className="p-4 bg-white border-2 border-slate-100 rounded-2xl flex items-center gap-3 hover:border-indigo-500 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={14} /></div>
                  <span className="text-xs font-black text-slate-700">Billing Team</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex gap-4">
              <button onClick={() => setActiveTicket(null)} className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-xs uppercase tracking-widest">Close Preview</button>
              <button className="flex-[2] py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-100 flex items-center justify-center gap-2 group">
                Mark as Investigating
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        )}
      </SuperAdminModal>
    </div>
  );
};

export default Support;
