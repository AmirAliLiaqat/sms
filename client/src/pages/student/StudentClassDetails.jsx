import React from "react";
import { Book, Users, Clock, MapPin, Search, User } from "lucide-react";

// Mock Data
const classDetails = {
  className: "Bachelor of Computer Application (BCA)",
  semester: "4th Semester",
  section: "A",
  classTeacher: "Prof. Sarah Johnson",
  totalStudents: 45,
  subjects: [
    {
      code: "CS401",
      name: "Advanced Java Programming",
      teacher: "Prof. Sarah Johnson",
      credits: 4,
      type: "Core",
      room: "Lab 2"
    },
    {
      code: "CS402",
      name: "Database Management Systems",
      teacher: "Dr. Robert Smith",
      credits: 4,
      type: "Core",
      room: "Room 101"
    },
    {
      code: "CS403",
      name: "Software Engineering",
      teacher: "Ms. Emily Davis",
      credits: 3,
      type: "Core",
      room: "Room 104"
    },
    {
      code: "MA404",
      name: "Statistical Methods",
      teacher: "Mr. James Wilson",
      credits: 3,
      type: "Allied",
      room: "Room 102"
    },
    {
      code: "CS405",
      name: "Web Technologies Lab",
      teacher: "Mrs. Linda Brown",
      credits: 2,
      type: "Practical",
      room: "Lab 1"
    }
  ]
};

const StudentClassDetails = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120]">Class Details</h1>
          <p className="text-slate-400 font-medium">Information about your current academic session.</p>
        </div>
      </div>

      {/* Hero Card */}
      <div className="bg-[#0B1120] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px] translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-x-16 translate-y-16" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider">
                {classDetails.semester}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFD60A] text-[#0B1120] text-xs font-bold uppercase tracking-wider">
                Section {classDetails.section}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              {classDetails.className}
            </h2>
            <div className="flex items-center gap-6 text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>{classDetails.totalStudents} Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-[#FFD60A]" />
                <span className="text-white">Class Teacher: {classDetails.classTeacher}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 min-w-[200px]">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              Course Credits
            </p>
            <div className="text-4xl font-black text-white">
              22
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Book size={20} className="text-[#FFD60A]" />
            registered Subjects
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search subjects..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD60A]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classDetails.subjects.map((subject, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-black text-slate-300 uppercase tracking-widest">
                  {subject.code}
                </span>
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                  subject.type === 'Core' ? 'bg-indigo-50 text-indigo-600' :
                  subject.type === 'Practical' ? 'bg-emerald-50 text-emerald-600' :
                  'bg-orange-50 text-orange-600'
                }`}>
                  {subject.type}
                </span>
              </div>
              
              <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#0B1120] line-clamp-2">
                {subject.name}
              </h4>
              
              <div className="space-y-3 pt-4 border-t border-slate-50 mt-4">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <User size={16} className="text-slate-300" />
                  <span className="font-medium">{subject.teacher}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <MapPin size={16} className="text-slate-300" />
                  <span className="font-medium">{subject.room}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <Clock size={16} className="text-slate-300" />
                  <span className="font-medium">{subject.credits} Credits</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentClassDetails;
