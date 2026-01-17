import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, Trash2 } from "lucide-react";

const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "This action cannot be undone. Please confirm if you want to proceed.",
  confirmLabel = "Yes, Delete",
  cancelLabel = "Cancel",
  type = "danger", // danger, warning, info
}) => {
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

  const colors = {
    danger: {
      bg: "bg-rose-50",
      icon: "text-rose-600",
      button: "bg-rose-600 hover:bg-rose-700 shadow-rose-200",
    },
    warning: {
      bg: "bg-amber-50",
      icon: "text-amber-600",
      button: "bg-amber-600 hover:bg-amber-700 shadow-amber-200",
    },
    info: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700 shadow-blue-200",
    },
  };

  const activeColor = colors[type] || colors.danger;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <X size={18} />
            </button>

            <div className="p-8">
              {/* Icon & Title */}
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-2xl ${activeColor.bg} flex items-center justify-center ${activeColor.icon} mb-6`}
                >
                  {type === "danger" ? (
                    <Trash2 size={32} />
                  ) : (
                    <AlertTriangle size={32} />
                  )}
                </div>

                <h2 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">
                  {title}
                </h2>

                <p className="text-slate-500 font-medium leading-relaxed">
                  {message}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3.5 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all text-sm"
                >
                  {cancelLabel}
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className={`flex-1 px-6 py-3.5 rounded-2xl text-white font-bold transition-all shadow-xl text-sm ${activeColor.button}`}
                >
                  {confirmLabel}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationDialog;
