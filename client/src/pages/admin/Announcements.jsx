import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { Bell, Plus } from "lucide-react";

import { announcementsData } from "../../mock/admin/announcements";

const Announcements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = announcementsData;
  const columns = [
    { header: "Notice Subject", accessor: "title" },
    { header: "Post Date", accessor: "date" },
    { header: "Audience", accessor: "audience" },
  ];

  return (
    <>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            Notice Board
          </h1>
          <p className="text-slate-400 font-medium italic">
            Broadcast important updates and school announcements.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Bell size={20} className="text-yellow-400" />
          Create Notice
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
        title="Compose New Announcement"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          <ModalField label="Subject Title" name="title" />
          <ModalField
            label="Target Audience"
            name="audience"
            type="select"
            options={["Universal", "Students", "Parents", "Teachers"]}
          />
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Message Content
            </label>
            <textarea
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 min-h-[100px] text-sm font-medium"
              placeholder="Write your announcement here..."
            ></textarea>
          </div>
        </div>
      </SharedModal>
    </>
  );
};

export default Announcements;
