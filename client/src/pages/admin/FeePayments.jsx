
import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { CreditCard, Download, Filter, Search, Printer, FileText } from "lucide-react";
import { feePaymentsData } from "../../mock/admin/feePayments";

const FeePayments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ledger"); // 'ledger' | 'outstanding'

  const outstandingData = [
      { id: "STU-001", student: "Alice Brown", grade: "Grade 5", total: "$12,000", paid: "$8,000", due: "$4,000", status: "Overdue" },
      { id: "STU-005", student: "Charlie Davis", grade: "Grade 10", total: "$15,000", paid: "$7,500", due: "$7,500", status: "Partially Paid" },
      { id: "STU-012", student: "Eve Wilson", grade: "Grade 8", total: "$13,500", paid: "$13,500", due: "$0", status: "Cleared" },
  ];

  const ledgerColumns = [
    {
      header: "TX ID",
      accessor: "txId",
      render: (r) => <span className="font-mono text-xs font-bold text-slate-500">{r.txId}</span>,
    },
    { header: "Student", accessor: "student" },
    {
      header: "Amount",
      accessor: "amount",
      render: (r) => <span className="font-black text-slate-800">{r.amount}</span>,
    },
    { 
        header: "Method", 
        accessor: "status",
        render: (r) => (
            <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <CreditCard size={14} />
                Stripe
            </span>
        ) 
    },
    { header: "Date", accessor: "date" },
    {
      header: "Status",
      accessor: "status",
      render: (r) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide min-w-[80px] text-center block ${
            r.status === "Success" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {r.status}
        </span>
      ),
    },
    {
        header: "Receipt",
        accessor: "txId",
        render: (r) => (
            <button className="flex items-center gap-1 p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-colors">
                <Printer size={16} />
            </button>
        )
    }
  ];

  const outstandingColumns = [
      { header: "Student ID", accessor: "id" },
      { header: "Student Name", accessor: "student" },
      { header: "Grade", accessor: "grade" },
      { header: "Total Fee", accessor: "total" },
      { header: "Paid", accessor: "paid", render: (r) => <span className="text-green-600 font-bold">{r.paid}</span> },
      { header: "Due", accessor: "due", render: (r) => <span className="text-rose-600 font-black">{r.due}</span> },
      { 
          header: "Status", 
          accessor: "status",
          render: (r) => (
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                r.status === 'Cleared' ? 'bg-green-100 text-green-700' : 
                r.status === 'Overdue' ? 'bg-rose-100 text-rose-700' : 'bg-orange-100 text-orange-700'
            }`}>
                {r.status}
            </span>
          ) 
      }
  ];

  return (
    <>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            Fee Ledger
          </h1>
          <p className="text-slate-400 font-medium italic">
            Centralized payment tracking and audit system.
          </p>
        </div>
        <div className="flex gap-3">
             <div className="bg-slate-100 p-1 rounded-xl flex">
                <button 
                    onClick={() => setActiveTab('ledger')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'ledger' ? 'bg-white shadow-sm text-[#0B1120]' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Transactions
                </button>
                <button 
                        onClick={() => setActiveTab('outstanding')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'outstanding' ? 'bg-white shadow-sm text-[#0B1120]' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Outstanding Dues
                </button>
            </div>
            <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
            <CreditCard size={20} className="text-[#FFD60A]" />
            Record Payment
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <DollarSignIcon size={24} />
              </div>
              <div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Collected (YTD)</div>
                  <div className="text-2xl font-black text-slate-800">$1,250,500</div>
              </div>
          </div>
           <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                  <FileText size={24} />
              </div>
              <div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Due</div>
                  <div className="text-2xl font-black text-slate-800">$125,000</div>
              </div>
          </div>
           <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <CreditCard size={24} />
              </div>
              <div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Online Payments</div>
                  <div className="text-2xl font-black text-slate-800">85%</div>
              </div>
          </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <DataTable
            data={activeTab === 'ledger' ? feePaymentsData : outstandingData}
            columns={activeTab === 'ledger' ? ledgerColumns : outstandingColumns}
            onAdd={() => setIsModalOpen(true)}
            hideAddButton={true}
        />
      </div>

      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Record Payment"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField label="Student Name / ID" name="student" />
          <ModalField label="Payment Amount" name="amount" type="number" />
          <ModalField
            label="Payment Method"
            name="method"
            type="select"
            options={["Credit Card", "Bank Transfer", "Cash", "Cheque"]}
          />
          <ModalField label="Payment Date" name="date" type="date" />
          <div className="col-span-2">
               <label className="block text-sm font-bold text-slate-700 mb-2">Remarks / Notes</label>
               <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 outline-none focus:border-[#FFD60A] transition-colors resize-none h-24"></textarea>
          </div>
           <div className="col-span-2 flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
               <input type="checkbox" className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500" defaultChecked />
               <label className="text-sm font-bold text-blue-700">Generate and Email Receipt automatically</label>
           </div>
        </div>
      </SharedModal>
    </>
  );
};

const DollarSignIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
)

export default FeePayments;
