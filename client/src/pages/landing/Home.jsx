import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Star,
  Shield,
  Zap,
} from "lucide-react";
import { blogsData, newsData } from "../../mock/landingData";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0B1120]">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#0F1629] skew-x-12 translate-x-32 hidden lg:block" />
        <div className="absolute top-1/2 right-[10%] w-96 h-96 bg-yellow-400/20 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Admissions Open 2026-27
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Forging <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Future Leaders
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-medium">
              Join a community committed to academic excellence, innovation, and
              holistic character development. Your journey to greatness starts
              here.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/admissions"
                className="px-8 py-4 bg-yellow-400 text-[#0B1120] rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 hover:scale-105"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent border-2 border-slate-700 text-white rounded-xl font-bold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                Virtual Tour
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-[#0B1120] bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600"
                  >
                    U{i}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-[#0B1120] bg-yellow-400 flex items-center justify-center font-bold text-xs text-[#0B1120]">
                  +2k
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-slate-400 font-medium">
                  Trusted by parents worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-blue-500/20 rounded-[3rem] rotate-3 transform border border-white/10 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-slate-800 rounded-[3rem] -rotate-3 overflow-hidden border border-white/10 shadow-2xl">
              {/* Abstract placeholder content */}
              <div className="absolute inset-0 bg-[#0B1120]/80 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8 p-12 w-full h-full opacity-50">
                  <div className="bg-slate-700/50 rounded-3xl w-full h-4/5 self-end animate-pulse"></div>
                  <div className="bg-slate-700/50 rounded-3xl w-full h-full"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                  <div className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-yellow-400/20">
                    <Star
                      size={48}
                      className="text-[#0B1120]"
                      fill="currentColor"
                    />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-2">
                    #1 Ranked School
                  </h2>
                  <p className="text-slate-400 font-medium">
                    In Academic Performance & Sports
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-20">
            {[
              {
                label: "Students Enrolled",
                value: "2,500+",
                icon: Users,
                color: "bg-blue-600",
              },
              {
                label: "Expert Faculty",
                value: "150+",
                icon: Award,
                color: "bg-rose-500",
              },
              {
                label: "Courses Offered",
                value: "80+",
                icon: BookOpen,
                color: "bg-purple-600",
              },
              {
                label: "Years Impact",
                value: "50+",
                icon: Shield,
                color: "bg-emerald-500",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${stat.color}`}
                >
                  <stat.icon size={28} />
                </div>
                <h3 className="text-4xl font-black text-slate-800 mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase tracking-widest mb-4">
                <span className="w-8 h-[2px] bg-yellow-500"></span>
                Why Choose SMS Hub
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0B1120] leading-tight">
                Education that goes <br />
                beyond text books.
              </h2>
            </div>
            <Link
              to="/about"
              className="px-8 py-4 bg-white border-2 border-[#0B1120] text-[#0B1120] font-bold rounded-xl hover:bg-[#0B1120] hover:text-white transition-all shadow-md"
            >
              More About Us
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                desc: "Rigorous curriculum ensuring top-tier university placements.",
                icon: BookOpen,
              },
              {
                title: "Holistic Growth",
                desc: "Focus on sports, arts, and leadership skills.",
                icon: Zap,
              },
              {
                title: "Safe Environment",
                desc: "24/7 security and a nurturing community for all.",
                icon: Shield,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-[#0B1120] flex items-center justify-center mb-8 group-hover:bg-yellow-400 transition-colors shadow-sm">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-8">
                  {item.desc}
                </p>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#0B1120] group-hover:bg-[#0B1120] group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured News Section */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
                <span className="w-8 h-[2px] bg-blue-400"></span>
                Latest Updates
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Campus <span className="text-yellow-400">News</span> & <br />
                Announcements
              </h2>
            </div>
            <Link
              to="/news"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all"
            >
              View News Feed
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((item, idx) => (
              <Link to={`/news/${item.id}`} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group hover:bg-white/10 transition-all h-full flex flex-col"
                >
                  <div className={`aspect-video ${item.image} relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-white font-black text-[9px] uppercase tracking-widest border border-white/10">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap size={14} /> {item.date}
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium mb-8 flex-1 line-clamp-3">
                      {item.summary}
                    </p>
                    <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-[0.2em]">
                      Explore Detail{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase tracking-widest mb-4">
                <span className="w-8 h-[2px] bg-yellow-500"></span>
                Insightful Articles
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0B1120] leading-tight">
                The Educational <br />
                <span className="text-blue-600">Perspective</span>
              </h2>
            </div>
            <Link
              to="/blogs"
              className="px-8 py-4 bg-[#0B1120] text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              Discover More
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {blogsData.slice(0, 3).map((blog, idx) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative mb-6 overflow-hidden rounded-[2rem]">
                    <div
                      className={`aspect-[4/5] ${blog.color} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}
                    >
                      <BookOpen size={64} className="text-white/20" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      <span className="px-4 py-2 bg-yellow-400 text-black font-black text-[10px] uppercase tracking-widest rounded-lg">
                        Read Insight
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-400">
                      {blog.author.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-slate-500">
                      {blog.author}
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
