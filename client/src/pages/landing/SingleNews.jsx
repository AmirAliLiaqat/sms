import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  Share2,
  Tag,
  MapPin,
} from "lucide-react";
import { newsData } from "../../mock/landing/newsData";

const SingleNews = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = newsData.find((n) => n.id === parseInt(id));
    setItem(foundItem);
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-4">
            News item not found
          </h2>
          <Link
            to="/news"
            className="text-[#0B1120] font-bold flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={18} /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20">
      {/* Top Banner */}
      <section className="bg-[#0B1120] py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            to="/news"
            className="text-white/60 hover:text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all"
          >
            <ArrowLeft size={14} /> Back to News Feed
          </Link>
          <div className="px-3 py-1 bg-yellow-400 text-[#0B1120] font-black text-[9px] uppercase tracking-[0.2em] rounded">
            Campus Bulletin
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Category & Title */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 text-blue-600 rounded-lg text-xs font-black uppercase tracking-widest mb-6"
            >
              <Tag size={14} />
              {item.category}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-[#0B1120] leading-tight mb-8"
            >
              {item.title}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-yellow-500" />
                Published {item.date}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-yellow-500" />
                SMS HUB Main Campus
              </div>
            </div>
          </div>

          {/* Featured Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full aspect-[21/9] rounded-[2.5rem] mb-16 shadow-2xl shadow-slate-200 relative overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Article Grid */}
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div
                className="prose prose-slate prose-xl max-w-none text-slate-700 font-medium leading-relaxed news-article"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              <div className="mt-20 pt-10 border-t border-slate-200">
                <h4 className="text-lg font-black text-[#0B1120] mb-6 uppercase tracking-widest">
                  Share this update
                </h4>
                <div className="flex gap-4">
                  {["Facebook", "Twitter", "LinkedIn", "Copy Link"].map(
                    (platform) => (
                      <button
                        key={platform}
                        className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-all"
                      >
                        {platform}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-black text-[#0B1120] mb-6">
                  Recent News
                </h3>
                <div className="space-y-8">
                  {newsData
                    .filter((n) => n.id !== item.id)
                    .slice(0, 3)
                    .map((recent) => (
                      <Link
                        key={recent.id}
                        to={`/news/${recent.id}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden relative">
                          <img
                            src={recent.image}
                            alt={recent.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">
                            {recent.category}
                          </div>
                          <h4 className="text-sm font-bold leading-tight line-clamp-2 group-hover:text-blue-800 transition-colors uppercase italic">
                            {recent.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 text-white">
                <h3 className="text-xl font-black mb-4">Event Calendar</h3>
                <p className="text-sm text-blue-100 font-medium mb-8 leading-relaxed italic">
                  Never miss a campus event. Sync our master calendar to your
                  device.
                </p>
                <button className="w-full py-4 bg-yellow-400 text-[#0B1120] rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-yellow-600/20 hover:bg-yellow-300 transition-all">
                  Sync iCal / Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
