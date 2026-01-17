import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import { Building2, Trash2, Edit } from "lucide-react";

import { departmentsData } from "../../mock/admin/departments";

const Departments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    head: "",
    rooms: "",
    staff: "",
  });

  const data = departmentsData;

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const columns = [
    {
      header: "Department Name",
      accessor: "name",
      render: (r) => <span className="font-bold text-slate-800">{r.name}</span>,
    },
    { header: "HOD / Head", accessor: "head" },
    {
      header: "Staff Count",
      accessor: "staff",
      render: (r) => (
        <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-bold text-slate-600">
          {r.staff} Members
        </span>
      ),
    },
    { header: "Allocated Rooms", accessor: "rooms" },
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
            Academic Departments
          </h1>
          <p className="text-slate-400 font-medium italic">
            Manage faculty units and departmental leadership.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Building2 size={20} className="text-emerald-400" />
          New Department
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
        title="Establish New Department"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField
            label="Department Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <ModalField
            label="Head of Department (HOD)"
            name="head"
            value={formData.head}
            onChange={(e) => setFormData({ ...formData, head: e.target.value })}
          />
          <ModalField
            label="Allocated Rooms"
            name="rooms"
            type="number"
            value={formData.rooms}
            onChange={(e) =>
              setFormData({ ...formData, rooms: e.target.value })
            }
          />
          <ModalField
            label="Initial Staff Count"
            name="staff"
            type="number"
            value={formData.staff}
            onChange={(e) =>
              setFormData({ ...formData, staff: e.target.value })
            }
          />
        </div>
      </SharedModal>

      <ConfirmationDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => console.log("Deleting department:", selectedItem?.id)}
        title="Dissolve Department"
        message={`Warning: You are about to dissolve the "${selectedItem?.name}" department. This will require re-assigning all associated staff members.`}
      />
    </>
  );
};

export default Departments;
