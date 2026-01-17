import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Lock,
  Mail,
  ArrowRight,
  Loader2,
  Phone,
} from "lucide-react";
import * as api from "../../services/api";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "Admin", // Default role for testing
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.register(formData);
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen max-h-screen bg-white flex font-sans overflow-hidden">
      {/* Left Panel: Clean Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:px-24 bg-white relative overflow-y-auto">
        <div className="w-full max-w-md">

          <div className="mb-8 lg:hidden">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0B1120] transition-colors group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="font-bold uppercase tracking-widest text-xs">
                Go to Home
              </span>
            </Link>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-black text-[#0B1120] mb-3">
              Create Account
            </h2>
            <p className="text-slate-500 font-medium">
              Join us today to manage your institution with ease.
            </p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl font-bold text-sm">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none transition-all font-bold text-slate-800"
                  placeholder="e.g. Johnathan Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Work Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none transition-all font-bold text-slate-800"
                  placeholder="john@smshub.edu"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none transition-all font-bold text-slate-800"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Secure Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none transition-all font-bold text-slate-800"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-[#0B1120] text-white rounded-[1.5rem] font-black text-lg hover:shadow-2xl hover:shadow-slate-200 transition-all flex items-center justify-center gap-3 group active:scale-95 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>
                    Register Now
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-yellow-600 font-black hover:text-[#0B1120] transition-colors"
              >
                Sign In here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel: Aesthetic Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#0B1120] relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-yellow-400/5 skew-x-12 -translate-x-32" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px] translate-x-32 translate-y-32" />

        <div className="relative z-10 max-w-lg">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-12 text-yellow-400 hover:text-yellow-300 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-bold uppercase tracking-widest text-xs">
              Back to Website
            </span>
          </Link>

          <div className="w-20 h-20 bg-yellow-400 rounded-[2rem] flex items-center justify-center text-[#0B1120] font-black text-4xl mb-8 shadow-2xl shadow-yellow-400/20">
            S
          </div>

          <h1 className="text-6xl font-black text-white leading-tight mb-6 tracking-tighter">
            START YOUR <br />
            <span className="text-yellow-400 text-7xl not-italic">
              JOURNEY.
            </span>
          </h1>

          <p className="text-slate-400 text-xl font-medium leading-relaxed">
            Join our modern ecosystem for school management. Efficiency,
            transparency, and excellence in one place.
          </p>

          <div className="mt-20 grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-black text-white mb-1">500+</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                Active Schools
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">100k+</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                Student Base
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
