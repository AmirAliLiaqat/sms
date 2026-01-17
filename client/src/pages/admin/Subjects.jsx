import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import { BookOpen, Plus, Trash2, Edit } from "lucide-react";

import { subjectsData } from "../../mock/admin/subjects";

const Subjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    dept: "Science",
    credits: "",
  });

  const data = subjectsData;

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const columns = [
    {
      header: "Code",
      accessor: "code",
      render: (r) => <span className="font-mono text-xs">{r.code}</span>,
    },
    { header: "Subject Name", accessor: "name" },
    { header: "Department", accessor: "dept" },
    { header: "Credits", accessor: "credits" },
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
            Curriculum Manager
          </h1>
          <p className="text-slate-400 font-medium italic">
            Define subjects, credit hours, and departmental affiliations.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <BookOpen size={20} className="text-blue-400" />
          Create Subject
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
        title="Define New Subject"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField
            label="Subject Code"
            name="code"
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            placeholder="PHY-101"
          />
          <ModalField
            label="Subject Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <ModalField
            label="Department"
            name="dept"
            type="select"
            options={["Science", "Maths", "Arts", "Sports", "IT"]}
            value={formData.dept}
            onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
          />
          <ModalField
            label="Credit Hours"
            name="credits"
            type="number"
            value={formData.credits}
            onChange={(e) =>
              setFormData({ ...formData, credits: e.target.value })
            }
          />
        </div>
      </SharedModal>

      <ConfirmationDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => console.log("Deleting subject:", selectedItem?.id)}
        title="Remove Subject"
        message={`Are you sure you want to remove "${selectedItem?.name}" from the curriculum? This may affect student transcripts.`}
      />
    </>
  );
};

export default Subjects;
