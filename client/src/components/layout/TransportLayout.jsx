import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  MapPin,
  Users,
  LogOut,
  ChevronRight,
  ChevronLeft,
  X,
  Menu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const TransportSidebar = ({ isOpen, setIsOpen, isCollapsed, toggleCollapse }) => {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { title: "Dashboard", path: "/transport/dashboard", icon: LayoutDashboard },
    { title: "Routes", path: "/transport/routes", icon: MapPin },
    { title: "Drivers & Vehicles", path: "/transport/drivers", icon: Users },
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
        className={`fixed left-0 top-0 h-full bg-[#0B1120] text-white z-50 md:translate-x-0 transition-all duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isCollapsed ? "w-20" : "w-72"}`}
      >
        <div className={`h-20 flex items-center ${isCollapsed ? "justify-center px-2" : "px-6"} border-b border-white/10 relative transition-all duration-300`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-[#0B1120] font-bold text-xl shrink-0">
              S
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden whitespace-nowrap">
                <h1 className="font-bold text-lg tracking-wide">SMS</h1>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase">
                  Transport
                </p>
              </div>
            )}
          </div>
          
          <button
            onClick={toggleCollapse}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FFD60A] text-[#0B1120] rounded-full items-center justify-center cursor-pointer shadow-lg hover:bg-yellow-500 transition-colors z-50"
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

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center ${isCollapsed ? "justify-center px-2" : "gap-3 px-4"} py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? `bg-[#FFD60A] text-[#0B1120] shadow-lg shadow-yellow-400/20 ${!isCollapsed ? "translate-x-1" : ""}`
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
                title={isCollapsed ? item.title : ""}
              >
                <item.icon size={20} className="shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="truncate">{item.title}</span>
                    {isActive && (
                      <ChevronRight size={16} className="ml-auto text-[#0B1120]" />
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </div>

        <div className="p-6 border-t border-white/10">
          <button
            onClick={logout}
            className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3 w-full px-4"} py-2 text-sm font-bold text-rose-500 hover:bg-rose-500/10 rounded-xl transition-colors`}
            title={isCollapsed ? "Sign Out" : ""}
          >
            <LogOut size={20} className="shrink-0" />
            {!isCollapsed && "Sign Out"}
          </button>
        </div>
      </motion.aside>
    </>
  );
};

const TransportLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentSection = pathSegments[1]
    ? pathSegments[1].replace("-", " ")
    : "Overview";

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <TransportSidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        isCollapsed={isCollapsed} 
        toggleCollapse={() => setIsCollapsed(!isCollapsed)} 
      />

      <div className={`${isCollapsed ? "md:ml-20" : "md:ml-72"} min-h-screen flex flex-col transition-all duration-300`}>
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg text-slate-600"
            >
              <Menu size={24} />
            </button>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                <span>Transport</span>
                <ChevronRight size={10} />
                <span className="text-[#FFD60A]">{currentSection}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                {currentSection}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="font-bold text-slate-800 text-sm">
                {user?.name || "Transport Manager"}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-yellow-600 bg-yellow-400/20 px-1.5 py-0.5 rounded">
                    TRANSPORT DEPT
                </span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#0B1120] text-white flex items-center justify-center font-bold text-lg shadow-xl shadow-slate-200">
              {user?.name?.charAt(0) || "T"}
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default TransportLayout;
