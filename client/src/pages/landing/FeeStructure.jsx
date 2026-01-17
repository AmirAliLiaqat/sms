import React from "react";
import { motion } from "framer-motion";
import { Download, Info, CreditCard, ShieldCheck, Wallet } from "lucide-react";

const FeeStructure = () => {
  const feeData = [
    {
      grade: "Kindergarten",
      admission: "$500",
      tuition: "$2,500",
      misc: "$300",
      total: "$3,300",
    },
    {
      grade: "Primary (1-5)",
      admission: "$750",
      tuition: "$3,200",
      misc: "$450",
      total: "$4,400",
    },
    {
      grade: "Middle (6-8)",
      admission: "$750",
      tuition: "$4,000",
      misc: "$600",
      total: "$5,350",
    },
    {
      grade: "Secondary (9-10)",
      admission: "$1,000",
      tuition: "$5,500",
      misc: "$800",
      total: "$7,300",
    },
    {
      grade: "Senior Secondary",
      admission: "$1,000",
      tuition: "$6,800",
      misc: "$1,200",
      total: "$9,000",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <section className="bg-[#0B1120] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-yellow-400/5 skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6">
              Invest In Future
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Fee <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Transparent financial structure designed to provide world-class
              facilities and education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Action Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Wallet size={24} />
              </div>
              <div>
                <h3 className="font-black text-[#0B1120]">Annual Fee Table</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  Academic Year 2026-27
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-[#0B1120] flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              <Download size={18} /> Download Fee PDF
            </button>
          </div>

          {/* Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">
                      Grade / Class
                    </th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">
                      Admission Fee
                    </th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">
                      Tuition Fee
                    </th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">
                      Misc/Lab
                    </th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">
                      Grand Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {feeData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-yellow-400/5 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <span className="font-black text-slate-800 text-lg">
                          {row.grade}
                        </span>
                      </td>
                      <td className="px-8 py-6 font-bold text-slate-500">
                        {row.admission}
                      </td>
                      <td className="px-8 py-6 font-bold text-slate-500">
                        {row.tuition}
                      </td>
                      <td className="px-8 py-6 font-bold text-slate-500">
                        {row.misc}
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-4 py-2 rounded-xl bg-[#0B1120] text-white font-black group-hover:bg-yellow-400 group-hover:text-[#0B1120] transition-colors">
                          {row.total}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Important Info Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex gap-6 items-start"
            >
              <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Info size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#0B1120] mb-4">
                  Payment Schedule
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-500 font-medium italic">
                    <ShieldCheck size={16} className="text-green-500" />{" "}
                    Installment 1: At Admission
                  </li>
                  <li className="flex items-center gap-2 text-slate-500 font-medium italic">
                    <ShieldCheck size={16} className="text-green-500" />{" "}
                    Installment 2: October 15th
                  </li>
                  <li className="flex items-center gap-2 text-slate-500 font-medium italic">
                    <ShieldCheck size={16} className="text-green-500" />{" "}
                    Installment 3: January 15th
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-600 p-10 rounded-[2.5rem] shadow-xl shadow-blue-200 flex gap-6 items-start text-white"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CreditCard size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black mb-4">Scholarships</h4>
                <p className="font-medium opacity-90 leading-relaxed">
                  We offer up to 50% merit-based scholarships for exceptionally
                  performing students in academic and sports departments.
                </p>
                <button className="mt-6 text-sm font-black uppercase tracking-widest border-b-2 border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-all">
                  Check Eligibility
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeeStructure;
