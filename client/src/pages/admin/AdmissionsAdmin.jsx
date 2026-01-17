import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import { UserPlus, Plus, Trash2, Edit } from "lucide-react";

import { admissionsData } from "../../mock/admin/admissions";

const AdmissionsAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = admissionsData;

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const columns = [
    { header: "App ID", accessor: "id" },
    { header: "Applicant", accessor: "student" },
    { header: "Grade", accessor: "grade" },
    { header: "Parent", accessor: "parent" },
    {
      header: "Status",
      accessor: "status",
      render: (r) => (
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${r.status === "Approved" ? "bg-green-100 text-green-700" : r.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}
        >
          {r.status}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "id",
      render: (r) => (
        <div className="flex gap-2">
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-all">
            <Edit size={16} />
          </button>
          <button
            onClick={() => handleDeleteClick(r)}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-600 transition-all"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            Admissions Pipeline
          </h1>
          <p className="text-slate-400 font-medium italic">
            Review applicant information and manage the student intake process.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <UserPlus size={20} className="text-emerald-400" />
          Direct Entry
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
        title="Direct Admission Form"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField label="Applicant Name" name="student" />
          <ModalField label="Target Grade" name="grade" />
          <ModalField label="Parent/Guardian" name="parent" />
          <ModalField label="Application Date" name="date" type="date" />
        </div>
      </SharedModal>

      <ConfirmationDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() =>
          console.log("Deleting admission app:", selectedItem?.id)
        }
        title="Reject Application"
        message={`Are you sure you want to reject the application for "${selectedItem?.student}"? This will move the application to the archives.`}
      />
    </>
  );
};

export default AdmissionsAdmin;
