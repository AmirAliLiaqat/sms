import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Camera, Filter } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Campus", "Sports", "Events", "Academic"];

  const images = [
    {
      id: 1,
      category: "Campus",
      title: "Aerial View",
      src: "https://placehold.co/800x600/0B1120/white?text=Campus+View",
    },
    {
      id: 2,
      category: "Sports",
      title: "Basketball Finals",
      src: "https://placehold.co/800x600/FFD60A/0B1120?text=Sports+Action",
    },
    {
      id: 3,
      category: "Academic",
      title: "Robotics Lab",
      src: "https://placehold.co/800x600/0B1120/white?text=Science+Lab",
    },
    {
      id: 4,
      category: "Events",
      title: "Annual Concert",
      src: "https://placehold.co/800x600/FFD60A/0B1120?text=Stage+Performance",
    },
    {
      id: 5,
      category: "Campus",
      title: "Digital Library",
      src: "https://placehold.co/800x600/0B1120/white?text=Library+Space",
    },
    {
      id: 6,
      category: "Academic",
      title: "Chemistry Experiment",
      src: "https://placehold.co/800x600/FFD60A/0B1120?text=Learning+Moments",
    },
  ];

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

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
              Visual Journey
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Campus <span className="text-yellow-400">Gallery</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Captured moments of joy, discovery, and excellence at SMS HUB.
              Explore our vibrant campus life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-4 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                activeFilter === cat
                  ? "bg-[#0B1120] text-white shadow-lg shadow-slate-200"
                  : "text-slate-400 hover:text-[#0B1120] hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-32 container mx-auto px-6">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(img)}
                className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-200 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-yellow-400 font-black text-[10px] uppercase tracking-[0.2em] mb-1">
                      {img.category}
                    </p>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {img.title} <Maximize2 size={16} />
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0B1120]/95 backdrop-blur-xl p-6 md:p-12 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center hover:bg-yellow-400 hover:text-[#0B1120] transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-6xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl"
              />
              <div className="mt-8 text-center text-white">
                <h3 className="text-3xl font-black mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-400 font-bold uppercase tracking-widest">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
