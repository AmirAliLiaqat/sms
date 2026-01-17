import React from "react";
import { motion } from "framer-motion";
import { Quote, Linkedin, Mail, ArrowRight, User } from "lucide-react";

const Management = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <section className="bg-[#0B1120] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-yellow-400/5 -skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6">
              Leadership & Governance
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              The <span className="text-yellow-400">Visionaries</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Guided by a team of distinguished professionals committed to
              educational transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="bg-slate-200 rounded-[3.5rem] aspect-[4/5] overflow-hidden shadow-2xl relative z-10 border-8 border-white group">
              <div className="absolute inset-0 bg-[#0B1120]/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                <User className="text-slate-400" size={120} />
              </div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl z-20">
                <h4 className="text-2xl font-black text-[#0B1120]">
                  Mr. Alexander Sterling
                </h4>
                <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest">
                  Chairman & Founder
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-10"
          >
            <div className="w-16 h-16 bg-yellow-400 text-[#0B1120] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
              <Quote size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1120] leading-tight">
              Lighting the fire of <br />{" "}
              <span className="text-yellow-500">Innovation.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
              <p>
                "Education is not merely the filling of a pail, but the lighting
                of a fire. At SMS HUB, we strive to ignite that spark of
                curiosity and innovation in every student."
              </p>
              <p>
                Our management team is committed to providing the resources,
                infrastructure, and guidance necessary to build a world-class
                learning environment. We focus on holistic development, ensuring
                that our students not only excel academically but also grow into
                responsible global citizens.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-6">
              <button className="px-8 py-4 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group">
                Read Full Message{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 hover:text-[#0B1120] hover:bg-yellow-400/20 transition-all flex items-center justify-center">
                  <Linkedin size={20} />
                </button>
                <button className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 hover:text-[#0B1120] hover:bg-yellow-400/20 transition-all flex items-center justify-center">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-[#0B1120] mb-4">
              Board of Directors
            </h2>
            <p className="text-slate-500 font-medium">
              Distinguished leaders shaping the future of education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: i * 0.1 },
                  },
                }}
                className="group relative"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] bg-slate-100 overflow-hidden border-2 border-transparent group-hover:border-yellow-400 transition-all duration-500 mb-6">
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <User className="text-slate-300" size={60} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="flex gap-4">
                      <Linkedin
                        className="text-yellow-400 cursor-pointer"
                        size={20}
                      />
                      <Mail className="text-white cursor-pointer" size={20} />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-black text-slate-800 mb-1">
                    Director Name {i}
                  </h4>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                    Executive Board Member
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
