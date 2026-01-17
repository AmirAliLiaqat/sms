import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Compass,
  Sparkles,
  Lightbulb,
  Users,
  Globe,
} from "lucide-react";

const Vision = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <section className="bg-[#0B1120] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-yellow-400/5 skew-x-12 -translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6">
              Purpose & Direction
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Our <span className="text-yellow-400">Philosophy</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Discover the core values and aspirations that drive our commitment
              to excellence in education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Target size={32} />
              </div>
              <h2 className="text-4xl font-black text-[#0B1120] mb-6">
                Our Vision
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                To be a global leader in education, fostering a community of
                lifelong learners who are innovative, compassionate, and capable
                of leading positive change in the world.
              </p>
              <div className="mt-8 pt-8 border-t border-slate-50">
                <p className="text-slate-400 italic font-medium">
                  "We envision a future where every student discovers their
                  unique potential and contributes meaningfully to society."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="bg-[#0B1120] p-12 rounded-[3rem] shadow-2xl shadow-slate-900/20 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-yellow-400 text-[#0B1120] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Compass size={32} />
              </div>
              <h2 className="text-4xl font-black text-white mb-6">
                Our Mission
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    icon: Sparkles,
                    text: "Provide a rigorous and holistic academic curriculum.",
                  },
                  {
                    icon: Lightbulb,
                    text: "Cultivate critical thinking and creative leadership.",
                  },
                  {
                    icon: Users,
                    text: "Nurture inclusive and diverse learning environments.",
                  },
                  {
                    icon: Globe,
                    text: "Empower students with a global perspective.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group/item">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-yellow-400 group-hover/item:text-[#0B1120] transition-colors">
                      <item.icon size={16} />
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-[#0B1120] mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-500 font-medium">
              The pillars upon which our institution stands.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", icon: Shield },
              { title: "Innovation", icon: Zap },
              { title: "Excellence", icon: Award },
              { title: "Community", icon: Heart },
            ].map((v, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-yellow-400/10 hover:border-yellow-400/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#0B1120] flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <v.icon size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-800">{v.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal imports for values section
import { Shield, Zap, Award, Heart } from "lucide-react";

export default Vision;
