import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { History, Plus } from "lucide-react";

import { auditLogsData } from "../../mock/admin/auditLogs";

const AuditLogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = auditLogsData;
  const columns = [
    { header: "System Action", accessor: "action" },
    { header: "Performed By", accessor: "user" },
    { header: "Time Stamp", accessor: "timestamp" },
  ];

  return (
    <>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            System Activity
          </h1>
          <p className="text-slate-400 font-medium italic">
            Trace every administrative action and system change for compliance.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <History size={20} className="text-slate-400" />
          Log Manual Note
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
        title="Create Manual Audit Note"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          <ModalField
            label="Action Title"
            name="action"
            placeholder="e.g. Server Maintenance"
          />
          <ModalField
            label="Authorized By"
            name="user"
            placeholder="Your Name"
          />
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Detail Note
            </label>
            <textarea
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 min-h-[100px] text-sm font-medium"
              placeholder="Describe the reason for this manual entry..."
            ></textarea>
          </div>
        </div>
      </SharedModal>
    </>
  );
};

export default AuditLogs;
