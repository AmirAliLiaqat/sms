import React, { useState } from "react";
import { Search, Plus, Edit2, Trash2, Utensils } from "lucide-react";

const CanteenItems = () => {
     const [items, setItems] = useState([
        { id: 1, name: "Chicken Sandwich", category: "Snacks", price: "$5.00", stock: "50", status: "Available" },
        { id: 2, name: "Veg Burger", category: "Snacks", price: "$4.50", stock: "40", status: "Available" },
        { id: 3, name: "Fruit Salad", category: "Healthy", price: "$3.50", stock: "25", status: "Low Stock" },
        { id: 4, name: "Ice Cream", category: "Dessert", price: "$2.00", stock: "0", status: "Sold Out" },
    ]);

    return (
        <div className="space-y-8">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                     <h1 className="text-3xl font-black text-[#0B1120]">Menu Management</h1>
                    <p className="text-slate-400 font-medium">Add, update, or remove menu items</p>
                </div>
                 <button className="flex items-center gap-2 px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                    <Plus size={18} />
                    Add New Item
                </button>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                     <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Item Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Stock</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {items.map((item) => (
                             <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-700 flex items-center gap-3">
                                     <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                                        <Utensils size={18} />
                                     </div>
                                     {item.name}
                                </td>
                                <td className="px-6 py-4 text-slate-600 font-medium">{item.category}</td>
                                <td className="px-6 py-4 font-black text-slate-800">{item.price}</td>
                                <td className="px-6 py-4 font-medium text-slate-600">{item.stock}</td>
                                <td className="px-6 py-4">
                                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                                        item.status === 'Available' ? 'bg-green-100 text-green-700' :
                                        item.status === 'Low Stock' ? 'bg-orange-100 text-orange-700' :
                                        'bg-rose-100 text-rose-700'
                                    }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            <Edit2 size={16} />
                                        </button>
                                         <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CanteenItems;
