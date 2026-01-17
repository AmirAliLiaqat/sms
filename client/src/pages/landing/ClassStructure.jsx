import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Star,
  GraduationCap,
  Microscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ClassStructure = () => {
  const stages = [
    {
      title: "Foundation Stage",
      grade: "Nursery - Kindergarten",
      desc: "Play-based learning focusing on cognitive and emotional development.",
      features: [
        "Early Literacy",
        "Motor Skill Development",
        "Sensory Activities",
      ],
      icon: Star,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Primary School",
      grade: "Grades 1 - 5",
      desc: "Building strong foundations in core academic subjects and social values.",
      features: [
        "Holistic Curriculum",
        "Language Learning",
        "STEM Introduction",
      ],
      icon: BookOpen,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Middle School",
      grade: "Grades 6 - 8",
      desc: "Encouraging critical thinking, exploration, and self-discovery.",
      features: [
        "Inquiry-based Projects",
        "Specialized Subjects",
        "Life Skills Training",
      ],
      icon: Microscope,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Senior Secondary",
      grade: "Grades 9 - 12",
      desc: "Intensive academic preparation and career-oriented stream selection.",
      features: [
        "Competitive Exam Coaching",
        "Career Counseling",
        "Leadership Programs",
      ],
      icon: GraduationCap,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6">
              Educational Roadmap
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Academic <span className="text-yellow-400">Journey</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              A structured path designed to nurture every student's potential
              from foundation to future success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stages Grid */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="space-y-12">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: idx % 2 === 0 ? -30 : 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 group flex flex-col lg:flex-row gap-12 items-center"
            >
              {/* Icon & Label */}
              <div
                className={`w-full lg:w-1/4 flex flex-col items-center text-center`}
              >
                <div
                  className={`w-28 h-28 ${stage.bgColor} ${stage.color} rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <stage.icon size={48} />
                </div>
                <span className="text-slate-400 font-black text-sm uppercase tracking-[0.2em]">
                  {stage.grade}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-black text-[#0B1120]">
                  {stage.title}
                </h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  {stage.desc}
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  {stage.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-yellow-500 flex-shrink-0"
                      />
                      <span className="text-slate-600 font-bold text-sm tracking-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="lg:w-auto w-full">
                <button className="w-full lg:w-auto px-8 py-4 bg-slate-50 text-[#0B1120] rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#0B1120] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-slate-100">
                  Curriculum{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="pb-32 container mx-auto px-6">
        <div className="bg-[#0B1120] rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-[100px] -translate-x-32 -translate-y-32" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-8 leading-tight">
                Integrated Learning <br />
                <span className="text-yellow-400">Environment.</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed mb-10">
                Our class structure is built on the philosophy of progressive
                complexity. As students transition from stage to stage, the
                curriculum adapts to their developing cognitive abilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm">
                  International Standards
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm">
                  Digital Classrooms
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm">
                  Expert Faculty
                </div>
              </div>
            </div>
            <div className="bg-yellow-400 p-8 rounded-[2.5rem] shadow-2xl transform lg:rotate-3">
              <h4 className="text-[#0B1120] font-black text-2xl mb-4">
                Weekly Schedule
              </h4>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-white/40 p-4 rounded-xl"
                  >
                    <span className="font-bold text-[#0B1120]">Period {i}</span>
                    <span className="font-medium text-[#0B1120]/60">
                      Subject Specific
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassStructure;
