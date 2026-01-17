import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { CreditCard, Plus } from "lucide-react";

import { feeStructureData } from "../../mock/admin/feeStructure";

const FeeStructureAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = feeStructureData;
  const columns = [
    { header: "Grade Level", accessor: "grade" },
    { header: "Tuition Fee", accessor: "tuition" },
    { header: "Admission Fee", accessor: "admission" },
    { header: "Term", accessor: "term" },
  ];

  return (
    <>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            Fee Architect
          </h1>
          <p className="text-slate-400 font-medium italic">
            Design and define fee components for various grade levels and terms.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <CreditCard size={20} className="text-blue-400" />
          Create Fee Template
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
        title="Create Fee Structure"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField
            label="Target Grades"
            name="grade"
            placeholder="e.g. Grade 1-5"
          />
          <ModalField label="Tuition Fee" name="tuition" type="number" />
          <ModalField label="Admission Fee" name="admission" type="number" />
          <ModalField
            label="Payment Term"
            name="term"
            type="select"
            options={["Annual", "Biannual", "Quarterly", "Monthly"]}
          />
        </div>
      </SharedModal>
    </>
  );
};

export default FeeStructureAdmin;
