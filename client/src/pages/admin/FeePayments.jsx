import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { CreditCard, Plus } from "lucide-react";

import { feePaymentsData } from "../../mock/admin/feePayments";

const FeePayments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = feePaymentsData;
  const columns = [
    {
      header: "TX ID",
      accessor: "txId",
      render: (r) => <span className="font-mono text-xs">{r.txId}</span>,
    },
    { header: "Student", accessor: "student" },
    {
      header: "Amount",
      accessor: "amount",
      render: (r) => <span className="font-bold">{r.amount}</span>,
    },
    { header: "Date", accessor: "date" },
    {
      header: "Status",
      accessor: "status",
      render: (r) => (
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${r.status === "Success" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
        >
          {r.status}
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            Payment Records
          </h1>
          <p className="text-slate-400 font-medium italic">
            Track student payments, process manual entries, and audit
            transactions.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <CreditCard size={20} className="text-emerald-400" />
          Record Payment
        </button>
      </div>

      <DataTable
        data={data}
        columns={columns}
        onAdd={() => setIsModalOpen(true)}
        hideAddButton={true}
      />

      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Manual Fee Entry"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField label="Student Name" name="student" />
          <ModalField label="Payment Amount" name="amount" type="number" />
          <ModalField
            label="Payment Method"
            name="method"
            type="select"
            options={["Credit Card", "Bank Transfer", "Cash", "Cheque"]}
          />
          <ModalField label="Payment Date" name="date" type="date" />
        </div>
      </SharedModal>
    </>
  );
};

export default FeePayments;
