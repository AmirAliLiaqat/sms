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

const DataTable = ({ columns, data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Filter Data
  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="space-y-6">
      {/* Header Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col xl:flex-row justify-end items-start xl:items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
      >
        <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
          <div className="relative group flex-1 sm:flex-none">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0B1120] transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 pl-11 pr-4 py-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:ring-2 focus:ring-[#FFD60A] focus:border-transparent transition-all outline-none font-medium placeholder:text-slate-400"
            />
          </div>

          <button className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
            <Filter size={18} />
            <span>Filter</span>
          </button>

          {/* {onAdd && (
            <button
              onClick={onAdd}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0B1120] text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl whitespace-nowrap"
            >
              <Plus size={18} />
              {addLabel}
            </button>
          )} */}
        </div>
      </motion.div>

      {/* Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500 first:pl-8 whitespace-nowrap"
                  >
                    {col.header}
                  </th>
                ))}
                <th className="px-6 py-5 text-right text-[10px] font-bold uppercase tracking-widest text-slate-500 pr-8">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentItems.length > 0 ? (
                currentItems.map((item, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="hover:bg-yellow-50/10 transition-colors group"
                  >
                    {columns.map((col, colIdx) => (
                      <td
                        key={colIdx}
                        className="px-6 py-4 text-sm font-medium text-slate-700 whitespace-nowrap first:pl-8 first:font-bold first:text-slate-900"
                      >
                        {col.render ? col.render(item) : item[col.accessor]}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-right pr-8">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-[#0B1120] transition-colors">
                        <MoreHorizontal size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="px-6 py-16 text-center"
                  >
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                        <Search size={24} />
                      </div>
                      <p className="font-medium text-slate-500">
                        No results found for "{searchTerm}"
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
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
        <div className="px-8 py-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/30">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Showing{" "}
            <span className="text-slate-900">
              {indexOfFirstItem + 1}-
              {Math.min(indexOfLastItem, filteredData.length)}
            </span>{" "}
            of {filteredData.length} records
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#FFD60A] hover:text-[#FFD60A] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-400 transition-all shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="px-4 py-2 font-bold text-sm bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 min-w-[3rem] text-center">
              {currentPage}
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#FFD60A] hover:text-[#FFD60A] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-400 transition-all shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DataTable;
