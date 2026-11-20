import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { Calendar, Plus } from "lucide-react";

import { timetableData } from "../../mock/admin/timetable";

const Timetable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = timetableData;

  const columns = [
    { header: "Day", accessor: "day" },
    { header: "Period", accessor: "period" },
    { header: "Class", accessor: "class" },
    { header: "Subject", accessor: "subject" },
    { header: "Teacher", accessor: "teacher" },
  ];

  return (
    <>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            Master Schedule
          </h1>
          <p className="text-slate-400 font-medium italic">
            Coordinate class hours, teacher rotations, and room usage.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Calendar size={20} className="text-yellow-400" />
          Schedule Slot
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
        title="Schedule New Period"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField
            label="Day of Week"
            name="day"
            type="select"
            options={[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ]}
          />
          <ModalField
            label="Period / Time"
            name="period"
            placeholder="e.g. 1st Period (9:00 AM)"
          />
          <ModalField
            label="Target Class"
            name="class"
            placeholder="e.g. 10-A"
          />
          <ModalField
            label="Subject"
            name="subject"
            placeholder="Select Subject"
          />
          <ModalField
            label="Assigned Teacher"
            name="teacher"
            placeholder="Select Teacher"
          />
        </div>
      </SharedModal>
    </>
  );
};

export default Timetable;
