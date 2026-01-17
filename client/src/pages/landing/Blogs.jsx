import React from "react";
import { motion } from "framer-motion";
import { User, Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogsData } from "../../mock/landing/blogsData";

const Blogs = () => {
  const blogs = blogsData;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <section className="bg-[#0B1120] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-yellow-400/5 -skew-x-12 -translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6">
              Insights & Perspectives
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              The <span className="text-yellow-400">Knowledge</span> Hub
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Thought leadership from our distinguished faculty on the future of
              education and student development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="h-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.1 },
                  },
                }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 group flex flex-col h-full"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 z-10">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white font-bold text-[10px] uppercase tracking-widest border border-white/20">
                      Featured
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                      <Calendar size={14} className="text-yellow-500" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                      <Clock size={14} className="text-yellow-500" />
                      {blog.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-yellow-600 transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 flex-1">
                    {blog.summary}
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <User size={14} className="text-slate-400" />
                      </div>
                      <span className="text-slate-800 font-bold text-xs">
                        {blog.author}
                      </span>
                    </div>
                    <button className="text-yellow-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group/btn">
                      Read Blog{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 bg-[#0B1120] rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px] translate-x-32 -translate-y-32" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto relative z-10"
          >
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              Subscribe to our{" "}
              <span className="text-yellow-400">Newsletter</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium mb-12">
              Get the latest blog posts and school updates delivered directly to
              your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                className="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-400 transition-all font-bold"
                placeholder="Your email address"
              />
              <button className="px-10 py-5 bg-yellow-400 text-[#0B1120] rounded-2xl font-black text-lg hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
