import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import { Shield, Trash2, Edit } from "lucide-react";

import { managementUsersData } from "../../mock/admin/managementUsers";

const ManagementUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "Admin",
    email: "",
  });

  const data = managementUsersData;

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Role", accessor: "role" },
    { header: "Email", accessor: "email" },
    {
      header: "Last Login",
      accessor: "lastLogin",
      render: (r) => (
        <span className="text-xs text-text-muted">{r.lastLogin}</span>
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
            System Administrators
          </h1>
          <p className="text-slate-400 font-medium italic">
            Control platform access levels and security permissions.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Shield size={20} className="text-yellow-400 fill-yellow-400" />
          Add Admin User
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
        title="Add Management User"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          <ModalField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <ModalField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <ModalField
            label="Access Role"
            name="role"
            type="select"
            options={[
              "Admin",
              "Super Admin",
              "Principal",
              "Vice Principal",
              "Registrar",
            ]}
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
        </div>
      </SharedModal>

      <ConfirmationDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => console.log("Deleting user:", selectedItem?.id)}
        title="Remove Administrator"
        message={`Are you sure you want to revoke access for "${selectedItem?.name}"? They will no longer be able to log in to the admin portal.`}
      />
    </>
  );
};

export default ManagementUsers;
