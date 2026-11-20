import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { Book, Plus } from "lucide-react";

import { libraryData } from "../../mock/admin/library";

const LibraryAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = libraryData;
  const columns = [
    { header: "Book ID", accessor: "id" },
    { header: "Title", accessor: "title" },
    { header: "Author", accessor: "author" },
    {
      header: "Status",
      accessor: "status",
      render: (r) => (
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${r.status === "Available" ? "bg-green-100 text-green-700" : r.status === "Issued" ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"}`}
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
            Library Catalog
          </h1>
          <p className="text-slate-400 font-medium italic">
            Manage the school's book inventory and tracking system.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Book size={20} className="text-orange-400" />
          Catalog Book
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
        title="Add New Book to Library"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField label="Book ID" name="id" placeholder="e.g. BK-100" />
          <ModalField label="Book Title" name="title" />
          <ModalField label="Author" name="author" />
          <ModalField
            label="Initial Status"
            name="status"
            type="select"
            options={["Available", "Issued", "In Maintenance"]}
          />
        </div>
      </SharedModal>
    </>
  );
};

export default LibraryAdmin;
