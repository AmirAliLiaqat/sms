import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import { BookOpen, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { blogsAdminData } from "../../mock/admin/blogs";

const BlogsAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: "Draft",
    content: "",
  });

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting blog:", selectedItem?.id);
    // Add delete logic here
  };

  const columns = [
    {
      header: "Title",
      accessor: "title",
      render: (r) => (
        <span className="font-bold text-slate-800 line-clamp-1">{r.title}</span>
      ),
    },
    { header: "Author", accessor: "author" },
    {
      header: "Status",
      accessor: "status",
      render: (r) => (
        <span
          className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${r.status === "Published" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}
        >
          {r.status}
        </span>
      ),
    },
    { header: "Date", accessor: "date" },
    {
      header: "Views",
      accessor: "views",
      render: (r) => (
        <div className="flex items-center gap-1 text-slate-400 font-bold">
          <Eye size={12} /> {r.views}
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
            Blog Management
          </h1>
          <p className="text-slate-400 font-medium italic">
            Create and manage insightful articles for the school community.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Plus size={20} className="text-yellow-400" />
          Create Article
        </button>
      </div>

      <DataTable
        data={blogsAdminData}
        columns={columns}
        onAdd={() => setIsModalOpen(true)}
        hideAddButton={true}
      />

      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Compose New Article"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          <ModalField
            label="Article Title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="e.g. The Future of E-Learning"
          />
          <div className="grid grid-cols-2 gap-4">
            <ModalField
              label="Author Name"
              name="author"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
            />
            <ModalField
              label="Status"
              name="status"
              type="select"
              options={["Draft", "Published"]}
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Article Body
            </label>
            <textarea
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 min-h-[200px] text-sm font-medium outline-none focus:border-[#0B1120] transition-all"
              placeholder="Write your content here..."
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
        title="Delete Article"
        message={`Are you sure you want to delete "${selectedItem?.title}"? This action cannot be undone.`}
      />
    </>
  );
};

export default BlogsAdmin;
