import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  School,
  UserCog,
  Settings as SettingsIcon,
  X,
  ChevronRight,
  ChevronLeft,
  LogOut,
  Menu,
  ShieldCheck,
  Building2,
  Globe,
  PlusCircle,
  CreditCard,
  HardDrive,
  LifeBuoy
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const SuperAdminSidebar = ({ isOpen, setIsOpen, isCollapsed, toggleCollapse }) => {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { title: "Dashboard", path: "/super-admin/dashboard", icon: LayoutDashboard },
    { title: "Manage Schools", path: "/super-admin/schools", icon: School },
    { title: "System Portals", path: "/super-admin/portals", icon: Globe },
    { title: "Subscriptions", path: "/super-admin/subscriptions", icon: CreditCard },
    { title: "Infrastructure", path: "/super-admin/infrastructure", icon: HardDrive },
    { title: "Support Center", path: "/super-admin/support", icon: LifeBuoy },
    { title: "Global Settings", path: "/super-admin/settings", icon: SettingsIcon },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`fixed left-0 top-0 h-full bg-[#0F172A] text-white z-50 md:translate-x-0 transition-all duration-300 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"
          } ${isCollapsed ? "w-20" : "w-72"}`}
      >
        {/* Logo Section */}
        <div className={`h-20 flex items-center ${isCollapsed ? "justify-center px-2" : "px-6"} border-b border-white/10 relative transition-all duration-300`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-lg shadow-indigo-500/20">
              S
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden whitespace-nowrap">
                <h1 className="font-extrabold text-lg tracking-tight">SuperHub</h1>
                <p className="text-[10px] text-indigo-400 font-black tracking-widest uppercase">
                  Global Control
                </p>
              </div>
            )}
          </div>

          <button
            onClick={toggleCollapse}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-indigo-500 text-white rounded-full items-center justify-center cursor-pointer shadow-lg hover:bg-indigo-600 transition-colors z-50"
          >
            {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>

          <button
            className="md:hidden ml-auto p-1 text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center ${isCollapsed ? "justify-center px-2" : "gap-3 px-4"} py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                  ? `bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ${!isCollapsed ? "translate-x-1" : ""}`
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                title={isCollapsed ? item.title : ""}
              >
                <item.icon size={20} className="shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="truncate">{item.title}</span>
                    {isActive && (
                      <ChevronRight size={16} className="ml-auto opacity-50" />
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <div className="p-6 border-t border-white/10">
          <button
            onClick={logout}
            className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3 w-full px-4"} py-3 text-sm font-bold text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors group px-4`}
          >
            <LogOut size={20} className="shrink-0 group-hover:scale-110 transition-transform" />
            {!isCollapsed && <span>Sign Out</span>}
          </button>
        </div>
      </motion.aside>
    </>
  );
};

const SuperAdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentSection = pathSegments[1]
    ? pathSegments[1].replace("-", " ")
    : "Dashboard";

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <SuperAdminSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        isCollapsed={isCollapsed}
        toggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      <div className={`${isCollapsed ? "md:ml-20" : "md:ml-72"} min-h-screen flex flex-col transition-all duration-300`}>
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg text-slate-600"
            >
              <Menu size={24} />
            </button>
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                <span>System</span>
                <ChevronRight size={10} />
                <span className="text-indigo-600">{currentSection}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 capitalize tracking-tight">
                {currentSection}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="font-black text-slate-800 text-sm">
                Super Admin
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                <span className="text-[10px] font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded tracking-tighter uppercase">
                  Global Controller
                </span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center font-black text-xl shadow-xl shadow-slate-200">
              S
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
