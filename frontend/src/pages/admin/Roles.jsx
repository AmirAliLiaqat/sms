import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { Shield, Plus } from "lucide-react";

import { rolesData } from "../../mock/admin/roles";

const Roles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = rolesData;
  const columns = [
    { header: "Role Name", accessor: "role" },
    { header: "Users Count", accessor: "users" },
    { header: "Access Level", accessor: "permissions" },
  ];

  return (
    <>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            RBAC Settings
          </h1>
          <p className="text-slate-400 font-medium italic">
            Define Role-Based Access Control levels and user permissions.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Shield size={20} className="text-indigo-400" />
          Create New Role
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
        title="Role Capability Config"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          <ModalField
            label="Role Name"
            name="role"
            placeholder="e.g. Finance Officer"
          />
          <ModalField
            label="Access Scope"
            name="permissions"
            type="select"
            options={[
              "Full Administrative",
              "Academic Management",
              "Financial Access",
              "Viewer Only",
            ]}
          />
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
              Security Note
            </p>
            <p className="text-[10px] text-slate-400 font-medium italic">
              Changes to roles will take effect upon the next user login.
              Exercise caution when modifying core administrative permissions.
            </p>
          </div>
        </div>
      </SharedModal>
    </>
  );
};

export default Roles;
