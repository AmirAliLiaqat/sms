import React from "react";
import { Upload, FileText, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const assignments = [
  {
    id: 1,
    subject: "Advanced Java",
    title: "Socket Programming Project",
    dueDate: "Jan 20, 2025",
    status: "Pending",
    description: "Implement a chat application using Java Sockets. Include both server and client side code."
  },
  {
    id: 2,
    subject: "Software Engineering",
    title: "SRS Documentation",
    dueDate: "Jan 18, 2025",
    status: "Submitted",
    submittedOn: "Jan 16, 2025",
    grade: "A",
    description: "Prepare a complete Software Requirements Specification document for the Library Management System."
  },
  {
    id: 3,
    subject: "Database Management",
    title: "Normalization Exercises",
    dueDate: "Jan 25, 2025",
    status: "Pending",
    description: "Solve the attached normalization problems (1NF to BCNF)."
  }
];

const StudentSubmissions = () => {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Online Submissions</h1>
        <p className="text-slate-400 font-medium">Upload and track your assignments.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {assignments.map((assignment) => (
          <div 
            key={assignment.id} 
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-all"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wide border border-slate-100">
                  {assignment.subject}
                </span>
                {assignment.status === 'Submitted' ? (
                  <span className="flex items-center gap-1 text-green-600 text-[10px] font-bold uppercase tracking-wide bg-green-50 px-2 py-1 rounded">
                    <CheckCircle size={12} /> Submitted
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-amber-600 text-[10px] font-bold uppercase tracking-wide bg-amber-50 px-2 py-1 rounded">
                    <Clock size={12} /> Pending
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#0B1120]">
                {assignment.title}
              </h3>
              
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                {assignment.description}
              </p>
              
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className={assignment.status === 'Pending' ? "text-amber-500" : ""} />
                  Due: {assignment.dueDate}
                </div>
                {assignment.submittedOn && (
                  <div>Submitted on: {assignment.submittedOn}</div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-50">
              {assignment.status === 'Pending' ? (
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-[#FFD60A] hover:bg-yellow-50/10 transition-colors cursor-pointer group/upload">
                  <Upload size={24} className="mx-auto text-slate-300 group-hover/upload:text-[#FFD60A] mb-2 transition-colors" />
                  <p className="text-sm font-bold text-slate-600 group-hover/upload:text-slate-800">
                    Click to Upload Assignment
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    PDF, DOCX, ZIP allowed (Max 10MB)
                  </p>
                </div>
              ) : (
                <div className="bg-green-50 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-green-500 shadow-sm">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-green-800">Submission Received</p>
                      {assignment.grade && <p className="text-xs font-bold text-green-600">Grade: {assignment.grade}</p>}
                    </div>
                  </div>
                  <button className="text-xs font-bold text-green-700 hover:text-green-900 underline">
                    View
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSubmissions;
