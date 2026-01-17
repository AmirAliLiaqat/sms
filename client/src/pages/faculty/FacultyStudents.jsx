import React, { useState } from "react";
import { Search, Filter, MoreVertical, Mail, Phone } from "lucide-react";

const FacultyStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const students = [
    {
      id: 1,
      name: "John Doe",
      roll: "10-A-01",
      class: "10-A",
      email: "john@student.sms.edu",
      attendance: "92%",
      performance: "Excellent",
    },
    {
      id: 2,
      name: "Alice Smith",
      roll: "10-A-02",
      class: "10-A",
      email: "alice@student.sms.edu",
      attendance: "85%",
      performance: "Good",
    },
    {
      id: 3,
      name: "Robert Johnson",
      roll: "10-A-03",
      class: "10-A",
      email: "robert@student.sms.edu",
      attendance: "78%",
      performance: "Average",
    },
    {
      id: 4,
      name: "Emily Davis",
      roll: "10-B-01",
      class: "10-B",
      email: "emily@student.sms.edu",
      attendance: "95%",
      performance: "Excellent",
    },
    {
      id: 5,
      name: "Michael Brown",
      roll: "10-B-02",
      class: "10-B",
      email: "michael@student.sms.edu",
      attendance: "90%",
      performance: "Good",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120]">Student List</h1>
          <p className="text-slate-400 font-medium">View and manage your students</p>
        </div>
        
        <div className="flex gap-2">
           <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 outline-none focus:border-[#FFD60A] w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Roll No</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Class</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Attendance</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{student.name}</div>
                        <div className="text-xs text-slate-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-slate-600">{student.roll}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-bold">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${parseInt(student.attendance) > 90 ? 'text-green-600' : 'text-orange-600'}`}>
                      {student.attendance}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      student.performance === 'Excellent' ? 'bg-green-100 text-green-700' :
                      student.performance === 'Good' ? 'bg-blue-100 text-blue-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {student.performance}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Mail size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FacultyStudents;
