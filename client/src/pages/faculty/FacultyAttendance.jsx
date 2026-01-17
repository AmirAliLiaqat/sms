import React, { useState } from "react";
import { Calendar, CheckCircle, XCircle, Search } from "lucide-react";

const FacultyAttendance = () => {
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  // Mock student list
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", roll: "10-01", status: "present" },
    { id: 2, name: "Alice Smith", roll: "10-02", status: "present" },
    { id: 3, name: "Robert Johnson", roll: "10-03", status: "absent" },
    { id: 4, name: "Emily Davis", roll: "10-04", status: "present" },
    { id: 5, name: "Michael Brown", roll: "10-05", status: "present" },
    { id: 6, name: "Sarah Wilson", roll: "10-06", status: "late" },
    { id: 7, name: "David Clark", roll: "10-07", status: "present" },
    { id: 8, name: "Jessica Lewis", roll: "10-08", status: "present" },
  ]);

  const toggleStatus = (id, newStatus) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, status: newStatus } : s
    ));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'present': return 'bg-green-100 text-green-700 border-green-200';
      case 'absent': return 'bg-rose-100 text-rose-700 border-rose-200';
      case 'late': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120]">Mark Attendance</h1>
          <p className="text-slate-400 font-medium">Daily attendance record</p>
        </div>
        
        <div className="flex gap-4">
          <select 
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-[#FFD60A]"
          >
            <option value="10-A">Class 10-A</option>
            <option value="10-B">Class 10-B</option>
            <option value="9-A">Class 9-A</option>
          </select>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-[#FFD60A]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-lg text-slate-800">Student List ({students.length})</h3>
            <div className="flex gap-2">
                <button 
                  onClick={() => setStudents(students.map(s => ({...s, status: 'present'})))}
                  className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg hover:bg-green-100 transition-colors"
                >
                    Mark All Present
                </button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {students.map((student) => (
            <div 
              key={student.id} 
              className={`p-4 rounded-xl border-2 transition-all ${getStatusColor(student.status)}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-50 flex items-center justify-center font-bold text-inherit">
                        {student.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold">{student.name}</div>
                        <div className="text-xs opacity-75">Roll: {student.roll}</div>
                    </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <button 
                    onClick={() => toggleStatus(student.id, 'present')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${student.status === 'present' ? 'bg-white shadow-sm text-green-700' : 'bg-transparent hover:bg-white/50 opacity-50'}`}
                >
                    Present
                </button>
                <button 
                    onClick={() => toggleStatus(student.id, 'late')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${student.status === 'late' ? 'bg-white shadow-sm text-orange-700' : 'bg-transparent hover:bg-white/50 opacity-50'}`}
                >
                    Late
                </button>
                <button 
                    onClick={() => toggleStatus(student.id, 'absent')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${student.status === 'absent' ? 'bg-white shadow-sm text-rose-700' : 'bg-transparent hover:bg-white/50 opacity-50'}`}
                >
                    Absent
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
            <button className="px-8 py-3 bg-[#0B1120] text-white font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Save Attendance
            </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyAttendance;
