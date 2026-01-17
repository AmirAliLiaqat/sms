import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, ArrowRight, Loader2, KeyRound } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Placeholder API call simulation
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="h-screen max-h-screen bg-white flex font-sans overflow-hidden">
      {/* Left Panel: Aesthetic Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#0B1120] relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-yellow-400/5 -skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px] -translate-x-32 translate-y-32" />

        <div className="relative z-10 max-w-lg">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 mb-12 text-yellow-400 hover:text-yellow-300 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-bold uppercase tracking-widest text-xs">
              Back to Login
            </span>
          </Link>

          <div className="w-20 h-20 bg-yellow-400 rounded-[2rem] flex items-center justify-center text-[#0B1120] font-black text-4xl mb-8 shadow-2xl shadow-yellow-400/20">
            S
          </div>

          <h1 className="text-6xl font-black text-white leading-tight mb-6 tracking-tighter">
            RECOVER <br />
            <span className="text-yellow-400 text-7xl not-italic">ACCESS.</span>
          </h1>

          <p className="text-slate-400 text-xl font-medium leading-relaxed">
            Security is our priority. Follow the steps to safely reset your
            password and regain control of your account.
          </p>
        </div>
      </div>

      {/* Right Panel: Clean Reset Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white relative">
        <div className="w-full max-w-md">
          {!submitted ? (
            <>
              <div className="mb-12">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800 mb-6">
                  <KeyRound size={24} />
                </div>
                <h2 className="text-4xl font-black text-[#0B1120] mb-3">
                  Forgot Password?
                </h2>
                <p className="text-slate-500 font-medium">
                  No worries! Enter your registered email address and we'll send
                  you recovery instructions.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
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
                        Send Reset Link
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
              <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Mail size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-[#0B1120] mb-3">
                  Email Sent!
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  We've sent recovery instructions to <br />
                  <span className="font-bold text-[#0B1120]">
                    {email}
                  </span>. <br />
                  Please check your inbox (and spam folder).
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#0B1120] hover:text-yellow-600 transition-colors"
                >
                  <ArrowLeft size={16} /> Back to Sign In
                </Link>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="block w-full text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
              >
                Didn't receive email? Try again
              </button>
            </div>
          )}

          {!submitted && (
            <div className="mt-12 text-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-[#0B1120] transition-colors"
              >
                <ArrowLeft size={16} /> Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
