import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  pedagogyFeatures,
  majorDisciplines,
} from "../../mock/landing/academicsData";

const Academics = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <section className="bg-[#0B1120] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 -skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6">
              Excellence In Learning
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Academic <span className="text-yellow-400">Pillars</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              A world-class curriculum designed to foster critical thinking,
              creativity, and character in the leaders of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase tracking-widest">
              <span className="w-8 h-[2px] bg-yellow-500"></span>
              Pedagogy
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1120] leading-tight">
              Modern Approach to <br />{" "}
              <span className="text-yellow-500">Classic Learning.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We believe in a student-centric approach where learning goes
              beyond textbooks. Our methodology emphasizes critical thinking,
              problem-solving, and practical application.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {pedagogyFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-green-600" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center relative z-10 group transition-all duration-500 hover:-translate-y-2">
              <div className="w-24 h-24 bg-yellow-400 text-[#0B1120] rounded-3xl flex items-center justify-center mb-8 shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform">
                <Brain size={48} />
              </div>
              <h4 className="text-2xl font-black text-[#0B1120] mb-4">
                Innovation Lab
              </h4>
              <p className="text-slate-400 font-medium text-sm leading-relaxed px-4">
                State-of-the-art facilities designed to encourage exploration
                and scientific inquiry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-[#0B1120] mb-4">
              Major Disciplines
            </h2>
            <p className="text-slate-500 font-medium">
              A diverse range of subjects to discovery every talent.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {majorDisciplines.map((d, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all text-center group"
              >
                <div
                  className={`w-16 h-16 ${d.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}
                >
                  <d.icon size={32} />
                </div>
                <h4 className="text-xl font-black text-[#0B1120]">{d.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="bg-[#0B1120] rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-[100px] -translate-x-32 -translate-y-32" />
          <div className="text-center relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12">
              Dive Deeper Into Our Eco-system
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Class Structure", path: "/class-structure" },
                { label: "Our Faculty", path: "/faculty" },
                { label: "Admissions", path: "/admissions" },
                { label: "Fee Policy", path: "/fee-structure" },
              ].map((l, i) => (
                <Link
                  key={i}
                  to={l.path}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white hover:text-[#0B1120] transition-all flex items-center justify-between group"
                >
                  {l.label}
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
