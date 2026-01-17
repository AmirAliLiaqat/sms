import React, { useState } from "react";
import { Search, Filter, Mail, Phone, MoreVertical } from "lucide-react";

const ManagementStaff = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const staff = [
        { id: 1, name: "Sarah Wilson", role: "Teacher", department: "Science", email: "sarah@sms.edu", phone: "+1 234 567 890", status: "Active" },
        { id: 2, name: "James Miller", role: "Teacher", department: "Mathematics", email: "james@sms.edu", phone: "+1 234 567 891", status: "Active" },
        { id: 3, name: "Emily Chen", role: "Librarian", department: "Library", email: "emily@sms.edu", phone: "+1 234 567 892", status: "On Leave" },
        { id: 4, name: "Michael Brown", role: "Staff", department: "Administration", email: "michael@sms.edu", phone: "+1 234 567 893", status: "Active" },
        { id: 5, name: "David Wilson", role: "Canteen Staff", department: "Canteen", email: "david@sms.edu", phone: "+1 234 567 894", status: "Active" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[#0B1120]">Staff Directory</h1>
                    <p className="text-slate-400 font-medium">Manage and view all staff members</p>
                </div>
                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search staff..."
                            className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 outline-none focus:border-[#FFD60A] w-64"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Department</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {staff.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((member) => (
                                <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-800">{member.name}</div>
                                                <div className="text-xs text-slate-500">{member.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-bold text-slate-600">{member.role}</span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">
                                        {member.department}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                                            member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                        }`}>
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                                            <MoreVertical size={18} />
                                        </button>
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

export default ManagementStaff;
