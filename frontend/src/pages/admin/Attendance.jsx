import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { ClipboardCheck, Plus } from "lucide-react";

import { attendanceData } from "../../mock/admin/attendance";

const Attendance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = attendanceData;

  const columns = [
    { header: "Date", accessor: "date" },
    { header: "Class", accessor: "class" },
    {
      header: "Present",
      accessor: "present",
      render: (r) => (
        <span className="text-green-600 font-bold">{r.present}</span>
      ),
    },
    {
      header: "Absent",
      accessor: "absent",
      render: (r) => <span className="text-red-500 font-bold">{r.absent}</span>,
    },
    {
      header: "Status",
      accessor: "status",
      render: (r) => (
        <span
          className={`px-2 py-0.5 rounded text-xs ${r.status === "Submitted" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
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
            Attendance Logs
          </h1>
          <p className="text-slate-400 font-medium italic">
            Monitor student presence and generate daily participation reports.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <ClipboardCheck size={20} className="text-cyan-400" />
          Mark Attendance
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
        title="Register Daily Attendance"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          <ModalField label="Date" name="date" type="date" />
          <ModalField
            label="Target Class"
            name="class"
            type="select"
            options={["10-A", "10-B", "9-A", "9-B", "8-A", "8-B"]}
          />
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
              Selection Info
            </p>
            <p className="text-[10px] text-slate-400 font-medium italic">
              Selecting a class will load the student roster. You can then
              toggle attendance for each student manually or mark all as present
              by default.
            </p>
          </div>
        </div>
      </SharedModal>
    </>
  );
};

export default Attendance;
