import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Trophy, Target } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    {
      icon: GraduationCap,
      label: "Total Alumni",
      value: "15,000+",
      color: "bg-blue-600",
    },
    {
      icon: Users,
      label: "Expert Teachers",
      value: "200+",
      color: "bg-yellow-500",
    },
    {
      icon: Trophy,
      label: "National Awards",
      value: "45+",
      color: "bg-purple-600",
    },
    {
      icon: Target,
      label: "University Placement",
      value: "98%",
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Page Header */}
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
              Established 1975
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Legacy of <span className="text-yellow-400">Excellence</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              For over four decades, SMS HUB has been at the forefront of
              educational innovation, shaping the minds of future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 -mt-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: idx * 0.1 },
                },
              }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div
                className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-black text-slate-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />
              <div className="bg-slate-200 rounded-[3rem] aspect-square overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <div className="absolute inset-0 bg-[#0B1120]/10" />
                <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                  <span className="text-slate-500 font-bold uppercase tracking-widest italic">
                    Legacy Image Placeholder
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-yellow-400 p-8 rounded-3xl shadow-xl z-20 max-w-[200px]">
                <p className="text-[#0B1120] font-black text-4xl mb-1">50+</p>
                <p className="text-[#0B1120] font-bold text-xs uppercase tracking-widest">
                  Years of Educational Brilliance
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">
                <span className="w-8 h-[2px] bg-yellow-500"></span>
                Our Philosophy
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0B1120] leading-tight">
                Empowering Minds, <br />
                <span className="text-yellow-500">Inspiring Futures.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                At SMS HUB, we believe that education is not just about academic
                results, but about building character, curiosity, and
                resilience. Our state-of-the-art campus provides the perfect
                environment for students to explore their passions.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                We pride ourselves on our diverse community and inclusive
                atmosphere, where every child is seen as a unique individual
                with the potential to make a difference in the world.
              </p>
              <div className="pt-4">
                <button className="px-8 py-4 bg-[#0B1120] text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center gap-2 group">
                  Read Our History{" "}
                  <Target
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
