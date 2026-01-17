import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { newsData } from "../../mock/landing/newsData";

const News = () => {
  const newsItems = newsData;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <section className="bg-[#0B1120] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-400/5 skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
              Latest Updates
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Campus <span className="text-yellow-400">News</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Stay updated with the latest happenings, achievements, and
              upcoming events at SMS HUB.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {newsItems.map((item, idx) => (
            <Link to={`/news/${item.id}`} key={item.id}>
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
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row group hover:-translate-y-2 transition-all duration-500 h-full"
              >
                {/* Image Placeholder */}
                <div className="md:w-2/5 min-h-[250px] relative group overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[#0B1120] font-black text-[10px] uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest mb-4">
                    <Calendar size={14} className="text-yellow-500" />
                    {item.date}
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-yellow-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 line-clamp-3">
                    {item.summary}
                  </p>
                  <div className="mt-auto">
                    <div className="text-sm font-black uppercase tracking-widest text-[#0B1120] flex items-center gap-2 group/btn">
                      Read More{" "}
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-2 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-[#0B1120] text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
            View Archive
          </button>
        </div>
      </section>
    </div>
  );
};

export default News;
