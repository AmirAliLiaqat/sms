import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, User, Lock, ArrowRight, Loader2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login(email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen max-h-screen bg-white flex font-sans overflow-hidden">
      {/* Left Panel: Aesthetic Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#0B1120] relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-yellow-400/5 -skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px] -translate-x-32 translate-y-32" />

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
            WELCOME <br />
            <span className="text-yellow-400 text-7xl not-italic">BACK.</span>
          </h1>

          <p className="text-slate-400 text-xl font-medium leading-relaxed">
            The most advanced and comprehensive school management ecosystem.
            Streamline administration, empower faculty, and inspire students.
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

      {/* Right Panel: Clean Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white relative">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-[#0B1120] mb-3">Sign In</h2>
            <p className="text-slate-500 font-medium">
              Enter your credentials to access the admin portal.
            </p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl font-bold text-sm">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Email Address
              </label>
              <div className="relative">
                <User
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none transition-all font-bold text-slate-800"
                  placeholder="admin@smshub.edu"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[10px] font-black uppercase tracking-widest text-yellow-600 hover:text-yellow-700 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none transition-all font-bold text-slate-800"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 bg-[#0B1120] text-white rounded-[1.5rem] font-black text-lg hover:shadow-2xl hover:shadow-slate-200 transition-all flex items-center justify-center gap-3 group active:scale-95 disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>
                    Sign In Now
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
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-yellow-600 font-black hover:text-[#0B1120] transition-colors"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
