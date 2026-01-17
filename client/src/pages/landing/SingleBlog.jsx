import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { blogsData } from "../../mock/landing/blogsData";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogsData.find((b) => b.id === parseInt(id));
    setBlog(foundBlog);
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-4">
            Blog not found
          </h2>
          <Link
            to="/blogs"
            className="text-blue-600 font-bold flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={18} /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1120]/70" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold text-xs uppercase tracking-widest mb-12 transition-colors"
          >
            <ArrowLeft size={16} /> Back to all articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-6 text-white/80 font-bold text-xs uppercase tracking-widest mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-yellow-400" />
                {blog.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-yellow-400" />
                {blog.readTime}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg border border-white/10">
                {blog.tags[0]}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-12 capitalize">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-black text-xl">
                {blog.author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-black text-lg">
                  {blog.author}
                </div>
                <div className="text-white/60 text-sm font-medium italic">
                  Contributing Author
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 -translate-y-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <div
              className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="mt-16 pt-12 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                <Tag size={18} className="text-yellow-500" />
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-black uppercase tracking-widest text-[#0B1120] bg-slate-100 px-3 py-1.5 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-[#0B1120] font-black text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
                <Share2 size={18} /> Share Article
              </button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#0B1120] rounded-[2rem] p-8 text-white">
              <h3 className="text-xl font-black mb-6">Related Stories</h3>
              <div className="space-y-6">
                {blogsData
                  .filter((b) => b.id !== blog.id)
                  .slice(0, 3)
                  .map((related) => (
                    <Link
                      key={related.id}
                      to={`/blogs/${related.id}`}
                      className="group block"
                    >
                      <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">
                        {related.date}
                      </div>
                      <h4 className="font-bold leading-tight group-hover:text-yellow-200 transition-colors">
                        {related.title}
                      </h4>
                    </Link>
                  ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
              <h3 className="text-xl font-black text-[#0B1120] mb-4">
                Stay Informed
              </h3>
              <p className="text-sm text-slate-500 font-medium mb-6 italic">
                Join our community newsletter for weekly educational insights.
              </p>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 mb-4 text-sm font-bold focus:border-blue-500 outline-none"
              />
              <button className="w-full py-4 bg-[#0B1120] text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-slate-200 transition-all hover:scale-[1.02]">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
