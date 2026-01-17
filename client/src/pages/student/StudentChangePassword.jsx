import React, { useState } from "react";
import { Lock, Eye, EyeOff, Save } from "lucide-react";

const StudentChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-12">
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#0B1120] mb-2">Change Password</h1>
        <p className="text-slate-400 font-medium max-w-md mx-auto">
          Ensure your account stays secure by using a strong, unique password.
        </p>
      </div>

      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100">
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
              Current Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type={showCurrent ? "text" : "password"}
                className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-[#FFD60A] focus:border-transparent transition-all"
                placeholder="Enter current password"
              />
              <button 
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type={showNew ? "text" : "password"}
                className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-[#FFD60A] focus:border-transparent transition-all"
                placeholder="Enter new password"
              />
              <button 
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p className="text-[10px] text-slate-400 font-medium pl-1">
              Must be at least 8 characters long and include special characters.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="password"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-[#FFD60A] focus:border-transparent transition-all"
                placeholder="Re-enter new password"
              />
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="button"
              className="w-full py-4 bg-[#0B1120] text-white rounded-xl font-black text-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Save size={18} />
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentChangePassword;
