import { motion, AnimatePresence } from "framer-motion";
import { XCircle } from "lucide-react";

/**
 * A premium shared modal for Super Admin dashboard
 * @param {boolean} isOpen - Controls visibility
 * @param {function} onClose - Function to close the modal
 * @param {string} title - Main heading
 * @param {string} subtitle - Smaller text below heading
 * @param {React.ReactNode} icon - Lucide icon component
 * @param {string} color - Theme color (indigo, emerald, amber, rose, blue)
 * @param {React.ReactNode} children - Modal body content
 * @param {string} maxWidth - Tailwind max-w class (default: max-w-2xl)
 */
const SuperAdminModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  icon: Icon,
  color = "indigo",
  children,
  maxWidth = "max-w-2xl"
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full ${maxWidth} bg-white rounded-[2.5rem] shadow-2xl overflow-hidden`}
          >
            <div className="p-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-${color}-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-${color}-200`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
                    {subtitle && (
                      <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-0.5">
                        {subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-slate-100 rounded-2xl text-slate-400 transition-colors"
                >
                  <XCircle size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="custom-scrollbar max-h-[70vh] overflow-y-auto pr-2 -mr-2">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuperAdminModal;
