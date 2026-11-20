import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import { Utensils, Plus } from "lucide-react";

import { canteenData } from "../../mock/admin/canteen";

const Canteen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = canteenData;
  const columns = [
    { header: "Menu Item", accessor: "item" },
    { header: "Category", accessor: "category" },
    { header: "Price", accessor: "price" },
    {
      header: "Status",
      accessor: "status",
      render: (r) => (
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
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
            Canteen Menu
          </h1>
          <p className="text-slate-400 font-medium italic">
            Manage daily catering options and pricing for students and staff.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <Utensils size={20} className="text-emerald-400" />
          Add Menu Item
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
        title="New Canteen Item"
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModalField label="Item Name" name="item" />
          <ModalField
            label="Category"
            name="category"
            type="select"
            options={["Snacks", "Lunch", "Drinks", "Desserts"]}
          />
          <ModalField label="Price ($)" name="price" type="number" />
          <ModalField label="Initial Stock" name="stock" type="number" />
        </div>
      </SharedModal>
    </>
  );
};

export default Canteen;
