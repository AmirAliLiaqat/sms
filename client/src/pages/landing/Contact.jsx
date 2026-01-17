import React from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <section className="bg-[#0B1120] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-yellow-400/5 skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6">
              Connect With Us
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Talk To <span className="text-yellow-400">Experts</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Have questions about admissions, academics, or life at SMS HUB?
              We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 lg:py-32 -mt-16 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <h3 className="text-2xl font-black text-[#0B1120] mb-8 flex items-center gap-3">
                <MessageSquare className="text-yellow-500" />
                Our Offices
              </h3>

              <div className="space-y-10">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">
                      Main Campus
                    </h4>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      123 Education Lane, Knowledge City,
                      <br /> ST 12345, United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">
                      Call Center
                    </h4>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-slate-400 text-sm italic">
                      Mon-Fri, 9am - 5pm
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">
                      Email Support
                    </h4>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      admissions@smshub.edu
                    </p>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      info@smshub.edu
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                <h4 className="font-bold text-[#0B1120] mb-2 flex items-center gap-2">
                  <Clock size={16} className="text-yellow-600" />
                  Admission Hours
                </h4>
                <p className="text-slate-500 text-sm font-medium">
                  Monday — Friday: 8:00 AM - 4:00 PM
                </p>
                <p className="text-slate-500 text-sm font-medium">
                  Saturday: 9:00 AM - 1:00 PM
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -translate-y-16 translate-x-16" />

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-[#0B1120] mb-4">
                  Send us a Message
                </h3>
                <p className="text-slate-500 font-medium mb-12">
                  Fill out the form below and our counselor will reach out to
                  you.
                </p>

                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none font-bold text-slate-800 transition-all"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none font-bold text-slate-800 transition-all"
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Subject
                    </label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none font-bold text-slate-800 transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Admission Process</option>
                      <option>Fee Structure</option>
                      <option>Campus Visit Request</option>
                      <option>Career Opportunities</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Your Message
                    </label>
                    <textarea
                      rows="5"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none font-bold text-slate-800 transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button className="w-full md:w-auto px-12 py-5 bg-[#0B1120] text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 hover:shadow-2xl flex items-center justify-center gap-3 group">
                    Send Message
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="container mx-auto px-6 pb-32">
        <div className="w-full h-[500px] bg-slate-200 rounded-[3rem] overflow-hidden shadow-inner border-8 border-white group relative">
          <div className="absolute inset-0 bg-[#0B1120]/10 group-hover:bg-transparent transition-colors duration-500" />
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 font-bold uppercase tracking-widest italic text-center p-8">
            <MapPin size={64} className="mb-4 text-slate-300" />
            Interactive Map Integration Placeholder
            <p className="text-xs mt-2 not-italic font-medium text-slate-400">
              Main Campus, 123 Education Lane
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
