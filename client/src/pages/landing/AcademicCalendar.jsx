import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Bell, Download, ChevronRight } from "lucide-react";

const AcademicCalendar = () => {
  const events = [
    {
      title: "Spring Semester Begins",
      date: "Feb 17, 2026",
      type: "Academic",
      color: "bg-blue-500",
    },
    {
      title: "Mid-Term Examinations",
      date: "Mar 15 - 22, 2026",
      type: "Exam",
      color: "bg-amber-500",
    },
    {
      title: "Annual Sports Week",
      date: "Apr 05 - 10, 2026",
      type: "Event",
      color: "bg-emerald-500",
    },
    {
      title: "Spring Break",
      date: "Apr 12 - 18, 2026",
      type: "Holiday",
      color: "bg-rose-500",
    },
    {
      title: "Final Projects Submission",
      date: "May 20, 2026",
      type: "Academic",
      color: "bg-indigo-500",
    },
    {
      title: "End Semester Exams",
      date: "Jun 01 - 15, 2026",
      type: "Exam",
      color: "bg-purple-500",
    },
  ];

  const months = ["Feb 2026", "Mar 2026", "Apr 2026", "May 2026", "Jun 2026"];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0B1120] text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Calendar size={14} />
              Important Dates
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Academic <span className="text-yellow-400">Calendar</span> 2026
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Stay organized and never miss an important milestone. Our
              comprehensive calendar outlines academic terms, examination
              schedules, and school events.
            </p>
            <button className="flex items-center gap-3 px-8 py-4 bg-yellow-400 text-[#0B1120] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 group">
              <Download size={18} />
              Download Full PDF
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Calendar List Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Navigation/Filter Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-black text-[#0B1120] mb-6">
                Jump to Month
              </h3>
              <div className="space-y-2">
                {months.map((month) => (
                  <button
                    key={month}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-xl text-slate-500 font-bold hover:bg-slate-50 hover:text-[#0B1120] transition-all group"
                  >
                    {month}
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#0B1120] rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Bell size={120} />
              </div>
              <h4 className="text-xl font-black mb-4 relative z-10 text-yellow-400">
                Reminders
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 block relative z-10 transition-colors group-hover:text-white">
                Enable school notifications to get instant alerts on your mobile
                device for upcoming holidays and events.
              </p>
              <button className="text-xs font-black uppercase tracking-widest py-2 border-b-2 border-yellow-400 text-yellow-400 hover:text-white hover:border-white transition-all relative z-10">
                Configure Alerts
              </button>
            </div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-[#0B1120]">
                Upcoming Timeline
              </h2>
              <div className="flex gap-2">
                <button className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-slate-400 hover:text-blue-500 transition-all">
                  <Clock size={20} />
                </button>
              </div>
            </div>

            <div className="grid gap-6">
              {events.map((event, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${event.color} flex flex-col items-center justify-center text-white shadow-lg`}
                    >
                      <span className="text-xs font-black uppercase leading-tight tracking-tighter opacity-80">
                        {event.type}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#0B1120] group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                        {event.title}
                      </h4>
                      <p className="text-slate-400 font-bold italic flex items-center gap-2 mt-1">
                        <Clock size={14} className="text-yellow-400" />
                        {event.date}
                      </p>
                    </div>
                  </div>
                  <button className="px-6 py-3 rounded-xl bg-slate-50 text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:bg-[#0B1120] group-hover:text-white transition-all">
                    Sync to Gmail
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;
