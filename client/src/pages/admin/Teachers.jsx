import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import {
  User,
  Phone,
  Mail,
  Award,
  Clock,
  BookOpen,
  UserPlus,
  Trash2,
  Edit,
} from "lucide-react";

import { mockTeachers } from "../../mock/admin/teachers";

const Teachers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Sciences",
    subject: "",
    qualification: "",
    phone: "",
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
      header: "Faculty Member",
      accessor: "name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-400 text-[#0B1120] flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-white">
            {row.name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-slate-800">{row.name}</div>
            <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              {row.email}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Department",
      accessor: "department",
      render: (row) => (
        <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-wider">
          {row.department}
        </span>
      ),
    },
    { header: "Specialization", accessor: "subject" },
    {
      header: "Contact",
      accessor: "phone",
      render: (row) => (
        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
          <Phone size={12} className="text-yellow-500" />
          {row.phone}
        </div>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (row) => (
        <span
          className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest ${
            row.status === "Active" ? "text-emerald-600" : "text-amber-500"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${row.status === "Active" ? "bg-emerald-600" : "bg-amber-500 animate-pulse"}`}
          />
          {row.status}
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
          <h1 className="text-3xl font-black text-[#0B1120] mb-2 text-uppercase">
            Faculty Board
          </h1>
          <p className="text-slate-400 font-medium italic">
            Manage and track your distinguished team of educators.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <UserPlus size={20} className="text-yellow-400" />
          Onboard Teacher
        </button>
      </div>

      <DataTable
        data={mockTeachers}
        columns={columns}
        onAdd={() => setIsModalOpen(true)}
        hideAddButton={true}
      />

      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Onboard New Faculty Member"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ModalField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Dr. Jane Smith"
          />
          <ModalField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="jane.smith@smshub.edu"
          />
          <ModalField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            type="select"
            options={[
              "Sciences",
              "Mathematics",
              "Languages",
              "Arts",
              "Humanities",
              "Sports",
            ]}
          />
          <ModalField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Quantum Physics"
          />
          <ModalField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
          <ModalField
            label="Qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="e.g. Ph.D, M.Sc"
          />
        </div>
      </SharedModal>

      <ConfirmationDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => console.log("Deleting teacher:", selectedItem?.id)}
        title="Offboard Faculty Member"
        message={`Are you sure you want to offboard "${selectedItem?.name}"? All their current assignments will be cleared.`}
      />
    </>
  );
};

export default Teachers;
