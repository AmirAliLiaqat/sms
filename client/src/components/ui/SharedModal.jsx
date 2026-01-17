import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save } from "lucide-react";

const SharedModal = ({ isOpen, onClose, title, onSubmit, children }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-white">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body (Scrollable) */}
            <div className="p-8 overflow-y-auto custom-scrollbar bg-slate-50/50">
              {children}
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-slate-100 bg-white flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onSubmit}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0B1120] text-white font-bold hover:bg-slate-800 shadow-lg shadow-slate-200 transition-all"
              >
                <Save size={18} />
                Save Record
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ModalField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  options,
  name,
}) => (
  <div className="space-y-1.5 mb-5">
    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">
      {label}
    </label>
    {type === "select" ? (
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options?.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    ) : type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={placeholder}
        className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all resize-none placeholder:font-medium placeholder:text-slate-300"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all placeholder:font-medium placeholder:text-slate-300"
      />
    )}
  </div>
);

export default SharedModal;
