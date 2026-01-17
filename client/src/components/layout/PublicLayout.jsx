import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PublicLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Faculty", path: "/our-faculty" },
    { name: "Admissions", path: "/admissions" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-[#FFD60A] selection:text-[#0B1120]">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full bg-[#0B1120]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-[#0B1120] font-bold text-xl shadow-lg shadow-yellow-400/20 group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <div>
              <h1 className="font-bold text-xl text-white tracking-wide">
                SMS HUB
              </h1>
              <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase group-hover:text-yellow-400 transition-colors">
                Education Portal
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 relative py-2 ${
                  location.pathname === link.path
                    ? "text-yellow-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="px-6 py-2.5 rounded-xl font-bold text-white hover:text-yellow-400 transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/admissions"
              className="px-6 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#0B1120] font-bold shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              Enquire Now
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 bg-[#0B1120]"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-bold uppercase tracking-wide py-2 border-b border-white/5 ${
                      location.pathname === link.path
                        ? "text-yellow-400"
                        : "text-slate-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center px-6 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5"
                  >
                    Student Login
                  </Link>
                  <Link
                    to="/admissions"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center px-6 py-3 rounded-xl bg-yellow-400 text-[#0B1120] font-bold"
                  >
                    Apply for Admission
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1120] text-slate-300 pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-[#0B1120] font-bold text-xl">
                  S
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white tracking-wide">
                    SMS HUB
                  </h3>
                  <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                    Excellence in Education
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Empowering the next generation of leaders through world-class
                education, innovation, and holistic development.
              </p>
            </div>

            {/* Section 1: School Hub */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-6">
                School Hub
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Mission & Vision", path: "/vision" },
                  { name: "Management", path: "/management" },
                  { name: "Campus Life", path: "/campus-life" },
                  { name: "Photo Gallery", path: "/gallery" },
                  { name: "News & Updates", path: "/news" },
                  { name: "Contact Us", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-yellow-400 transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2: Academic Life */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-6">
                Academic Life
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  { name: "Admissions 2026", path: "/admissions" },
                  { name: "Academic Calendar", path: "/calendar" },
                  { name: "Class Structure", path: "/class-structure" },
                  { name: "Fee Information", path: "/fee-structure" },
                  { name: "Our Faculty", path: "/our-faculty" },
                  { name: "Student Blogs", path: "/blogs" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-yellow-400 transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-6">
                Get in Touch
              </h4>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">📍</span>
                  123 Education Lane, Knowledge City,
                  <br /> ST 12345, United States
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">📞</span>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">✉️</span>
                  admissions@smshub.edu
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} SMS HUB Control. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
