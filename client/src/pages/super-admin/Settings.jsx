import { useState } from "react";
import {
  Shield,
  Globe,
  Lock,
  Bell,
  Database,
  Cpu,
  Save,
  RefreshCcw,
  AlertTriangle,
  Server,
  Key,
  Mail,
  Smartphone,
  CheckCircle2,
  XCircle,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import SuperAdminModal from "../../components/shared/SuperAdminModal";

const SuperAdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [isKeyRotationModalOpen, setIsKeyRotationModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);

  const tabs = [
    { id: 'general', name: 'General', icon: Globe },
    { id: 'security', name: 'Security & Auth', icon: Shield },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'notifications', name: 'Notifications', icon: Bell },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };

  const openRotationModal = (keyName) => {
    setSelectedKey(keyName);
    setIsKeyRotationModalOpen(true);
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Global Settings</h1>
          <p className="text-slate-500 font-bold text-lg">Master control for platform-wide configurations and infrastructure.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-indigo-600 text-white px-10 py-4 rounded-[1.5rem] font-black text-sm flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 disabled:opacity-50"
        >
          {isSaving ? <RefreshCcw size={20} className="animate-spin" /> : <Save size={20} />}
          {isSaving ? 'Saving Changes...' : 'Commit Changes'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Settings Sidebar */}
        <div className="lg:w-80 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full p-5 rounded-2xl flex items-center gap-4 transition-all ${activeTab === tab.id
                  ? 'bg-white text-indigo-600 shadow-xl shadow-slate-200/50 border-2 border-indigo-500'
                  : 'text-slate-400 hover:bg-white hover:text-slate-600 border-2 border-transparent'
                }`}
            >
              <tab.icon size={22} className={activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400'} />
              <span className="font-black text-sm uppercase tracking-widest">{tab.name}</span>
            </button>
          ))}

          <div className="mt-10 p-6 bg-rose-50 border border-rose-100 rounded-[2rem] space-y-4">
            <div className="flex items-center gap-2 text-rose-600">
              <AlertTriangle size={20} />
              <h4 className="font-black text-xs uppercase tracking-widest">Danger Zone</h4>
            </div>
            <p className="text-[10px] text-rose-500 font-bold leading-relaxed">System-wide actions that cannot be undone.</p>
            <button
              onClick={() => setIsMaintenanceModalOpen(true)}
              className="w-full py-3 bg-white text-rose-600 border-2 border-rose-200 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all"
            >
              Enter Maintenance Mode
            </button>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-10">

            {activeTab === 'general' && (
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Platform Identity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Platform Name</label>
                      <input type="text" defaultValue="SMS Global Hub" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none font-bold text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Global Support Email</label>
                      <input type="email" defaultValue="support@smshub.global" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none font-bold text-slate-700" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Default Portal Status</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Allow New Registrations', desc: 'Allow schools to sign up without manual verification.', enabled: true },
                      { name: 'Auto-Provision Library', desc: 'Include Library portal in standard basic plan.', enabled: false },
                      { name: 'Global Search Enabled', desc: 'Allow cross-database student lookup for transfers.', enabled: true },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div>
                          <p className="font-black text-slate-900 text-sm">{item.name}</p>
                          <p className="text-xs font-bold text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                        <button className={`w-12 h-6 rounded-full relative transition-all ${item.enabled ? 'bg-indigo-600 shadow-lg shadow-indigo-100' : 'bg-slate-300'}`}>
                          <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${item.enabled ? 'left-7' : 'left-1'}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'infrastructure' && (
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Database Clusters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { cluster: 'US-East-01', health: '99.99%', load: '42%' },
                      { cluster: 'EU-West-04', health: '100%', load: '28%' },
                      { cluster: 'AP-South-02', health: '98.5%', load: '85%' },
                    ].map((node, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4">
                        <div className="flex items-center justify-between">
                          <Database size={24} className="text-indigo-600" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900">{node.cluster}</h4>
                          <p className="text-[10px] font-black text-slate-400 uppercase">Production Node</p>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                          <span className="text-xs font-bold text-slate-500">{node.health} Up</span>
                          <span className="text-xs font-black text-indigo-600">{node.load} Load</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-10 bg-indigo-600 rounded-[2.5rem] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                    <Cpu size={120} />
                  </div>
                  <h3 className="text-2xl font-black mb-2">Automated Backups</h3>
                  <p className="text-indigo-100 font-bold mb-8 max-w-md text-sm">Every 6 hours, all school databases are snapshotted and encrypted using AES-256 for disaster recovery.</p>
                  <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-all flex items-center gap-2">
                    <RefreshCcw size={14} />
                    Trigger Global Backup
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Master API Keys</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Messaging Service (Twillio)', key: '•••••••••••••••••••••4812' },
                      { name: 'Payment Gateway (Stripe)', key: '•••••••••••••••••••••8829' },
                      { name: 'Email Gateway (SendGrid)', key: '•••••••••••••••••••••0112' },
                    ].map((api, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                            <Key size={18} />
                          </div>
                          <div>
                            <p className="font-black text-slate-900 text-sm">{api.name}</p>
                            <p className="text-xs font-bold text-slate-400 font-mono tracking-tighter mt-0.5">{api.key}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => openRotationModal(api.name)}
                          className="text-[10px] font-black uppercase text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mr-2"
                        >
                          Rotate Key
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-900 rounded-[2rem] text-white space-y-6">
                    <Lock size={32} className="text-indigo-400" />
                    <h4 className="text-xl font-black">2FA Enforcement</h4>
                    <p className="text-slate-400 font-bold text-sm">Force all School Admin accounts to use Multi-Factor Authentication during login.</p>
                    <button className="px-6 py-3 bg-indigo-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-indigo-600 transition-all">
                      Enable Force 2FA
                    </button>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col justify-center items-center text-center space-y-4">
                    <Shield size={42} className="text-indigo-600" />
                    <h4 className="text-xl font-black text-slate-900">IP Whitelisting</h4>
                    <p className="text-slate-500 font-bold text-sm">Restrict Super Admin access to specific IP ranges for maximum security.</p>
                    <button className="px-6 py-3 border-2 border-indigo-100 text-indigo-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all">
                      Configure IPs
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Global Broadcasting</h3>
                  <div className="p-8 bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-[2.5rem] space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-indigo-400 ml-1">Critical Announcement</label>
                      <textarea placeholder="Type a message that will appear on every school admin dashboard..." className="w-full h-32 px-6 py-4 bg-white border border-indigo-100 rounded-2xl outline-none font-bold text-slate-700 resize-none focus:ring-4 focus:ring-indigo-100 transition-all"></textarea>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 px-4 py-3 bg-white border border-indigo-100 rounded-xl cursor-pointer custom-checkbox">
                        <input type="checkbox" className="w-4 h-4 rounded text-indigo-600" />
                        <span className="text-[10px] font-black uppercase text-indigo-600">SMS Alert</span>
                      </label>
                      <label className="flex items-center gap-2 px-4 py-3 bg-white border border-indigo-100 rounded-xl cursor-pointer custom-checkbox">
                        <input type="checkbox" className="w-4 h-4 rounded text-indigo-600" />
                        <span className="text-[10px] font-black uppercase text-indigo-600">Email Flush</span>
                      </label>
                      <button className="ml-auto bg-indigo-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all">
                        Broadcast Now
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Service Health Alerts</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'New Subscription Alert', icon: Smartphone, channel: 'Slack' },
                      { name: 'Database Latency Issue', icon: Database, channel: 'Email' },
                      { name: 'Failed Deployment', icon: Cpu, channel: 'SMS' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400">
                            <item.icon size={18} />
                          </div>
                          <p className="font-black text-slate-900 text-sm">{item.name}</p>
                        </div>
                        <span className="text-[10px] font-black uppercase text-slate-400 bg-white px-3 py-1 rounded-lg border border-slate-100">
                          {item.channel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Success Badge */}
          <div className="mt-8 flex items-center gap-3 ml-4">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Settings are synced across all production instances.</p>
          </div>
        </div>
      </div>

      {/* Maintenance Mode Modal */}
      <SuperAdminModal
        isOpen={isMaintenanceModalOpen}
        onClose={() => setIsMaintenanceModalOpen(false)}
        title="Maintenance Mode"
        subtitle="System-wide Service Interruption"
        icon={AlertTriangle}
        color="rose"
        maxWidth="max-w-md"
      >
        <div className="space-y-6">
          <p className="text-slate-500 font-bold text-sm leading-relaxed">
            Enabling maintenance mode will disconnect all active users across all school portals. Only Super Admins will be able to access the platform.
          </p>
          <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl">
            <p className="text-[10px] font-black text-rose-600 uppercase tracking-[0.2em] mb-1">Expected Duration</p>
            <input type="text" placeholder="e.g. 2 Hours" className="w-full bg-white border border-rose-200 px-4 py-2 rounded-lg outline-none font-bold text-rose-900" />
          </div>
          <div className="flex gap-4">
            <button onClick={() => setIsMaintenanceModalOpen(false)} className="flex-1 py-3 bg-slate-100 text-slate-500 rounded-xl font-black text-[10px] uppercase tracking-widest">Cancel</button>
            <button className="flex-[2] py-3 bg-rose-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-rose-100">Engage Kill Switch</button>
          </div>
        </div>
      </SuperAdminModal>

      {/* Key Rotation Modal */}
      <SuperAdminModal
        isOpen={isKeyRotationModalOpen}
        onClose={() => setIsKeyRotationModalOpen(false)}
        title="Rotate API Key"
        subtitle={`Provider: ${selectedKey}`}
        icon={RefreshCcw}
        color="amber"
        maxWidth="max-w-md"
      >
        <div className="space-y-6">
          <p className="text-slate-500 font-bold text-sm leading-relaxed">
            Rotating this key will immediately invalidate the current credential. Ensure your environment variables are ready for the new key.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-100">
              <span className="text-[10px] font-black text-amber-600 uppercase">Service</span>
              <span className="text-sm font-black text-slate-900">{selectedKey}</span>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <button onClick={() => setIsKeyRotationModalOpen(false)} className="flex-1 py-3 bg-slate-100 text-slate-500 rounded-xl font-black text-[10px] uppercase tracking-widest">Discard</button>
            <button className="flex-[2] py-3 bg-amber-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-amber-100 flex items-center justify-center gap-2">
              Generate New Key
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </SuperAdminModal>
    </div>
  );
};

export default SuperAdminSettings;
