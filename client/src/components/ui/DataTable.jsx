import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";

const DataTable = ({ columns, data, onAdd, hideAddButton }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Filter Data
  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
      {/* Header Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-4 border-b border-slate-100">
         {/* Left Side: Title or Empty Space (Can be used for specific filtering or bulk actions later) */}
         <div className="hidden md:block"></div>

         {/* Right Side: Search & Filter */}
         <div className="flex w-full md:w-auto items-center gap-3">
            <div className="relative group flex-1 md:flex-none">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0B1120] transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:ring-2 focus:ring-[#FFD60A] focus:border-transparent transition-all outline-none font-bold text-sm placeholder:font-medium placeholder:text-slate-400"
              />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
               <Filter size={16} />
               <span>Filter</span>
            </button>

            {onAdd && !hideAddButton && (
                 <button
                  onClick={onAdd}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0B1120] text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl whitespace-nowrap"
                >
                  <Plus size={16} />
                  <span>Add New</span>
                </button>
            )}
         </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 first:pl-8 text-left whitespace-nowrap"
                >
                  {col.header}
                </th>
              ))}
              {/* Removed Hardcoded Actions Column Header to avoid duplication */}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {currentItems.length > 0 ? (
              currentItems.map((item, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  {columns.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      className="px-6 py-5 text-sm font-bold text-slate-600 whitespace-nowrap first:pl-8 first:text-slate-900"
                    >
                      {col.render ? col.render(item) : item[col.accessor]}
                    </td>
                  ))}
                   {/* Removed Hardcoded Actions Column Cell */}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-16 text-center"
                >
                  <div className="flex flex-col items-center justify-center text-slate-400">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                      <Search size={24} />
                    </div>
                    <p className="font-bold text-slate-500">
                      No results found for "{searchTerm}"
                    </p>
                    <p className="text-xs font-medium text-slate-400 mt-1">
                      Try adjusting your search or filters
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-8 py-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Showing{" "}
          <span className="text-slate-800">
            {filteredData.length > 0 ? indexOfFirstItem + 1 : 0}-
            {Math.min(indexOfLastItem, filteredData.length)}
          </span>{" "}
          of {filteredData.length} records
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-[#FFD60A] hover:text-[#0B1120] hover:bg-[#FFD60A]/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:bg-transparent transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          
          <div className="w-9 h-9 flex items-center justify-center font-black text-sm bg-[#0B1120] text-white rounded-xl shadow-md cursor-default">
            {currentPage}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages || totalPages === 0}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-[#FFD60A] hover:text-[#0B1120] hover:bg-[#FFD60A]/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:bg-transparent transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
