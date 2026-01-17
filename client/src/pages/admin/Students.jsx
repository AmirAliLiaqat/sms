import React, { useState, useEffect } from "react";
import DataTable from "../../components/ui/DataTable";
import SharedModal, { ModalField } from "../../components/ui/SharedModal";
import ConfirmationDialog from "../../components/ui/ConfirmationDialog";
import * as api from "../../services/api";
import {
  Loader2,
  User,
  Phone,
  Mail,
  GraduationCap,
  Trash2,
  Edit,
} from "lucide-react";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    admissionNumber: "",
    rollNumber: "",
    grade: "",
    section: "",
    parentName: "",
    parentPhone: "",
    dateOfBirth: "",
    gender: "Male",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await api.getStudents();
      setStudents(res.data || []);
      setError(null);
    } catch (err) {
      setError("Failed to fetch students. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      await api.createStudent(formData);
      setIsModalOpen(false);
      fetchStudents();
      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        admissionNumber: "",
        rollNumber: "",
        grade: "",
        section: "",
        parentName: "",
        parentPhone: "",
        dateOfBirth: "",
        gender: "Male",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create student.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const columns = [
    {
      header: "Admission #",
      accessor: "admissionNumber",
      render: (row) => (
        <span className="font-mono text-xs font-semibold bg-slate-100 px-2 py-1 rounded text-slate-600">
          {row.admissionNumber}
        </span>
      ),
    },
    {
      header: "Student",
      accessor: "name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0B1120] text-white flex items-center justify-center font-bold text-sm shadow-sm">
            {row.name?.charAt(0) || <User size={16} />}
          </div>
          <div>
            <div className="font-bold text-slate-800">{row.name}</div>
            <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              {row.user?.email}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Class",
      accessor: "class",
      render: (row) => (
        <div className="flex flex-col">
          <span className="font-bold text-slate-700">{row.class}</span>
          <span className="text-[10px] text-slate-400">
            Section {row.section}
          </span>
        </div>
      ),
    },
    {
      header: "Parent Info",
      accessor: "parent",
      render: (row) => (
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <User size={12} className="text-yellow-500" />
            {row.parentDetails?.fatherName}
          </div>
          <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
            <Phone size={10} />
            {row.parentDetails?.phone}
          </div>
        </div>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
            row.feeStatus === "Paid"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {row.feeStatus || "Active"}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "id",
      render: (r) => (
        <div className="flex gap-2">
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-all">
            <Edit size={16} />
          </button>
          <button
            onClick={() => handleDeleteClick(r)}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-600 transition-all"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  if (loading && students.length === 0) {
    return (
      <div className="h-96 flex flex-col items-center justify-center text-slate-400 gap-4">
        <Loader2 className="animate-spin text-yellow-500" size={40} />
        <p className="font-bold uppercase tracking-widest text-xs">
          Loading Students...
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120] mb-2">
            Student Directory
          </h1>
          <p className="text-slate-400 font-medium italic">
            Manage enrollment and academic records of all students.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-[#0B1120] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <GraduationCap size={20} className="text-yellow-400" />
          Add New Student
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl font-bold text-sm">
          {error}
        </div>
      )}

      <DataTable
        data={students}
        columns={columns}
        onAdd={() => setIsModalOpen(true)}
        hideAddButton={true} // We have a custom one above
      />

      <SharedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Register New Student"
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModalField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First Last"
            />
            <ModalField
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="student@example.com"
            />
            <ModalField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Min 6 chars"
            />
            <ModalField
              label="Admission #"
              name="admissionNumber"
              value={formData.admissionNumber}
              onChange={handleChange}
              placeholder="ADM-202X-XXX"
            />
            <ModalField
              label="Roll Number"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="e.g. 101"
            />
            <ModalField
              label="Grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              type="select"
              options={[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
              ]}
            />
            <ModalField
              label="Section"
              name="section"
              value={formData.section}
              onChange={handleChange}
              placeholder="e.g. A"
            />
            <ModalField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              type="select"
              options={["Male", "Female", "Other"]}
            />
            <ModalField
              label="Parent Name"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Father/Guardian Name"
            />
            <ModalField
              label="Parent Phone"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              placeholder="+1..."
            />
            <ModalField
              label="Date of Birth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              type="date"
            />
          </div>
        </div>
      </SharedModal>

      <ConfirmationDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => console.log("Deleting student:", selectedItem?.id)}
        title="Unenroll Student"
        message={`Are you sure you want to unenroll "${selectedItem?.name}"? This will archive all their academic records.`}
      />
    </>
  );
};

export default Students;
