import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Clock, Phone, Linkedin, Search } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      role: "Principal",
      subject: "Educational Leadership",
      bio: "Ph.D. in Education with 20+ years of institutional management experience.",
      color: "blue",
    },
    {
      id: 2,
      name: "Prof. Johnathan Doe",
      role: "Head of Sciences",
      subject: "Physics & Astronomy",
      bio: "Passionate about research and fostering scientific curiosity in young minds.",
      color: "yellow",
    },
    {
      id: 3,
      name: "Mrs. Emily Richardson",
      role: "Senior Lead",
      subject: "Higher Mathematics",
      bio: "Award-winning educator specializing in advanced calculus and statistics.",
      color: "purple",
    },
    {
      id: 4,
      name: "Mr. Robert Sterling",
      role: "Dean of Arts",
      subject: "Modern Literature",
      bio: "Published author and critic focusing on contemporary creative writing.",
      color: "emerald",
    },
    {
      id: 5,
      name: "Ms. Anita Varma",
      role: "Director of Sports",
      subject: "Athletic Excellence",
      bio: "Former national athlete dedicated to holistic student wellness and fitness.",
      color: "rose",
    },
    {
      id: 6,
      name: "Dr. Michael Zhang",
      role: "Tech Strategist",
      subject: "Artificial Intelligence",
      bio: "Leading our digital transformation and STEM innovation programs.",
      color: "indigo",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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
              Academic Leadership
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              World Class <span className="text-yellow-400">Mentors</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Guided by experienced educators and industry leaders, our students
              receive the highest quality of mentorship and academic support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter/Search Bar */}
      <section className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center gap-6">
          <div className="relative flex-1 w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-yellow-400 outline-none font-bold text-slate-800 transition-all shadow-sm"
              placeholder="Search by name or department..."
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-4 bg-[#0B1120] text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
              Filter
            </button>
            <button className="flex-1 md:flex-none px-8 py-4 bg-slate-100 text-[#0B1120] rounded-2xl font-bold hover:bg-slate-200 transition-all">
              All Departments
            </button>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {facultyMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } },
              }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Photo Placeholder */}
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                  <User className="text-slate-300" size={80} />
                </div>
                <div className="absolute bottom-6 left-6 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-xl bg-white text-[#0B1120] flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-lg">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-white text-[#0B1120] flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-lg">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 mb-1 group-hover:text-yellow-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-700 text-[10px] font-black uppercase tracking-widest rounded-lg mb-6 border border-yellow-400/20">
                  {member.subject}
                </div>

                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                  {member.bio}
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-slate-50">
                  <Link
                    to={`/faculty/${member.id}`}
                    className="text-xs font-bold uppercase tracking-widest text-[#0B1120] flex items-center gap-2 group/btn"
                  >
                    View Profile
                    <span className="w-6 h-6 rounded-full bg-[#0B1120]/5 flex items-center justify-center group-hover/btn:bg-yellow-400 transition-colors">
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="container mx-auto px-6 pb-32">
        <div className="bg-[#0B1120] rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px] -translate-x-32 -translate-y-32" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Want to join our <br />{" "}
              <span className="text-yellow-400">Elite Faculty?</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium mb-12">
              We are always looking for passionate educators to join our growing
              team. If you're ready to make an impact, we want to hear from you.
            </p>
            <button className="px-12 py-5 bg-yellow-400 text-[#0B1120] rounded-2xl font-black text-lg hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 hover:scale-105 active:scale-95">
              View Open Positions
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Internal Import for icons used but not imported
import { User, ArrowRight } from "lucide-react";

export default Faculty;
