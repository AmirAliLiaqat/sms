import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { History, Plus } from "lucide-react";

import { examsData } from "../../mock/admin/exams";

const Exams = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = examsData;
  const columns = [
    { header: "Exam Name", accessor: "name" },
    { header: "Type", accessor: "type" },
    { header: "Classes", accessor: "classes" },
    { header: "Start Date", accessor: "startDate" },
    {
      header: "Status",
      accessor: "status",
      render: (r) => (
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${r.status === "Completed" ? "bg-gray-200 text-gray-700" : r.status === "Scheduled" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}
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
            Examination Center
          </h1>
          <p className="text-slate-400 font-medium italic">
            Schedule assessments, manage grading types, and track results.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <History size={20} className="text-purple-400" />
          New Examination
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
        title="Schedule New Examination"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField
            label="Exam Title"
            name="name"
            placeholder="e.g. Annual Finals"
          />
          <ModalField
            label="Exam Type"
            name="type"
            type="select"
            options={["Written", "Oral", "Quiz", "Practical"]}
          />
          <ModalField
            label="Target Classes"
            name="classes"
            placeholder="e.g. All, 10-A, 10-B"
          />
          <ModalField label="Start Date" name="startDate" type="date" />
        </div>
      </SharedModal>
    </>
  );
};

export default Exams;
