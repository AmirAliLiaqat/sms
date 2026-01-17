import React from "react";
import { CreditCard, Download, Clock, CheckCircle } from "lucide-react";

const feeHistory = [
  { id: "INV-2025-001", type: "Tuition Fee (Sem 4)", amount: 45000, date: "Jan 10, 2025", status: "Paid", method: "Online" },
  { id: "INV-2024-002", type: "Lab Fee", amount: 5000, date: "Dec 15, 2024", status: "Paid", method: "Cash" },
  { id: "INV-2024-003", type: "Library Fine", amount: 150, date: "Nov 20, 2024", status: "Paid", method: "Online" },
];

const pendingFees = [
  { id: "INV-2025-002", type: "Exam Fee", amount: 2500, dueDate: "Jan 20, 2025" },
];

const StudentFees = () => {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Fee Status</h1>
        <p className="text-slate-400 font-medium">Manage your payments and invoices.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pending Dues Card */}
        <div className="bg-[#0B1120] rounded-[2rem] p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD60A]/20 rounded-full blur-[80px] translate-x-16 -translate-y-16" />
          
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
              <Clock size={20} className="text-[#FFD60A]" />
              Pending Dues
            </h3>
            
            {pendingFees.length > 0 ? (
              <div className="space-y-6">
                 {pendingFees.map((fee, idx) => (
                   <div key={idx} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0">
                     <div>
                       <div className="text-sm font-bold mb-1">{fee.type}</div>
                       <div className="text-[10px] text-slate-400 font-medium">Due: {fee.dueDate}</div>
                     </div>
                     <div className="text-xl font-black text-[#FFD60A]">
                       ${fee.amount}
                     </div>
                   </div>
                 ))}
                 <div className="pt-4 flex items-center justify-between">
                   <div className="text-xs text-slate-400 font-medium">Total Pending</div>
                   <div className="text-2xl font-black">${pendingFees.reduce((a, b) => a + b.amount, 0)}</div>
                 </div>
                 <button className="w-full py-4 bg-[#FFD60A] text-[#0B1120] rounded-xl font-black text-sm hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-400/20">
                   Pay Now
                 </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <p className="font-bold text-lg">No Dues Pending</p>
                <p className="text-sm text-slate-400">Great job!</p>
              </div>
            )}
          </div>
        </div>

        {/* Payment Methods / Quick Info */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
           <div>
             <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
               <CreditCard size={20} className="text-blue-500" />
               Payment Information
             </h3>
             <p className="text-sm text-slate-500 mb-6 leading-relaxed">
               You can pay your fees using Credit/Debit Cards, Net Banking, or UPI. 
               Please ensure to download the receipt after successful payment.
             </p>
             <div className="flex gap-4">
               <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center text-[8px] font-bold text-slate-400">VISA</div>
               <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center text-[8px] font-bold text-slate-400">MC</div>
               <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center text-[8px] font-bold text-slate-400">UPI</div>
             </div>
           </div>
           
           <div className="bg-blue-50 p-4 rounded-xl mt-8">
             <h4 className="text-xs font-black text-blue-700 uppercase tracking-wide mb-2">Need Help?</h4>
             <p className="text-[10px] text-blue-600 font-medium">
               Contact Accounts Department<br/>
               accounts@sms.edu | +1 234 567 888
             </p>
           </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Transaction History</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Invoice ID</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Description</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Method</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Receipt</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-slate-600">
              {feeHistory.map((fee, idx) => (
                <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#0B1120]">{fee.id}</td>
                  <td className="p-4">{fee.type}</td>
                  <td className="p-4">{fee.date}</td>
                  <td className="p-4">{fee.method}</td>
                  <td className="p-4 text-[#0B1120] font-bold">${fee.amount}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide">
                      {fee.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-slate-400 hover:text-[#0B1120] transition-colors">
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentFees;
