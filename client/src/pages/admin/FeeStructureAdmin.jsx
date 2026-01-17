
import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { CreditCard, Plus, DollarSign, Calendar, Clock, Download, FileText, Edit2, Trash2 } from "lucide-react";
import { feeStructureData } from "../../mock/admin/feeStructure";

const FeeStructureAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("structure"); // 'structure' | 'history'

    // Mock data for fee history
    const feeHistory = [
        { id: "TXN-7890", student: "John Doe", grade: "Grade 10", amount: "$1,200", date: "Jan 15, 2024", status: "Paid", method: "Stripe" },
        { id: "TXN-7891", student: "Sarah Smith", grade: "Grade 8", amount: "$950", date: "Jan 14, 2024", status: "Pending", method: "Bank Transfer" },
        { id: "TXN-7892", student: "Mike Ross", grade: "Grade 12", amount: "$1,500", date: "Jan 12, 2024", status: "Overdue", method: "-" },
    ];

    const structureColumns = [
        { header: "Grade Level", accessor: "grade" },
        { 
            header: "Tuition Fee", 
            accessor: "tuition",
            render: (r) => <span className="font-bold text-slate-700">{r.tuition}</span>
         },
        { 
            header: "Breakdown", 
            accessor: "id",
            render: (r) => (
                <div className="flex gap-2 text-xs font-medium text-slate-500">
                    <span className="bg-slate-100 px-2 py-1 rounded">Adm: {r.admission}</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">Lab: $50</span>
                </div>
            )
        },
        { 
            header: "Payment Term", 
            accessor: "term",
            render: (r) => (
                <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-slate-400" />
                    {r.term}
                </div>
            )
        },
        {
            header: "Installments",
            accessor: "id",
             render: (r) => (
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-bold border border-green-100">
                    Available (3)
                </span>
            )
        },
        {
            header: "Actions",
            accessor: "id",
            render: (r) => (
                <div className="flex gap-2 justify-end">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-all">
                        <Edit2 size={16} />
                    </button>
                     <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-600 transition-all">
                        <Trash2 size={16} />
                    </button>
                </div>
            )
        }
    ];

     const historyColumns = [
         { 
             header: "Transaction ID", 
             accessor: "id",
             render: (r) => <span className="font-mono text-xs font-bold text-slate-500">{r.id}</span>
         },
         { header: "Student", accessor: "student" },
         { 
             header: "Amount", 
             accessor: "amount",
              render: (r) => <span className="font-black text-slate-800">{r.amount}</span>
         },
         { header: "Date", accessor: "date" },
         { 
             header: "Status", 
             accessor: "status",
             render: (r) => (
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit block text-center min-w-[80px] ${
                    r.status === 'Paid' ? 'bg-green-100 text-green-700' : 
                    r.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 
                    'bg-rose-100 text-rose-700'
                }`}>
                    {r.status}
                </span>
             )
         },
          { 
             header: "Receipt", 
             accessor: "id",
             render: (r) => (
                 <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                     <Download size={14} /> Download
                 </button>
             )
         },
     ];


    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                     <h1 className="text-3xl font-black text-[#0B1120] mb-2">Fee Management</h1>
                     <p className="text-slate-400 font-medium italic">Configure fees, track payments, and manage installments.</p>
                </div>
                <div className="flex gap-4">
                     <div className="bg-slate-100 p-1 rounded-xl flex">
                        <button 
                            onClick={() => setActiveTab('structure')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'structure' ? 'bg-white shadow-sm text-[#0B1120]' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Fee Structure
                        </button>
                        <button 
                             onClick={() => setActiveTab('history')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'history' ? 'bg-white shadow-sm text-[#0B1120]' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Transaction History
                        </button>
                    </div>
                    {activeTab === 'structure' && (
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                        >
                            <Plus size={20} className="text-[#FFD60A]" />
                            Create Template
                        </button>
                    )}
                </div>
            </div>

             {/* KPIs for History Tab */}
            {activeTab === 'history' && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                        <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Collections</div>
                        <div className="text-3xl font-black text-slate-800">$1.2M</div>
                         <div className="text-green-500 text-xs font-bold mt-1">+8.5% this month</div>
                    </div>
                     <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                        <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Pending Fees</div>
                        <div className="text-3xl font-black text-slate-800">$45K</div>
                         <div className="text-orange-500 text-xs font-bold mt-1">125 Students</div>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <DataTable
                    data={activeTab === 'structure' ? feeStructureData : feeHistory}
                    columns={activeTab === 'structure' ? structureColumns : historyColumns}
                    onAdd={() => setIsModalOpen(true)}
                    hideAddButton={true}
                />
            </div>

            <SharedModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Create Fee Structure"
                onSubmit={() => setIsModalOpen(false)}
            >
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ModalField label="Target Grade" name="grade" placeholder="e.g. Grade 1" />
                    <ModalField label="Base Tuition" name="tuition" type="number" />
                    <ModalField label="Lab / Library Fee" name="labFee" type="number" />
                     <ModalField label="Payment Term" name="term" type="select" options={["Annual", "Semester", "Quarterly", "Monthly"]} />
                     <div className="col-span-2 space-y-4 pt-4 border-t border-slate-100">
                         <h4 className="font-bold text-slate-800">Additional Settings</h4>
                         <div className="flex items-center gap-4">
                             <input type="checkbox" id="installments" className="w-5 h-5 rounded border-slate-300 text-[#0B1120] focus:ring-[#FFD60A]" />
                             <label htmlFor="installments" className="font-medium text-slate-600">Enable Installments (3 parts)</label>
                         </div>
                         <div className="flex items-center gap-4">
                             <input type="checkbox" id="lateFee" className="w-5 h-5 rounded border-slate-300 text-[#0B1120] focus:ring-[#FFD60A]" />
                             <label htmlFor="lateFee" className="font-medium text-slate-600">Apply Late Fee (5% after due date)</label>
                         </div>
                     </div>
                </div>
            </SharedModal>
        </div>
    );
};

export default FeeStructureAdmin;
