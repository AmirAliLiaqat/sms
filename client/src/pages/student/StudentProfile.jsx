import React, { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, Book, Shield, Camera } from "lucide-react";

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Mock data - normally fetched from API
  const studentInfo = {
    name: "John Doe",
    rollNumber: "ST-2023-001",
    email: "john.doe@student.sms.edu",
    phone: "+1 234 567 890",
    dob: "2002-05-15",
    address: "123 Campus Avenue, West Block, NY",
    course: "Computer Science",
    semester: "4th Semester",
    bloodGroup: "O+",
    guardian: "Robert Doe",
    guardianPhone: "+1 234 567 891",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#0B1120]">My Profile</h1>
          <p className="text-slate-400 font-medium">Manage your personal information</p>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="px-6 py-2.5 bg-[#0B1120] text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#0B1120] to-slate-800" />
        
        <div className="relative flex flex-col md:flex-row items-end md:items-center gap-6 mb-12 mt-12 px-4">
          <div className="relative group">
            <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-lg rotate-3 group-hover:rotate-0 transition-all duration-300">
              <div className="w-full h-full rounded-2xl bg-slate-200 flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-black text-slate-400">J</span>
              </div>
            </div>
            <button className="absolute -bottom-2 -right-2 p-2 bg-[#FFD60A] text-[#0B1120] rounded-xl shadow-lg hover:scale-110 transition-transform">
              <Camera size={18} />
            </button>
          </div>
          
          <div className="mb-2">
            <h2 className="text-3xl font-black text-slate-800">{studentInfo.name}</h2>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <span className="bg-slate-100 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">
                {studentInfo.rollNumber}
              </span>
              <span>•</span>
              <span>{studentInfo.course} ({studentInfo.semester})</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
              Personal Details
            </h3>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium">
                  <User size={18} className="text-slate-400" />
                  {studentInfo.name}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date of Birth</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium">
                  <Calendar size={18} className="text-slate-400" />
                  {studentInfo.dob}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gender</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium">
                  <span className="text-slate-400 font-bold px-1">⚥</span>
                  Male
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium">
                  <Mail size={18} className="text-slate-400" />
                  {studentInfo.email}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium">
                  <Phone size={18} className="text-slate-400" />
                  {studentInfo.phone}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Address</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium">
                  <MapPin size={18} className="text-slate-400" />
                  {studentInfo.address}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 pt-4">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
              Guardian Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Guardian Name</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium">
                  <Shield size={18} className="text-slate-400" />
                  {studentInfo.guardian}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Guardian Contact</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium">
                  <Phone size={18} className="text-slate-400" />
                  {studentInfo.guardianPhone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
