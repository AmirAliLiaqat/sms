import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import { Bell, Plus, Edit, Trash2, Calendar } from "lucide-react";
import { newsAdminData } from "../../mock/admin/news";

const NewsAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "Events",
    date: "",
    status: "Draft",
    content: "",
  });

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting news:", selectedItem?.id);
    // Add delete logic here
  };

  const columns = [
    {
      header: "Headline",
      accessor: "title",
      render: (r) => (
        <span className="font-bold text-slate-800 line-clamp-1">{r.title}</span>
      ),
    },
    {
      header: "Category",
      accessor: "category",
      render: (r) => (
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          {r.category}
        </span>
      ),
    },
    {
      header: "Publish Date",
      accessor: "date",
      render: (r) => (
        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
          <Calendar size={12} className="text-yellow-500" /> {r.date}
        </div>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (r) => (
        <span
          className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${r.status === "Published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
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
            Campus News Admin
          </h1>
          <p className="text-slate-400 font-medium italic">
            Broadcast updates, achievements and event notices.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Plus size={20} className="text-emerald-400" />
          Add News Item
        </button>
      </div>

      <DataTable
        data={newsAdminData}
        columns={columns}
        onAdd={() => setIsModalOpen(true)}
        hideAddButton={true}
      />

      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Bulletin"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          <ModalField
            label="News Headline"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="e.g. Annual Sports Meet 2026 Announcement"
          />
          <div className="grid grid-cols-2 gap-4">
            <ModalField
              label="Category"
              name="category"
              type="select"
              options={[
                "Events",
                "Achievements",
                "Academics",
                "Community",
                "Alert",
              ]}
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
            <ModalField
              label="Event/Post Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <ModalField
            label="Publishing Status"
            name="status"
            type="select"
            options={["Draft", "Published"]}
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          />
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Story Content
            </label>
            <textarea
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 min-h-[150px] text-sm font-medium outline-none focus:border-[#0B1120] transition-all"
              placeholder="Describe the news in detail..."
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            />
          </div>
        </div>
      </SharedModal>

      <ConfirmationDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
        title="Delete News Item"
        message={`Are you sure you want to delete "${selectedItem?.title}"? This action cannot be undone.`}
      />
    </>
  );
};

export default NewsAdmin;
