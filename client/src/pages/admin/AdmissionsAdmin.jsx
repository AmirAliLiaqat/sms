
import React, { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import { UserPlus, Plus, Trash2, Edit, CheckCircle, XCircle, FileText, Upload } from "lucide-react";
import { admissionsData } from "../../mock/admin/admissions";

const AdmissionsAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeTab, setActiveTab] = useState("applications"); // 'applications' | 'forms'

    // Mock data for admission forms
    const formsData = [
        { id: 1, name: "Primary School Application 2024", entries: 145, status: "Active", deadline: "Mar 30, 2024" },
        { id: 2, name: "High School Transfer Request", entries: 32, status: "Active", deadline: "Apr 15, 2024" },
        { id: 3, name: "Kindergarten Waitlist", entries: 89, status: "Closed", deadline: "Jan 15, 2024" },
    ];

    const handleDeleteClick = (item) => {
        setSelectedItem(item);
        setIsDeleteOpen(true);
    };

    const applicationColumns = [
        { header: "App ID", accessor: "id" },
        { 
            header: "Applicant Details", 
            accessor: "student",
            render: (r) => (
                <div>
                     <div className="font-bold text-slate-800">{r.student}</div>
                     <div className="text-xs text-slate-500 font-medium">Applied: {r.date}</div>
                </div>
            )
        },
        { header: "Grade", accessor: "grade" },
        { 
            header: "Documents", 
            accessor: "id",
            render: (r) => (
                <div className="flex gap-2">
                     <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-bold border border-slate-200">ID Proof</span>
                     <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-bold border border-slate-200">Report Card</span>
                </div>
            )
        },
        {
            header: "Status",
            accessor: "status",
            render: (r) => (
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 w-fit ${
                    r.status === "Approved" ? "bg-green-100 text-green-700" : 
                    r.status === "Rejected" ? "bg-rose-100 text-rose-700" : 
                    "bg-yellow-100 text-yellow-700"
                }`}>
                    {r.status === "Approved" && <CheckCircle size={14} />}
                    {r.status === "Rejected" && <XCircle size={14} />}
                    {r.status === "Pending" && <FileText size={14} />}
                    {r.status}
                </span>
            ),
        },
        {
            header: "Actions",
            accessor: "id",
            render: (r) => (
                <div className="flex gap-2 justify-end">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-all" title="Review Application">
                        <Edit size={16} />
                    </button>
                     <button className="p-2 hover:bg-green-50 rounded-lg text-slate-400 hover:text-green-600 transition-all" title="Approve & Create Account">
                        <UserPlus size={16} />
                    </button>
                    <button
                        onClick={() => handleDeleteClick(r)}
                        className="p-2 hover:bg-rose-50 rounded-lg text-slate-400 hover:text-rose-600 transition-all"
                        title="Reject"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                     <h1 className="text-3xl font-black text-[#0B1120] mb-2">Admissions Pipeline</h1>
                     <p className="text-slate-400 font-medium italic">Manage applications, forms, and student intake.</p>
                </div>
                 <div className="flex gap-4">
                    <div className="bg-slate-100 p-1 rounded-xl flex">
                        <button 
                            onClick={() => setActiveTab('applications')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'applications' ? 'bg-white shadow-sm text-[#0B1120]' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Applications
                        </button>
                        <button 
                             onClick={() => setActiveTab('forms')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'forms' ? 'bg-white shadow-sm text-[#0B1120]' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Online Forms
                        </button>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                    >
                        <Plus size={20} className="text-[#FFD60A]" />
                        Create New Form
                    </button>
                </div>
            </div>

            {activeTab === 'applications' ? (
                 <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                    <DataTable
                        data={admissionsData}
                        columns={applicationColumns}
                        onAdd={() => setIsModalOpen(true)}
                        hideAddButton={true}
                    />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {formsData.map(form => (
                        <div key={form.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <FileText size={24} />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                    form.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'
                                }`}>
                                    {form.status}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{form.name}</h3>
                            <div className="space-y-2 mb-6">
                                <div className="flex justify-between text-sm text-slate-500 font-medium">
                                    <span>Total Entries</span>
                                    <span className="font-bold text-slate-700">{form.entries}</span>
                                </div>
                                 <div className="flex justify-between text-sm text-slate-500 font-medium">
                                    <span>Deadline</span>
                                    <span className="font-bold text-slate-700">{form.deadline}</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 rounded-xl bg-slate-50 text-slate-600 font-bold text-xs hover:bg-[#0B1120] hover:text-white transition-colors">
                                    Edit Form
                                </button>
                                 <button className="flex-1 py-2 rounded-xl bg-slate-50 text-slate-600 font-bold text-xs hover:bg-[#0B1120] hover:text-white transition-colors">
                                    View Entries
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <SharedModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={activeTab === 'applications' ? "Direct Admission Entry" : "Create Online Admission Form"}
                onSubmit={() => setIsModalOpen(false)}
            >
                {activeTab === 'applications' ? (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ModalField label="Applicant Name" name="student" />
                        <ModalField label="Target Grade" name="grade" />
                         <ModalField label="Parent/Guardian" name="parent" />
                        <ModalField label="Application Date" name="date" type="date" />
                         <div className="col-span-2">
                             <label className="block text-sm font-bold text-slate-700 mb-2">Upload Documents</label>
                             <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-500 transition-colors cursor-pointer bg-slate-50">
                                 <Upload size={24} className="mb-2" />
                                 <span className="text-xs font-bold uppercase tracking-wide">Click to upload files</span>
                             </div>
                         </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                         <ModalField label="Form Title" name="title" placeholder="e.g. 2024 Grade 1 Admissions" />
                         <div className="grid grid-cols-2 gap-4">
                             <ModalField label="Start Date" name="startDate" type="date" />
                             <ModalField label="End Date" name="endDate" type="date" />
                         </div>
                         <ModalField label="Target Grade" name="grade" />
                         <ModalField label="Registration Fee" name="fee" type="number" />
                    </div>
                )}
            </SharedModal>

            <ConfirmationDialog
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() => console.log("Deleting admission app:", selectedItem?.id)}
                title="Reject Application"
                message={`Are you sure you want to reject the application for "${selectedItem?.student}"? This will send a rejection email to the parent.`}
            />
        </div>
    );
};

export default AdmissionsAdmin;
