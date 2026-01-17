import React, { useState } from "react";
import { BookOpen, Users, Clock, ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import SharedModal from "../../components/ui/SharedModal";

const FacultyClasses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('students'); // 'students' | 'attendance'
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    {
      id: 1,
      grade: "10th Grade",
      section: "Section A",
      subject: "Mathematics",
      students: 35,
      schedule: "Mon, Wed, Fri - 09:00 AM",
      room: "Room 101",
      color: "bg-blue-500",
    },
    {
      id: 2,
      grade: "10th Grade",
      section: "Section B",
      subject: "Mathematics",
      students: 32,
      schedule: "Tue, Thu - 11:00 AM",
      room: "Room 102",
      color: "bg-purple-500",
    },
    {
      id: 3,
      grade: "9th Grade",
      section: "Section A",
      subject: "Physics",
      students: 38,
      schedule: "Mon, Wed - 01:00 PM",
      room: "Lab 3",
      color: "bg-green-500",
    },
    {
      id: 4,
      grade: "9th Grade",
      section: "Section B",
      subject: "Physics",
      students: 37,
      schedule: "Tue, Thu, Fri - 10:00 AM",
      room: "Lab 3",
      color: "bg-orange-500",
    },
  ];

  // Mock student data for modal
  const mockStudents = [
    { id: 1, name: "John Doe", roll: "01", status: "present" },
    { id: 2, name: "Alice Smith", roll: "02", status: "present" },
    { id: 3, name: "Robert Johnson", roll: "03", status: "absent" },
    { id: 4, name: "Emily Davis", roll: "04", status: "present" },
    { id: 5, name: "Michael Brown", roll: "05", status: "late" },
  ];

  const handleOpenModal = (cls, type) => {
    setSelectedClass(cls);
    setModalType(type);
    setIsModalOpen(true);
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
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">My Classes</h1>
        <p className="text-slate-400 font-medium">Manage your assigned classes and subjects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((item) => (
          <div key={item.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className={`p-4 rounded-2xl ${item.color} bg-opacity-10 text-${item.color.split("-")[1]}-600`}>
                <BookOpen size={24} />
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-1">{item.subject}</h3>
              <p className="text-slate-500 font-medium">{item.grade} - {item.section}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <Users size={16} />
                {item.students} Students
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <Clock size={16} />
                {item.schedule}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex gap-2">
              <button 
                onClick={() => handleOpenModal(item, 'students')}
                className="flex-1 py-2.5 rounded-xl bg-slate-50 text-slate-600 text-sm font-bold hover:bg-slate-100 transition-colors"
              >
                Students
              </button>
              <button 
                onClick={() => handleOpenModal(item, 'attendance')}
                className="flex-1 py-2.5 rounded-xl bg-[#0B1120] text-white text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Attendance
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shared Modal */}
      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalType === 'students' ? `Students - ${selectedClass?.grade} (${selectedClass?.section})` : `Mark Attendance - ${selectedClass?.subject}`}
        onSubmit={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          {mockStudents.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-sm transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{student.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">Roll No: {selectedClass?.grade.split(" ")[0]}-{selectedClass?.section.split(" ")[1]}-{student.roll}</p>
                </div>
              </div>

              {modalType === 'students' ? (
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg uppercase tracking-wide">
                  Active
                </span>
              ) : (
                <div className="flex gap-2">
                   <button className={`p-2 rounded-lg transition-colors ${student.status === 'present' ? 'bg-green-100 text-green-600' : 'bg-slate-50 text-slate-300 hover:bg-slate-100'}`}>
                      <CheckCircle size={18} />
                   </button>
                   <button className={`p-2 rounded-lg transition-colors ${student.status === 'late' ? 'bg-orange-100 text-orange-600' : 'bg-slate-50 text-slate-300 hover:bg-slate-100'}`}>
                      <Clock size={18} />
                   </button>
                    <button className={`p-2 rounded-lg transition-colors ${student.status === 'absent' ? 'bg-rose-100 text-rose-600' : 'bg-slate-50 text-slate-300 hover:bg-slate-100'}`}>
                      <XCircle size={18} />
                   </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </SharedModal>
    </div>
  );
};

export default FacultyClasses;
