import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import { Plus, Phone, Users, Trash2, Edit } from "lucide-react";

import { mockStaff } from "../../mock/admin/staff";

const Staff = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    department: "Transport",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const columns = [
    {
      header: "ID",
      accessor: "id",
      render: (row) => (
        <span className="font-mono text-xs font-semibold bg-slate-100 px-2 py-1 rounded text-slate-600">
          {row.id}
        </span>
      ),
    },
    {
      header: "Staff Name",
      accessor: "name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
            {row.name.charAt(0)}
          </div>
          <span className="font-bold text-slate-700">{row.name}</span>
        </div>
      ),
    },
    { header: "Role", accessor: "role" },
    {
      header: "Department",
      accessor: "department",
      render: (row) => (
        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium text-[10px] uppercase">
          {row.department}
        </span>
      ),
    },
    {
      header: "Phone",
      accessor: "phone",
      render: (row) => (
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Phone size={12} />
          {row.phone}
        </div>
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
            Support Staff
          </h1>
          <p className="text-slate-400 font-medium italic">
            Manage your support staff, drivers, and maintenance personnel.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Plus size={20} className="text-emerald-400" />
          Add Staff Member
        </button>
      </div>

      <DataTable
        data={mockStaff}
        columns={columns}
        onAdd={() => setIsModalOpen(true)}
        hideAddButton={true}
      />

      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Recruit New Staff"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ModalField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Staff Name"
          />
          <ModalField
            label="Designation/Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g. Bus Driver"
          />
          <ModalField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            type="select"
            options={[
              "Transport",
              "Canteen",
              "Security",
              "Maintenance",
              "Administration",
            ]}
          />
          <ModalField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1..."
          />
          <ModalField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="staff@example.com"
          />
        </div>
      </SharedModal>

      <ConfirmationDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() =>
          console.log("Deleting staff member:", selectedItem?.id)
        }
        title="Termination Policy"
        message={`Warning: You are about to remove "${selectedItem?.name}" from the active staff directory. This will terminate their system access.`}
      />
    </>
  );
};

export default Staff;
