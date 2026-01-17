import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Music,
  Users,
  Trophy,
  Coffee,
  Library,
  ChevronRight,
  Play,
} from "lucide-react";

const CampusLife = () => {
  const categories = [
    { title: "Student Clubs", count: "15+", icon: Users, color: "bg-blue-500" },
    {
      title: "Sports & Athletics",
      count: "12 Teams",
      icon: Trophy,
      color: "bg-amber-500",
    },
    {
      title: "Arts & Culture",
      count: "8 Groups",
      icon: Music,
      color: "bg-rose-500",
    },
    {
      title: "Modern Facilities",
      count: "25+ Areas",
      icon: Library,
      color: "bg-emerald-500",
    },
  ];

  const activities = [
    {
      title: "Annual Cultural Fest",
      image: "https://images.unsplash.com/photo-1514525253361-bee8d48700ef",
      date: "Spring 2026",
      tag: "Cultural",
    },
    {
      title: "Science & Tech Expo",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
      date: "Ongoing",
      tag: "Academic",
    },
    {
      title: "Sports Championship",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77",
      date: "Last Month",
      tag: "Sports",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Visual Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0B1120]">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
          alt="Campus Life"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-400 text-[#0B1120] font-black text-xs uppercase tracking-[0.2em] mb-8">
              Experience Excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
              COMMUNITY & <span className="text-yellow-400">CULTURE</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-300 font-medium leading-relaxed mb-12">
              Beyond the classroom, our campus is a vibrant ecosystem where
              friendships are forged, talents are discovered, and leaders are
              made.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 bg-white text-[#0B1120] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all shadow-2xl">
                Join a Club
              </button>
              <button className="flex items-center gap-3 px-8 py-5 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 backdrop-blur-md transition-all border border-white/20">
                <Play size={18} className="fill-white" />
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-20">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-12 transition-transform`}
                >
                  <cat.icon size={24} />
                </div>
                <h3 className="text-2xl font-black text-[#0B1120] mb-2">
                  {cat.title}
                </h3>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  {cat.count}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-[#0B1120] mb-6 leading-tight">
                  Where Innovation Meets{" "}
                  <span className="text-blue-600 underline decoration-yellow-400 underline-offset-8">
                    Collaboration
                  </span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  Our campus is designed to inspire. From high-tech maker spaces
                  to quiet collaborative hubs, every corner represents our
                  commitment to modern education and student well-being.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-3xl font-black text-[#0B1120]">98%</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Student Satisfaction
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-black text-[#0B1120]">50+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Weekly Activities
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#0B1120] group">
                Explore Our Facilities
                <ChevronRight
                  size={18}
                  className="text-yellow-500 group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-[3rem] rotate-3 translate-x-4 translate-y-4" />
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Innovation Hub"
                className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Gallery */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-black text-[#0B1120] mb-4">
              Latest Highlights
            </h2>
            <p className="text-slate-500 font-medium">
              Capturing moments of Joy, Discovery, and Victory.
            </p>
          </div>
          <button className="px-8 py-4 bg-[#0B1120] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
            View Gallery
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] mb-6 shadow-xl aspect-square">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-[#0B1120] shadow-xl">
                    {act.tag}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
                    {act.date}
                  </p>
                  <h4 className="text-xl font-black text-white">{act.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
