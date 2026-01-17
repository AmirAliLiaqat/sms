import React, { useState } from "react";
import { Plus, Folder, Calendar, MoreVertical, FileText, CheckCircle, Clock } from "lucide-react";
import SharedModal from "../../components/ui/SharedModal";

const FacultyAssignments = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    const assignments = [
        {
            id: 1,
            title: "Calculus Problem Set 1",
            class: "10-A (Math)",
            dueDate: "Jan 25, 2024",
            submissions: "28/35",
            status: "active",
            description: "Complete problems 1 through 20 from Chapter 4. Show all working for full credit.",
            type: "Homework"
        },
        {
            id: 2,
            title: "Physics Lab Report",
            class: "9-A (Physics)",
            dueDate: "Jan 28, 2024",
            submissions: "12/38",
            status: "active",
            description: "Submit a detailed lab report on the Pendulum experiment conducted last week. Include graphs.",
            type: "Lab Report"
        },
         {
            id: 3,
            title: "Algebra Quiz Preparation",
            class: "10-B (Math)",
            dueDate: "Jan 20, 2024",
            submissions: "32/32",
            status: "completed",
            description: "Review Chapter 3 and 4. This is a practice assignment, but submission is mandatory.",
            type: "Quiz"
        },
    ];

    const handleViewDetails = (assignment) => {
        setSelectedAssignment(assignment);
        setIsModalOpen(true);
    };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120]">Assignments</h1>
          <p className="text-slate-400 font-medium">Create and manage class assignments</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0B1120] text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
            <Plus size={18} />
            Create New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
            <div key={assignment.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <FileText size={24} />
                    </div>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                        <MoreVertical size={18} />
                    </button>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {assignment.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium mb-4">
                    {assignment.class}
                </p>
                
                <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-sm font-medium">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Calendar size={16} /> Due Date
                        </span>
                        <span className="text-slate-700">{assignment.dueDate}</span>
                    </div>
                     <div className="flex items-center justify-between text-sm font-medium">
                        <span className="text-slate-400 flex items-center gap-2">
                            <Folder size={16} /> Submissions
                        </span>
                        <span className="text-slate-700">{assignment.submissions}</span>
                    </div>
                </div>
                
                <div className="mt-6 flex gap-2">
                     <button 
                        onClick={() => handleViewDetails(assignment)}
                        className="flex-1 py-2 rounded-lg bg-slate-50 text-slate-600 text-xs font-bold hover:bg-slate-100 transition-colors"
                    >
                        View Details
                    </button>
                     <button className="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold hover:bg-blue-100 transition-colors">
                        Submissions
                    </button>
                </div>
            </div>
        ))}
      </div>

      {/* Shared Modal for Assignment Details */}
      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Assignment Details"
        onSubmit={() => setIsModalOpen(false)}
      >
        {selectedAssignment && (
            <div className="space-y-6">
                <div>
                     <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                        {selectedAssignment.type}
                    </span>
                    <h2 className="text-2xl font-black text-slate-800 mb-2">{selectedAssignment.title}</h2>
                     <p className="text-slate-500 font-medium">
                        For <span className="text-slate-800 font-bold">{selectedAssignment.class}</span>
                    </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Description</h3>
                    <p className="text-slate-700 leading-relaxed font-medium">
                        {selectedAssignment.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-slate-100 rounded-xl">
                        <div className="flex items-center gap-3 mb-1">
                            <Calendar size={18} className="text-slate-400" />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Due Date</span>
                        </div>
                        <p className="font-bold text-slate-800 text-lg ml-7">{selectedAssignment.dueDate}</p>
                    </div>
                     <div className="p-4 bg-white border border-slate-100 rounded-xl">
                        <div className="flex items-center gap-3 mb-1">
                            <Folder size={18} className="text-slate-400" />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Submissions</span>
                        </div>
                        <p className="font-bold text-slate-800 text-lg ml-7">{selectedAssignment.submissions}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 p-4 rounded-xl bg-orange-50 border border-orange-100 text-orange-800 text-sm font-bold">
                    <Clock size={18} />
                    Status: {selectedAssignment.status === 'active' ? 'Active - Accepting Submissions' : 'Closed'}
                </div>
            </div>
        )}
      </SharedModal>
    </div>
  );
};

export default FacultyAssignments;
