import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  ArrowLeft,
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";

const FacultyProfile = () => {
  const { id } = useParams();

  // Mock data matching Faculty.jsx
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      role: "Principal",
      subject: "Educational Leadership",
      bio: "Ph.D. in Education with 20+ years of institutional management experience. Dr. Wilson has led several international schools to academic excellence and is a frequent speaker at educational summits worldwide.",
      longBio:
        "Dr. Sarah Wilson is a visionary leader in the field of education. With a doctorate from Stanford University, she has dedicated her career to creating environments where both students and teachers can thrive. Under her leadership, SMS HUB has seen a 40% increase in academic performance and has established several global partnerships. She is passionate about character building and holistic student development, ensuring that our graduates are not just academically bright but also socially responsible citizens.",
      experience: "22 Years",
      education: "Ph.D. in Educational Leadership, Stanford University",
      specialization: [
        "Institutional Management",
        "Curriculum Strategy",
        "Public Speaking",
      ],
      email: "s.wilson@smshub.edu",
      phone: "+1 (555) 123-4567",
      color: "blue",
    },
    {
      id: 2,
      name: "Prof. Johnathan Doe",
      role: "Head of Sciences",
      subject: "Physics & Astronomy",
      bio: "Passionate about research and fostering scientific curiosity in young minds.",
      longBio:
        "Professor Johnathan Doe brings the wonders of the cosmos to the classroom. With a background in Astrophysics and years of research at national laboratories, he specializes in making complex scientific concepts accessible to students. His hands-on approach to experimental physics has inspired many students to pursue careers in STEM.",
      experience: "15 Years",
      education: "M.Sc. in Astrophysics, MIT",
      specialization: [
        "Quantum Mechanics",
        "Observational Astronomy",
        "Robotics",
      ],
      email: "j.doe@smshub.edu",
      phone: "+1 (555) 234-5678",
      color: "yellow",
    },
    // Add more if needed, but for now we search for the specific ID
  ];

  const member =
    facultyMembers.find((m) => m.id === parseInt(id)) || facultyMembers[0];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20">
      {/* Header Profile Section */}
      <section className="bg-[#0B1120] pt-32 pb-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 -skew-x-12 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px] -translate-x-32 translate-y-32" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/faculty"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold uppercase tracking-widest text-xs mb-12 group transition-all"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Faculty Board
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] bg-slate-800 border-4 border-white/10 overflow-hidden relative group shrink-0 shadow-2xl"
            >
              <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                <span className="text-white text-7xl font-black">
                  {member.name.charAt(0)}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6">
                {member.role}
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tighter italic">
                {member.name.toUpperCase()}
              </h1>
              <p className="text-xl text-slate-400 font-medium max-w-2xl">
                {member.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-8">
                <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                  <Mail size={16} className="text-yellow-400" />
                  {member.email}
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                  <Phone size={16} className="text-yellow-400" />
                  {member.phone}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-24 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Quick Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <h3 className="text-[#0B1120] font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                Faculty Highlights
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                      Experience
                    </div>
                    <div className="text-[#0B1120] font-black">
                      {member.experience}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                      Education
                    </div>
                    <div className="text-[#0B1120] font-black text-sm">
                      {member.education.split(",")[0]}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                      Status
                    </div>
                    <div className="text-[#0B1120] font-black">
                      Senior Faculty
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B1120] p-8 rounded-[2.5rem] shadow-2xl shadow-slate-900/10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
              <h3 className="text-white font-black uppercase tracking-widest text-xs mb-6 relative z-10">
                Connect
              </h3>
              <div className="flex gap-4 relative z-10">
                <button className="flex-1 py-4 bg-white/10 hover:bg-yellow-400 hover:text-[#0B1120] rounded-2xl text-white transition-all flex items-center justify-center gap-2 font-bold border border-white/10">
                  <Linkedin size={18} /> LinkedIn
                </button>
                <button className="flex-1 py-4 bg-white/10 hover:bg-yellow-400 hover:text-[#0B1120] rounded-2xl text-white transition-all flex items-center justify-center gap-2 font-bold border border-white/10">
                  <ExternalLink size={18} /> Portfolio
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[2px] bg-yellow-400" />
                <h3 className="text-[#0B1120] font-black uppercase tracking-widest text-xs">
                  Biography & Vision
                </h3>
              </div>

              <h2 className="text-4xl font-black text-[#0B1120] mb-8 leading-tight">
                Shaping the <span className="text-yellow-500">Nex-Gen</span>{" "}
                <br />
                of Global Citizens.
              </h2>

              <div className="space-y-6 text-slate-500 font-medium text-lg leading-relaxed">
                <p>{member.longBio || member.bio}</p>
                <p>
                  As an educator at SMS HUB, I focus on integrating technology
                  and critical thinking into our daily curriculum. I believe
                  that every student has a unique potential that needs the right
                  environment to flourish.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h4 className="flex items-center gap-2 text-[#0B1120] font-black text-sm uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">
                    <Award size={18} className="text-yellow-500" />
                    Specializations
                  </h4>
                  <ul className="space-y-4">
                    {(
                      member.specialization || [
                        "Curriculum Design",
                        "Student Mentoring",
                      ]
                    ).map((spec, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700 font-bold"
                      >
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-[#0B1120] font-black text-sm uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">
                    <BookOpen size={18} className="text-yellow-500" />
                    Academic Interests
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-700 font-bold">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      Active Learning Pedagogies
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-bold">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      Digital Literacy in Education
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
