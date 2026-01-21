import { useState } from "react";
import {
  Plus,
  Layout,
  Settings,
  ShieldAlert,
  MoreVertical,
  Globe,
  Monitor,
  Building2,
  Users,
  CreditCard,
  PlusCircle,
  Mail,
  MapPin,
  Cloud,
  Database,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SuperAdminModal from "../../components/shared/SuperAdminModal";

const Schools = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [schools, setSchools] = useState([
    {
      id: 1,
      name: "Oakridge International",
      location: "New York, USA",
      students: 1250,
      subscription: "Premium",
      status: "Active",
      dbInstance: "us-east-cluster-01",
      email: "admin@oakridge.edu",
      portals: [
        { id: 'admin', name: 'Admin Control', enabled: true },
        { id: 'student', name: 'Student Portal', enabled: true },
        { id: 'faculty', name: 'Faculty Portal', enabled: true },
        { id: 'canteen', name: 'Canteen System', enabled: true },
        { id: 'library', name: 'Library Management', enabled: true },
        { id: 'transport', name: 'Transport Tracking', enabled: false },
      ],
      joinedDate: "Mar 12, 2023",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Heritage Public School",
      location: "London, UK",
      students: 840,
      subscription: "Basic",
      status: "Suspended",
      dbInstance: "eu-west-cluster-04",
      email: "info@heritage.uk",
      portals: [
        { id: 'admin', name: 'Admin Control', enabled: true },
        { id: 'student', name: 'Student Portal', enabled: true },
        { id: 'faculty', name: 'Faculty Portal', enabled: false },
        { id: 'canteen', name: 'Canteen System', enabled: false },
        { id: 'library', name: 'Library Management', enabled: false },
        { id: 'transport', name: 'Transport Tracking', enabled: false },
      ],
      joinedDate: "Jan 05, 2024",
      image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=100&h=100&auto=format&fit=crop"
    }
  ]);

  const togglePortal = (schoolId, portalId) => {
    setSchools(schools.map(s => {
      if (s.id === schoolId) {
        return {
          ...s,
          portals: s.portals.map(p => p.id === portalId ? { ...p, enabled: !p.enabled } : p)
        };
      }
      return s;
    }));
  };

  const handleManage = (school) => {
    setSelectedSchool(school);
    setIsManageModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Registered Institutions</h1>
          <p className="text-slate-500 font-medium">Configure portal access and manage school-specific instances.</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-indigo-600 text-white px-6 py-4 rounded-[1.25rem] font-black text-sm flex items-center justify-center gap-2 hover:bg-slate-900 transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
        >
          <Plus size={20} />
          Onboard New School
        </button>
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Schools", value: "128", trend: "+4 this month", color: "indigo", icon: Building2 },
          { label: "Total Students", value: "48.2k", trend: "Across all nodes", color: "emerald", icon: Users },
          { label: "Revoked Access", value: "5", trend: "Action required", color: "rose", icon: ShieldAlert },
          { label: "Avg Up-time", value: "99.98%", trend: "Global Health", color: "blue", icon: Cloud },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-slate-200 group hover:border-indigo-500 transition-all">
            <div className={`w-10 h-10 rounded-xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center mb-4 transition-all group-hover:bg-${stat.color}-500 group-hover:text-white`}>
              <stat.icon size={20} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
            <p className="text-[10px] font-bold text-slate-500 mt-1">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* List */}
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">School / Instance</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">Subscription Status</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">Active Portals</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {schools.map((school) => (
              <tr key={school.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <img src={school.image} alt="" className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100 group-hover:ring-indigo-500 group-hover:ring-offset-2 transition-all" />
                    <div>
                      <h4 className="font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">{school.name}</h4>
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                        <Globe size={10} className="text-indigo-500" />
                        <span>{school.dbInstance}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex flex-col gap-1">
                    <span className={`inline-flex items-center w-fit gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${school.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                      }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${school.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                      {school.status}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 ml-1 group-hover:text-indigo-500 transition-colors">{school.subscription} Plan</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex -space-x-2">
                    {school.portals.filter(p => p.enabled).map((p, idx) => (
                      <div key={idx} className="w-8 h-8 rounded-full bg-indigo-50 border-2 border-white flex items-center justify-center text-indigo-600 shadow-sm" title={p.name}>
                        <Layout size={12} />
                      </div>
                    ))}
                    {school.portals.filter(p => !p.enabled).length > 0 && (
                      <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-slate-400 text-[10px] font-black">
                        +{school.portals.filter(p => !p.enabled).length}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => handleManage(school)}
                      className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                    >
                      Manage
                    </button>
                    <button className="p-2 text-slate-300 hover:text-slate-900">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add School Modal */}
      <SuperAdminModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Instance Onboarding"
        subtitle="Register a new school into the SMS Hub"
        icon={PlusCircle}
        color="indigo"
      >
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsAddModalOpen(false); }}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">School Name</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" placeholder="e.g. St. Peters" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none font-bold text-slate-700 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Admin Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" placeholder="admin@school.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none font-bold text-slate-700 transition-all" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Physical Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" placeholder="City, Country" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none font-bold text-slate-700 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Subscription Plan</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none font-black text-slate-700 transition-all appearance-none uppercase text-xs tracking-widest">
                  <option>Basic Plan</option>
                  <option>Professional</option>
                  <option>Premium Enterprise</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-8 bg-indigo-50/50 border border-indigo-100 rounded-[2rem] space-y-4">
            <h4 className="font-black text-xs uppercase tracking-widest text-indigo-700 flex items-center gap-2">
              <Database size={16} />
              Instance Provisioning
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-indigo-100">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Allocated Cluster</p>
                <p className="font-black text-indigo-600 text-sm">US-EAST-AUTO</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-indigo-100">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Instance ID</p>
                <p className="font-black text-indigo-600 text-sm">#SMS-PROV-99</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all">Cancel</button>
            <button type="submit" className="flex-[2] py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 group">
              Proceed to Deploy
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </form>
      </SuperAdminModal>

      {/* Portal Management Modal */}
      <SuperAdminModal
        isOpen={isManageModalOpen && selectedSchool !== null}
        onClose={() => setIsManageModalOpen(false)}
        title="Instance Configuration"
        subtitle={selectedSchool ? `Managing: ${selectedSchool.name}` : ""}
        icon={Settings}
        color="indigo"
      >
        {selectedSchool && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedSchool.portals.map((portal) => (
                <div
                  key={portal.id}
                  className={`p-6 rounded-[1.5rem] border-2 transition-all flex items-center justify-between group ${portal.enabled ? 'border-indigo-100 bg-indigo-50/30' : 'border-slate-100 bg-slate-50 opacity-60'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${portal.enabled ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-400'
                      }`}>
                      <Monitor size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">{portal.name}</p>
                      <p className={`text-[10px] font-bold uppercase tracking-tighter ${portal.enabled ? 'text-indigo-500' : 'text-slate-400'
                        }`}>
                        {portal.enabled ? 'Portal Active' : 'Access Restricted'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => togglePortal(selectedSchool.id, portal.id)}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${portal.enabled ? 'bg-indigo-600 shadow-md shadow-indigo-200' : 'bg-slate-300'
                      }`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${portal.enabled ? 'left-7' : 'left-1'
                      }`} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="bg-rose-50 text-rose-600 p-4 rounded-2xl hover:bg-rose-600 hover:text-white transition-all group flex items-center gap-2 font-black text-xs uppercase tracking-widest">
                  <ShieldAlert size={18} />
                  Suspend All
                </button>
              </div>
              <button
                onClick={() => setIsManageModalOpen(false)}
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100"
              >
                Update Changes
              </button>
            </div>
          </div>
        )}
      </SuperAdminModal>
    </div>
  );
};

export default Schools;
