import { useState } from "react";
import {
  Globe,
  Settings,
  Eye,
  EyeOff,
  Edit3,
  Save,
  Layout,
  Terminal,
  ShieldCheck,
  Zap,
  Layers,
  Search,
  CheckCircle2,
  AlertCircle,
  Plus,
  XCircle,
  Link,
  Shield,
  CreditCard,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SuperAdminModal from "../../components/shared/SuperAdminModal";

const Portals = () => {
  const [activePortal, setActivePortal] = useState('student');
  const [isAddPageModalOpen, setIsAddPageModalOpen] = useState(false);

  const portals = [
    {
      id: 'student',
      name: 'Student Portal',
      icon: Zap,
      color: 'indigo',
      description: 'The core interface for students to view grades, fees, and attendance.',
      pages: [
        { name: 'Dashboard', path: 'student/dashboard', status: 'Core', visibility: true },
        { name: 'My Profile', path: 'student/profile', status: 'Core', visibility: true },
        { name: 'Fee Ledger', path: 'student/fees', status: 'Monetized', visibility: true },
        { name: 'Exam Results', path: 'student/exams', status: 'Core', visibility: true },
        { name: 'E-Library', path: 'student/library', status: 'Optional', visibility: false },
        { name: 'Canteen Wallet', path: 'student/canteen', status: 'Optional', visibility: false },
      ]
    },
    {
      id: 'faculty',
      name: 'Faculty Portal',
      icon: Layers,
      color: 'emerald',
      description: 'Advanced workspace for teachers to manage curriculum and results.',
      pages: [
        { name: 'Class Manager', path: 'faculty/classes', status: 'Core', visibility: true },
        { name: 'Attendance Tool', path: 'faculty/attendance', status: 'Core', visibility: true },
        { name: 'Grade Entry', path: 'faculty/results', status: 'Core', visibility: true },
        { name: 'Staff Chat', path: 'faculty/chat', status: 'Optional', visibility: true },
      ]
    },
    {
      id: 'admin',
      name: 'School Admin',
      icon: ShieldCheck,
      color: 'amber',
      description: 'Main control panel for school administrators and principals.',
      pages: [
        { name: 'Admissions', path: 'admin/admissions', status: 'Core', visibility: true },
        { name: 'Staff Payroll', path: 'admin/payroll', status: 'Monetized', visibility: true },
        { name: 'Fee Structure', path: 'admin/fee-structure', status: 'Core', visibility: true },
        { name: 'Announcements', path: 'admin/news', status: 'Core', visibility: true },
      ]
    }
  ];

  const currentPortalData = portals.find(p => p.id === activePortal);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Portal Engine</h1>
        <p className="text-slate-500 font-bold text-lg">Define global page visibility and module availability for all institutions.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Portal Selection Sidebar */}
        <div className="lg:w-80 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4 mb-4">Select Portal System</p>
          {portals.map((portal) => (
            <button
              key={portal.id}
              onClick={() => setActivePortal(portal.id)}
              className={`w-full p-6 rounded-[2rem] border-2 transition-all flex flex-col text-left group ${activePortal === portal.id
                  ? `bg-white border-${portal.color}-500 shadow-xl shadow-slate-200/50`
                  : 'bg-white border-transparent hover:border-slate-200'
                }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all ${activePortal === portal.id
                  ? `bg-${portal.color}-500 text-white shadow-lg shadow-${portal.color}-500/20`
                  : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                }`}>
                <portal.icon size={24} />
              </div>
              <h3 className={`text-lg font-black ${activePortal === portal.id ? 'text-slate-900' : 'text-slate-500'}`}>
                {portal.name}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Instance Control</p>
            </button>
          ))}

          <div className="p-6 bg-slate-900 rounded-[2rem] text-white mt-8 space-y-4 shadow-xl shadow-slate-900/20">
            <div className="flex items-center gap-2">
              <Terminal size={18} className="text-indigo-400" />
              <h4 className="font-black text-sm uppercase tracking-widest">Master Switch</h4>
            </div>
            <p className="text-[10px] text-slate-400 font-bold">Instantly disable this portal across all existing sub-domains.</p>
            <button className="w-full py-3 bg-rose-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-rose-700 transition-all">
              Kill Portal Service
            </button>
          </div>
        </div>

        {/* Page Management Section */}
        <div className="flex-1 space-y-8">
          <div className={`bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-10 relative overflow-hidden`}>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 relative z-10">
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${currentPortalData.color}-50 text-${currentPortalData.color}-600 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4`}>
                  <Globe size={12} />
                  Global Configuration
                </div>
                <h2 className="text-3xl font-black text-slate-900">Manage {currentPortalData.name} Pages</h2>
                <p className="text-slate-500 font-bold max-w-xl mt-2">{currentPortalData.description}</p>
              </div>
              <button
                onClick={() => setIsAddPageModalOpen(true)}
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
              >
                <Plus size={16} />
                Register New Page
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Page Name / Route</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Default Status</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Availability</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {currentPortalData.pages.map((page, i) => (
                    <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl bg-${currentPortalData.color}-50 text-${currentPortalData.color}-600 flex items-center justify-center transition-all group-hover:scale-110`}>
                            <Layout size={18} />
                          </div>
                          <div>
                            <p className="font-extrabold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">{page.name}</p>
                            <p className="text-[10px] font-black text-slate-400 tracking-tighter uppercase font-mono">{page.path}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase ${page.status === 'Core' ? 'bg-indigo-50 text-indigo-600' :
                            page.status === 'Monetized' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-500'
                          }`}>
                          {page.status}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <button className={`p-2 rounded-lg transition-colors ${page.visibility ? 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100' : 'text-slate-400 bg-slate-50 hover:bg-slate-100'}`}>
                            {page.visibility ? <Eye size={16} /> : <EyeOff size={16} />}
                          </button>
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            {page.visibility ? 'Visible' : 'Hidden'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                            <Edit3 size={18} />
                          </button>
                          <button className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                            <AlertCircle size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-100 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-emerald-500" />
                <p className="text-xs font-bold text-slate-500 italic">Global layout settings for this portal are in sync.</p>
              </div>
              <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                <Save size={18} />
                Commit Portal Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Register New Page Modal */}
      <SuperAdminModal
        isOpen={isAddPageModalOpen}
        onClose={() => setIsAddPageModalOpen(false)}
        title="Register Module"
        subtitle={`Adding to: ${currentPortalData.name}`}
        icon={Plus}
        color={currentPortalData.color}
        maxWidth="max-w-lg"
      >
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsAddPageModalOpen(false); }}>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Page Name</label>
            <div className="relative">
              <Layout className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="e.g. Virtual Classroom" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none font-bold text-slate-700 transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Routing Path (System)</label>
            <div className="relative">
              <Link className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="portal/new-route" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none font-mono font-bold text-slate-700 transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Monetization</label>
              <select className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white outline-none font-black text-slate-700 uppercase text-[10px] tracking-widest">
                <option>Core Service</option>
                <option>Premium Add-on</option>
                <option>Enterprise Only</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Initial State</label>
              <div className="flex items-center gap-4 h-[58px] px-4 bg-slate-50 border border-slate-100 rounded-2xl mt-1">
                <button type="button" className="flex-1 py-2 bg-indigo-600 text-white rounded-lg font-black text-[10px] uppercase tracking-widest shadow-lg shadow-indigo-100">Live</button>
                <button type="button" className="flex-1 py-2 bg-white text-slate-400 rounded-lg font-black text-[10px] uppercase tracking-widest">Hidden</button>
              </div>
            </div>
          </div>

          <div className="pt-6 flex gap-4">
            <button type="button" onClick={() => setIsAddPageModalOpen(false)} className="flex-1 py-4 bg-slate-50 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all">Close</button>
            <button type="submit" className={`flex-[2] py-4 bg-${currentPortalData.color}-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-${currentPortalData.color}-100 flex items-center justify-center gap-3 group`}>
              Add to Registry
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </form>
      </SuperAdminModal>
    </div>
  );
};

export default Portals;
