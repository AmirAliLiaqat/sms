import { useState } from "react";
import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  CheckCircle2,
  Plus,
  DollarSign,
  Package,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import SuperAdminModal from "../../components/shared/SuperAdminModal";

const Subscriptions = () => {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  const plans = [
    { id: 1, name: "Starter", price: "$49", period: "month", schools: 42, color: "blue", features: ["1,000 Students", "Core Modules", "Standard Support"] },
    { id: 2, name: "Professional", price: "$199", period: "month", schools: 85, color: "indigo", features: ["5,000 Students", "All Modules", "Priority Support", "Custom Domain"] },
    { id: 3, name: "Enterprise", price: "Custom", period: "quote", schools: 15, color: "slate", features: ["Unlimited Students", "White Labeling", "Dedicated Server", "24/7 Phone Support"] },
  ];

  const transactions = [
    { id: "#INV-9021", school: "Oakridge International", amount: "$199.00", date: "Oct 21, 2023", status: "Paid", method: "Stripe" },
    { id: "#INV-9022", school: "Heritage Public School", amount: "$49.00", date: "Oct 20, 2023", status: "Pending", method: "Bank Transfer" },
    { id: "#INV-9023", school: "Global Academy", amount: "$199.00", date: "Oct 19, 2023", status: "Paid", method: "PayPal" },
    { id: "#INV-9024", school: "Sunset High", amount: "$899.00", date: "Oct 18, 2023", status: "Failed", method: "Stripe" },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Billing & Revenue</h1>
          <p className="text-slate-500 font-bold text-lg">Manage plan tiers, pricing strategy, and global revenue streams.</p>
        </div>
        <button
          onClick={() => setIsPlanModalOpen(true)}
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
        >
          <Plus size={18} />
          Create New Plan
        </button>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Monthly Recurring Revenue", value: "$42.5k", trend: "+12.4%", up: true, icon: DollarSign, color: "emerald" },
          { label: "Active Subscriptions", value: "142", trend: "+8 this month", up: true, icon: Package, color: "indigo" },
          { label: "Net Revenue Growth", value: "18.2%", trend: "-2.1% spike", up: false, icon: TrendingUp, color: "blue" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 group">
            <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center mb-6 group-hover:bg-${stat.color}-600 group-hover:text-white transition-all`}>
              <stat.icon size={24} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
            <div className={`flex items-center gap-1.5 mt-2 ${stat.up ? 'text-emerald-500' : 'text-rose-500'}`}>
              {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              <span className="text-xs font-black">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-10 flex flex-col relative overflow-hidden group">
            {plan.id === 2 && (
              <div className="absolute top-6 right-6 bg-indigo-600 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest animate-bounce">
                Most Popular
              </div>
            )}
            <h4 className="text-xl font-black text-slate-900 mb-1">{plan.name}</h4>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{plan.schools} Active Schools</p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-slate-900">{plan.price}</span>
              <span className="text-slate-400 font-bold">/{plan.period}</span>
            </div>

            <div className="space-y-4 flex-1">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-sm font-bold text-slate-600">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 w-full py-4 bg-slate-50 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all border border-slate-100">
              Edit Plan Structure
            </button>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
        <div className="p-10 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black text-slate-900">Billing History</h3>
            <p className="text-slate-400 font-bold">Platform-wide invoices and incoming transfers.</p>
          </div>
          <div className="flex gap-4">
            <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-900 transition-colors">
              <Filter size={20} />
            </button>
            <button className="bg-indigo-600 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100">
              <Download size={18} />
              Bulk Export (CSV)
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Invoice ID</th>
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Institution</th>
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Amount</th>
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-10 py-6">
                    <span className="font-mono font-black text-xs text-slate-600">{tx.id}</span>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-black text-xs text-slate-500">
                        {tx.school[0]}
                      </div>
                      <span className="font-extrabold text-slate-900 text-sm">{tx.school}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className="font-black text-slate-900">{tx.amount}</span>
                    <p className="text-[10px] font-bold text-slate-400">via {tx.method}</p>
                  </td>
                  <td className="px-10 py-6">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${tx.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' :
                        tx.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                      }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Paid' ? 'bg-emerald-500' : tx.status === 'Pending' ? 'bg-amber-500' : 'bg-rose-500'}`} />
                      {tx.status}
                    </div>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                      <ArrowUpRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Plan Creation Modal */}
      <SuperAdminModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        title="Revenue Engineer"
        subtitle="Define a new subscription tier"
        icon={Plus}
        color="slate"
        maxWidth="max-w-xl"
      >
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsPlanModalOpen(false); }}>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Plan Display Name</label>
            <input type="text" placeholder="e.g. Diamond Enterprise" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-bold text-slate-700" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Base Monthly Price</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="number" placeholder="299" className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-bold text-slate-700" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Student Capacity</label>
              <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-black text-slate-700 uppercase text-[10px] tracking-widest">
                <option>Up to 1,000</option>
                <option>Up to 5,000</option>
                <option>Up to 10,000</option>
                <option>Unlimited</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Included Modules</p>
            <div className="grid grid-cols-2 gap-3">
              {['Student Portal', 'LMS Engine', 'Financials', 'Library MS', 'Attendance'].map(mod => (
                <label key={mod} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer hover:bg-indigo-50 transition-all">
                  <input type="checkbox" className="w-4 h-4 rounded text-indigo-600" />
                  <span className="text-xs font-bold text-slate-600">{mod}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6 flex gap-4">
            <button type="button" onClick={() => setIsPlanModalOpen(false)} className="flex-1 py-4 bg-slate-50 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all">Discard</button>
            <button type="submit" className="flex-[2] py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2">
              Launch Plan
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </SuperAdminModal>
    </div>
  );
};

export default Subscriptions;
