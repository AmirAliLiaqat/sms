import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSiteSettings } from "../../services/api";
import {
  Settings as SettingsIcon,
  Globe,
  Layout,
  Palette,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  Plus,
  Trash2,
  ChevronRight,
  Shield,
  Monitor,
  CheckCircle2,
  Info,
  PanelBottom,
  Building2,
  Check,
  X,
} from "lucide-react";

const TabButton = ({ id, label, icon: Icon, activeTab, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
      activeTab === id
        ? "bg-[#FFD60A] text-[#0B1120] shadow-lg shadow-yellow-200/50 scale-105"
        : "bg-white text-slate-400 hover:text-slate-600 hover:bg-slate-50"
    }`}
  >
    <Icon size={20} />
    <span className="uppercase tracking-widest text-xs">{label}</span>
  </button>
);

const SectionNav = ({ id, label, icon: Icon, activeSection, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
      activeSection === id
        ? "text-[#0B1120] bg-slate-100"
        : "text-slate-400 hover:text-slate-600"
    }`}
  >
    <Icon size={16} />
    {label}
  </button>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState("admin"); // 'admin' or 'site'
  const [activeSection, setActiveSection] = useState("general");
  const [showSavedToast, setShowSavedToast] = useState(false);

  const [settings, setSettings] = useState({
    // Admin Settings
    adminDashboardName: "SMS ADMIN DASHBOARD",
    adminDashboardTagline: "System Management & School Administration",
    adminPrimaryColor: "#0B1120",
    adminAccentColor: "#FFD60A",
    adminPages: [
      { id: "dashboard", name: "Dashboard", visible: true, icon: "Layout" },
      { id: "students", name: "Students", visible: true, icon: "Users" },
      { id: "teachers", name: "Teachers", visible: true, icon: "UserCheck" },
      { id: "staff", name: "Staff", visible: true, icon: "UserGroup" },
      {
        id: "management",
        name: "Management",
        visible: true,
        icon: "ShieldCheck",
      },
      { id: "classrooms", name: "Classrooms", visible: true, icon: "DoorOpen" },
      {
        id: "departments",
        name: "Departments",
        visible: true,
        icon: "Building2",
      },
      { id: "subjects", name: "Subjects", visible: true, icon: "BookOpen" },
      { id: "timetable", name: "Timetable", visible: true, icon: "Calendar" },
      {
        id: "attendance",
        name: "Attendance",
        visible: true,
        icon: "ClipboardCheck",
      },
      { id: "exams", name: "Exams", visible: true, icon: "FileText" },
      { id: "admissions", name: "Admissions", visible: true, icon: "UserPlus" },
      { id: "finance", name: "Finance", visible: true, icon: "CreditCard" },
      { id: "library", name: "Library", visible: true, icon: "Library" },
      { id: "canteen", name: "Canteen", visible: true, icon: "Coffee" },
      {
        id: "announcements",
        name: "Announcements",
        visible: true,
        icon: "Megaphone",
      },
      { id: "news", name: "News Management", visible: true, icon: "Newspaper" },
      { id: "blogs", name: "Blog Posts", visible: true, icon: "FileText" },
      { id: "roles", name: "Roles & Permissions", visible: true, icon: "Lock" },
      { id: "audit", name: "Audit Logs", visible: true, icon: "Activity" },
    ],

    // Site Settings
    siteName: "EXCELLENCE INTERNATIONAL SCHOOL",
    siteDescription:
      "Empowering students with quality education and modern values for a better tomorrow.",
    sitePrimaryColor: "#FFD60A",
    siteSecondaryColor: "#0B1120",
    siteTheme: "light",
    siteHeroOverlayColor: "#0B1120",
    siteHeroBackgroundImage: "",
    siteLayout: "modern",
    sitePages: [
      {
        id: "home",
        name: "Home",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
      {
        id: "about",
        name: "About Us",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
      {
        id: "academics",
        name: "Academics",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
      {
        id: "vision",
        name: "Mission & Vision",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
      {
        id: "management",
        name: "Management Team",
        visible: true,
        inNavbar: false,
        inFooter: true,
      },
      {
        id: "faculty",
        name: "Our Faculty",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
      {
        id: "admissions",
        name: "Admissions",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
      {
        id: "calendar",
        name: "Academic Calendar",
        visible: true,
        inNavbar: false,
        inFooter: true,
      },
      {
        id: "campus-life",
        name: "Campus Life",
        visible: true,
        inNavbar: false,
        inFooter: true,
      },
      {
        id: "class-structure",
        name: "Class Structure",
        visible: true,
        inNavbar: false,
        inFooter: true,
      },
      {
        id: "fee-structure",
        name: "Fee Information",
        visible: true,
        inNavbar: false,
        inFooter: true,
      },
      {
        id: "gallery",
        name: "Gallery",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
      {
        id: "news",
        name: "News & Events",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
      {
        id: "blogs",
        name: "Blogs",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
      {
        id: "contact",
        name: "Contact Us",
        visible: true,
        inNavbar: true,
        inFooter: true,
      },
    ],

    // Contact & Social
    contactEmail: "admin@excellence.edu",
    contactPhone: "+1 (555) 000-1111",
    address: "45-A Education Sector, Knowledge City",
    language: "English (US)",
    timezone: "UTC -5 (Eastern Time)",
    socialLinks: {
      facebook: "https://facebook.com/school",
      twitter: "https://twitter.com/school",
      instagram: "https://instagram.com/school",
      linkedin: "https://linkedin.com/school",
      youtube: "https://youtube.com/school",
    },

    // Admission Specific (From previous)
    admissionsOpen: true,
    marqueeTagline:
      "Admissions Open for Spring 2026 - Limited Seats Available! Apply Now.",
    redirectTitle: "Admission Starting from Feb 17",
    redirectMessage:
      "Stay tuned for official Admission Starting dates and curriculum announcements.",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getSiteSettings();
        if (res.success && res.data) {
          setSettings((prev) => ({ ...prev, ...res.data }));
        }
      } catch (error) {
        console.error("Failed to fetch settings", error);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setSettings((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setSettings((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
    // Simple visual feedback for "auto-save"
    handleDelayedToast();
  };

  const togglePageVisibility = (listKey, id, field) => {
    setSettings((prev) => ({
      ...prev,
      [listKey]: prev[listKey].map((page) =>
        page.id === id ? { ...page, [field]: !page[field] } : page,
      ),
    }));
    handleDelayedToast();
  };

  const handleDelayedToast = () => {
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      {/* Header & Main Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-[#0B1120] tracking-tight">
            SYSTEM SETTINGS
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            Configure your dashboard and public site presence
          </p>
        </div>

        <div className="flex gap-4 p-1.5 bg-white rounded-[1.5rem] shadow-sm border border-slate-100">
          <TabButton
            id="admin"
            label="Admin Panel"
            icon={Shield}
            activeTab={activeTab}
            onClick={(id) => {
              setActiveTab(id);
              setActiveSection("general");
            }}
          />
          <TabButton
            id="site"
            label="Public Site"
            icon={Globe}
            activeTab={activeTab}
            onClick={(id) => {
              setActiveTab(id);
              setActiveSection("general");
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-2">
              Configuration Sections
            </p>
            <nav className="space-y-1">
              <SectionNav
                id="general"
                label="General Information"
                icon={Info}
                activeSection={activeSection}
                onClick={setActiveSection}
              />
              <SectionNav
                id="appearance"
                label="Appearance & Theme"
                icon={Palette}
                activeSection={activeSection}
                onClick={setActiveSection}
              />
              <SectionNav
                id="navigation"
                label="Navigation & Visibility"
                icon={Layout}
                activeSection={activeSection}
                onClick={setActiveSection}
              />
              {activeTab === "site" && (
                <SectionNav
                  id="social"
                  label="Social & Contact"
                  icon={Globe}
                  activeSection={activeSection}
                  onClick={setActiveSection}
                />
              )}
            </nav>
          </div>

          {/* Quick Info Box */}
          <div className="bg-[#0B1120] rounded-[2rem] p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <SettingsIcon size={120} />
            </div>
            <h4 className="text-xl font-black mb-2 relative z-10">Pro Tip</h4>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
              Changes are saved automatically. Some appearance changes may
              require a page refresh to take full effect.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeSection}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 min-h-[600px]"
            >
              {/* ADMIN SETTINGS - GENERAL */}
              {activeTab === "admin" && activeSection === "general" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-black text-[#0B1120]">
                      Dashboard Branding
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Customize how the admin area appears to users
                    </p>
                  </div>

                  <div className="grid gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Dashboard Title
                      </label>
                      <input
                        type="text"
                        name="adminDashboardName"
                        value={settings.adminDashboardName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Dashboard Tagline
                      </label>
                      <input
                        type="text"
                        name="adminDashboardTagline"
                        value={settings.adminDashboardTagline}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        System Language
                      </label>
                      <select
                        name="language"
                        value={settings.language}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all appearance-none"
                      >
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>Arabic</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Timezone
                      </label>
                      <select
                        name="timezone"
                        value={settings.timezone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all appearance-none"
                      >
                        <option>UTC -5 (Eastern Time)</option>
                        <option>UTC +0 (Greenwich Mean Time)</option>
                        <option>UTC +5:30 (India Standard Time)</option>
                        <option>UTC +9 (Japan Standard Time)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-black text-[#0B1120]">
                          Maintenance Mode
                        </h4>
                        <p className="text-slate-500 text-sm">
                          Restrict access to admin dashboard during updates
                        </p>
                      </div>
                      <button className="w-14 h-8 rounded-full bg-slate-100 relative group transition-colors">
                        <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ADMIN SETTINGS - APPEARANCE */}
              {activeTab === "admin" && activeSection === "appearance" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-black text-[#0B1120]">
                      Visual Theme
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Set the primary colors for your administration interface
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Primary Brand Color
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="color"
                          name="adminPrimaryColor"
                          value={settings.adminPrimaryColor}
                          onChange={handleChange}
                          className="w-20 h-20 rounded-2xl cursor-pointer border-none bg-transparent"
                        />
                        <input
                          type="text"
                          name="adminPrimaryColor"
                          value={settings.adminPrimaryColor}
                          onChange={handleChange}
                          className="flex-1 px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 font-mono font-bold"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Accent Highlighting
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="color"
                          name="adminAccentColor"
                          value={settings.adminAccentColor}
                          onChange={handleChange}
                          className="w-20 h-20 rounded-2xl cursor-pointer border-none bg-transparent"
                        />
                        <input
                          type="text"
                          name="adminAccentColor"
                          value={settings.adminAccentColor}
                          onChange={handleChange}
                          className="flex-1 px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 font-mono font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h4 className="text-sm font-black mb-4 flex items-center gap-2">
                      <Monitor size={16} /> Theme Preview
                    </h4>
                    <div className="flex gap-4">
                      <div
                        className="w-12 h-12 rounded-xl"
                        style={{ backgroundColor: settings.adminPrimaryColor }}
                      ></div>
                      <div
                        className="w-12 h-12 rounded-xl"
                        style={{ backgroundColor: settings.adminAccentColor }}
                      ></div>
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-2 bg-slate-200 rounded-full w-3/4"></div>
                        <div className="h-2 bg-slate-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ADMIN SETTINGS - NAVIGATION */}
              {activeTab === "admin" && activeSection === "navigation" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-black text-[#0B1120]">
                      Admin Page Visibility
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Select which modules are enabled in the admin sidebar
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {settings.adminPages.map((page) => (
                      <div
                        key={page.id}
                        className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                          page.visible
                            ? "bg-white border-slate-200 shadow-sm"
                            : "bg-slate-50 border-slate-100 opacity-60"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2.5 rounded-xl ${page.visible ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-400"}`}
                          >
                            <Layout size={18} />
                          </div>
                          <div>
                            <p
                              className={`font-bold ${page.visible ? "text-slate-900" : "text-slate-500"}`}
                            >
                              {page.name}
                            </p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                              /admin/{page.id}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            togglePageVisibility(
                              "adminPages",
                              page.id,
                              "visible",
                            )
                          }
                          className={`p-2 rounded-lg transition-colors ${
                            page.visible
                              ? "text-[#FFD60A] hover:bg-yellow-50"
                              : "text-slate-300 hover:bg-slate-200"
                          }`}
                        >
                          {page.visible ? (
                            <Eye size={20} />
                          ) : (
                            <EyeOff size={20} />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SITE SETTINGS - GENERAL */}
              {activeTab === "site" && activeSection === "general" && (
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-[#0B1120]">
                        Site Identity
                      </h3>
                      <p className="text-slate-500 font-medium">
                        Main site information displayed on the public website
                      </p>
                    </div>
                    {/* Admission Toggle Component Integrated Here */}
                    <button
                      onClick={() =>
                        setSettings((p) => ({
                          ...p,
                          admissionsOpen: !p.admissionsOpen,
                        }))
                      }
                      className={`relative px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all duration-300 flex items-center gap-3 ${
                        settings.admissionsOpen
                          ? "bg-[#FFD60A] !text-[#0B1120] shadow-lg shadow-yellow-100"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {settings.admissionsOpen
                        ? "Admissions: Open"
                        : "Admissions: Closed"}
                      <div
                        className={`w-3 h-3 rounded-full ${settings.admissionsOpen ? "bg-green-500 animate-pulse" : "bg-slate-300"}`}
                      />
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                          School Name
                        </label>
                        <input
                          type="text"
                          name="siteName"
                          value={settings.siteName}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                          Favicon (URL)
                        </label>
                        <input
                          type="text"
                          name="favicon"
                          placeholder="/favicon.ico"
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Site Description / SEO Meta
                      </label>
                      <textarea
                        name="siteDescription"
                        rows="3"
                        value={settings.siteDescription}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Marquee Tagline (Active)
                      </label>
                      <input
                        type="text"
                        name="marqueeTagline"
                        value={settings.marqueeTagline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Closed Notice Title
                      </label>
                      <input
                        type="text"
                        name="redirectTitle"
                        value={settings.redirectTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* SITE SETTINGS - APPEARANCE */}
              {activeTab === "site" && activeSection === "appearance" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-black text-[#0B1120]">
                      Public Brand Style
                    </h3>
                    <p className="text-slate-500 font-medium">
                      These colors define the look and feel of your landing
                      pages
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                          Primary Background / Accent
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="color"
                            name="sitePrimaryColor"
                            value={settings.sitePrimaryColor}
                            onChange={handleChange}
                            className="w-16 h-16 rounded-2xl cursor-pointer border-none bg-transparent"
                          />
                          <input
                            type="text"
                            name="sitePrimaryColor"
                            value={settings.sitePrimaryColor}
                            onChange={handleChange}
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 font-mono text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                          Secondary / Text Color
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="color"
                            name="siteSecondaryColor"
                            value={settings.siteSecondaryColor}
                            onChange={handleChange}
                            className="w-16 h-16 rounded-2xl cursor-pointer border-none bg-transparent"
                          />
                          <input
                            type="text"
                            name="siteSecondaryColor"
                            value={settings.siteSecondaryColor}
                            onChange={handleChange}
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 font-mono text-sm"
                          />
                        </div>
                      </div>

                      {/* New Hero Section Settings */}
                      <div className="pt-8 border-t border-slate-100 space-y-8">
                        <div>
                          <h4 className="text-sm font-black text-[#0B1120] uppercase tracking-widest mb-1">
                            Hero Section Styling
                          </h4>
                          <p className="text-xs text-slate-500 font-medium">
                            Customize the main banner appearance across all pages
                          </p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-6">
                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                              Overlay Color & Opacity
                            </label>
                            <div className="flex items-center gap-4 p-2 bg-white rounded-2xl border border-slate-100 shadow-sm">
                              <div className="relative group">
                                <input
                                  type="color"
                                  name="siteHeroOverlayColor"
                                  value={settings.siteHeroOverlayColor}
                                  onChange={handleChange}
                                  className="w-14 h-14 rounded-xl cursor-pointer border-none bg-transparent opacity-0 absolute inset-0 z-10"
                                />
                                <div
                                  className="w-14 h-14 rounded-xl border-2 border-slate-100 shadow-sm transition-transform group-hover:scale-105"
                                  style={{
                                    backgroundColor:
                                      settings.siteHeroOverlayColor,
                                  }}
                                />
                              </div>
                              <div className="flex-1 pr-2">
                                <input
                                  type="text"
                                  name="siteHeroOverlayColor"
                                  value={settings.siteHeroOverlayColor}
                                  onChange={handleChange}
                                  className="w-full font-mono text-sm font-bold text-slate-600 focus:outline-none uppercase"
                                  placeholder="#0B1120"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                              Background Image URL
                            </label>
                            <div className="relative group">
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#FFD60A] transition-colors">
                                <Palette size={18} />
                              </div>
                              <input
                                type="text"
                                name="siteHeroBackgroundImage"
                                value={settings.siteHeroBackgroundImage}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-100 font-medium text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#FFD60A] shadow-sm transition-all"
                                placeholder="https://example.com/banner.jpg"
                              />
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium pl-1">
                              *Leave empty to use the default geometric pattern
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between overflow-hidden relative">
                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                      <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-center">
                          <div className="w-12 h-3 bg-white/20 rounded-full"></div>
                          <div className="flex gap-2">
                            <div
                              className="w-4 h-4 rounded-full shadow-lg border border-white/10"
                              style={{
                                backgroundColor: settings.sitePrimaryColor,
                              }}
                            ></div>
                            <div
                              className="w-4 h-4 rounded-full shadow-lg border border-white/10"
                              style={{
                                backgroundColor: settings.siteSecondaryColor,
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Preview with Overlay */}
                        <div className="space-y-2 relative rounded-xl overflow-hidden p-4 bg-slate-800/50 border border-white/5">
                          {settings.siteHeroBackgroundImage && (
                            <div
                              className="absolute inset-0 bg-cover bg-center opacity-50"
                              style={{
                                backgroundImage: `url(${settings.siteHeroBackgroundImage})`,
                              }}
                            />
                          )}
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundColor: settings.siteHeroOverlayColor,
                              opacity: 0.6,
                            }}
                          />
                          <div className="h-4 bg-white/20 rounded-md w-full relative z-10"></div>
                          <div className="h-4 bg-white/20 rounded-md w-4/5 relative z-10"></div>
                          <div className="h-4 bg-white/20 rounded-md w-2/3 relative z-10"></div>
                        </div>
                      </div>
                      <div className="pt-10 flex justify-center">
                        <button
                          onClick={() => window.open("/", "_blank")}
                          className="px-8 py-3 rounded-full font-black text-[10px] tracking-widest uppercase transition-transform hover:scale-105 shadow-xl"
                          style={{
                            backgroundColor: settings.sitePrimaryColor,
                            color: settings.siteSecondaryColor,
                          }}
                        >
                          PREVIEW SITE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SITE SETTINGS - NAVIGATION */}
              {activeTab === "site" && activeSection === "navigation" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-black text-[#0B1120]">
                      Page Visibility Control
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Manage where each page appears on the main website
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            Page Name
                          </th>
                          <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                            Published
                          </th>
                          <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                            In Navbar
                          </th>
                          <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                            In Footer
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {settings.sitePages.map((page) => (
                          <tr
                            key={page.id}
                            className="group hover:bg-slate-50/50 transition-colors"
                          >
                            <td className="py-5">
                              <span className="font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                                {page.name}
                              </span>
                            </td>
                            <td className="py-5 text-center">
                              <button
                                onClick={() =>
                                  togglePageVisibility(
                                    "sitePages",
                                    page.id,
                                    "visible",
                                  )
                                }
                                className={`p-2 rounded-lg transition-all ${page.visible ? "text-green-500" : "text-slate-300"}`}
                              >
                                {page.visible ? (
                                  <Eye size={18} />
                                ) : (
                                  <EyeOff size={18} />
                                )}
                              </button>
                            </td>
                            <td className="py-5 text-center">
                              <button
                                onClick={() =>
                                  togglePageVisibility(
                                    "sitePages",
                                    page.id,
                                    "inNavbar",
                                  )
                                }
                                className={`p-2 rounded-xl transition-all ${page.inNavbar ? "bg-green-50 text-green-600 shadow-sm border border-green-200" : "bg-red-50 text-red-400 border border-red-100"}`}
                              >
                                {page.inNavbar ? (
                                  <Check size={18} />
                                ) : (
                                  <X size={18} />
                                )}
                              </button>
                            </td>
                            <td className="py-5 text-center">
                              <button
                                onClick={() =>
                                  togglePageVisibility(
                                    "sitePages",
                                    page.id,
                                    "inFooter",
                                  )
                                }
                                className={`p-2 rounded-xl transition-all ${page.inFooter ? "bg-green-50 text-green-600 shadow-sm border border-green-200" : "bg-red-50 text-red-400 border border-red-100"}`}
                              >
                                {page.inFooter ? (
                                  <Check size={18} />
                                ) : (
                                  <X size={18} />
                                )}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SITE SETTINGS - SOCIAL */}
              {activeTab === "site" && activeSection === "social" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-black text-[#0B1120]">
                      Connect & Reach
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Update school contact details and social media links
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-green-500" />{" "}
                        Official Contact Info
                      </h4>
                      <div className="space-y-4">
                        <input
                          type="email"
                          name="contactEmail"
                          placeholder="Email Address"
                          value={settings.contactEmail}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 font-bold"
                        />
                        <input
                          type="text"
                          name="contactPhone"
                          placeholder="Phone Number"
                          value={settings.contactPhone}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 font-bold"
                        />
                        <textarea
                          name="address"
                          placeholder="Physical Address"
                          rows="2"
                          value={settings.address}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 font-bold resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Globe size={12} className="text-[#FFD60A]" /> Social
                        Media Profiles
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        {Object.entries(settings.socialLinks).map(
                          ([platform, url]) => (
                            <div key={platform} className="relative">
                              <input
                                type="text"
                                name={`socialLinks.${platform}`}
                                placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                                value={url}
                                onChange={handleChange}
                                className="w-full pl-6 pr-12 py-4 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium"
                              />
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 capitalize text-[10px] font-black">
                                {platform}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Persistence Notification */}
      <AnimatePresence>
        {showSavedToast && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-10 right-10 z-50 flex items-center gap-4 bg-[#0B1120] text-white px-8 py-4 rounded-2xl shadow-2xl border border-white/10"
          >
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <RefreshCw size={16} className="text-white animate-spin-slow" />
            </div>
            <span className="font-bold tracking-tight">
              Configuration Synchronized
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Settings;
