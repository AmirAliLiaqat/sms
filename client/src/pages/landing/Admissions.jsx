import { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Calendar,
  GraduationCap,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

const Admissions = () => {
  const [step, setStep] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Page Header */}
      <section className="bg-[#0B1120] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 -skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6">
              Academic Year 2026-2027
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Start Your <span className="text-yellow-400">Journey</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Thank you for your interest. Please complete the form below to
              initiate the admission process. Our team will contact you within
              24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-16 pb-16 relative z-30">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-[#0B1120] p-8 md:p-12 pb-20">
            <div className="flex justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full" />
              <div
                className="absolute top-1/2 left-0 h-1 bg-yellow-400 -translate-y-1/2 rounded-full transition-all duration-500"
                style={{
                  width: step === 1 ? "0%" : step === 2 ? "50%" : "100%",
                }}
              />

              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center gap-3"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 border-4 border-[#0B1120] ${
                      step >= i
                        ? "bg-yellow-400 text-[#0B1120] scale-110"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {step > i ? <CheckCircle size={20} /> : i}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest ${step >= i ? "text-yellow-400" : "text-slate-500"}`}
                  >
                    {i === 1
                      ? "Student Info"
                      : i === 2
                        ? "Parent Details"
                        : "Review"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Body */}
          <div className="p-8 md:p-12 -mt-10 bg-white rounded-t-[2.5rem] relative z-20">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">
                        First Name
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          size={20}
                        />
                        <input
                          type="text"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none font-bold text-slate-800 transition-all placeholder:text-slate-300"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">
                        Last Name
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          size={20}
                        />
                        <input
                          type="text"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none font-bold text-slate-800 transition-all placeholder:text-slate-300"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <Calendar
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          size={20}
                        />
                        <input
                          type="date"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none font-bold text-slate-800 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">
                        Grade Applying For
                      </label>
                      <div className="relative">
                        <GraduationCap
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          size={20}
                        />
                        <select className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none font-bold text-slate-800 transition-all appearance-none">
                          <option>Select Grade</option>
                          <option>Primary - Grade 1</option>
                          <option>Primary - Grade 2</option>
                          <option>Middle - Grade 6</option>
                          <option>Secondary - Grade 11</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none pr-2">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">
                        Father's Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-400 outline-none font-bold text-slate-800 transition-all"
                        placeholder="e.g. Robert Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">
                        Mother's Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-400 outline-none font-bold text-slate-800 transition-all"
                        placeholder="e.g. Sarah Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">
                        Contact Email
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          size={20}
                        />
                        <input
                          type="email"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-400 outline-none font-bold text-slate-800 transition-all"
                          placeholder="parent@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          size={20}
                        />
                        <input
                          type="tel"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-400 outline-none font-bold text-slate-800 transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-24 h-24 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 mb-4">
                    Application Ready!
                  </h2>
                  <p className="text-slate-500 font-medium max-w-md mx-auto mb-8">
                    You have successfully completed the initial registration.
                    Please review your details before final submission.
                  </p>
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-left max-w-lg mx-auto space-y-4">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500 font-bold text-sm">
                        Student Name
                      </span>
                      <span className="text-slate-800 font-bold">John Doe</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500 font-bold text-sm">
                        Grade Applying
                      </span>
                      <span className="text-slate-800 font-bold">Grade 6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-bold text-sm">
                        Parent Email
                      </span>
                      <span className="text-slate-800 font-bold">
                        parent@example.com
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between pt-8 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="px-8 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all flex items-center gap-2"
                >
                  <ArrowLeft size={18} /> Back
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-8 py-3 rounded-xl bg-[#0B1120] text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center gap-2"
                  >
                    Next Step <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Application Submitted!");
                    }}
                    className="px-10 py-4 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-all shadow-xl shadow-green-200 hover:shadow-green-300 hover:-translate-y-1"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
