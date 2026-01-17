import React from "react";
import { CheckCircle, XCircle, Clock, Calendar } from "lucide-react";

const StaffAttendance = () => {
    const attendance = [
        { date: "Jan 16, 2024", status: "Present", checkIn: "08:45 AM", checkOut: "05:15 PM" },
        { date: "Jan 15, 2024", status: "Present", checkIn: "08:50 AM", checkOut: "05:10 PM" },
        { date: "Jan 14, 2024", status: "Late", checkIn: "09:30 AM", checkOut: "05:30 PM" },
        { date: "Jan 13, 2024", status: "Absent", checkIn: "-", checkOut: "-" },
        { date: "Jan 12, 2024", status: "Present", checkIn: "08:45 AM", checkOut: "05:00 PM" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                     <h1 className="text-3xl font-black text-[#0B1120]">Attendance</h1>
                    <p className="text-slate-400 font-medium">Your monthly attendance report</p>
                </div>
                <div className="flex gap-4">
                     <div className="bg-green-50 px-4 py-2 rounded-xl border border-green-100">
                        <span className="block text-xs font-bold text-green-600 uppercase tracking-wider">Present</span>
                        <span className="text-xl font-black text-green-700">22</span>
                     </div>
                      <div className="bg-orange-50 px-4 py-2 rounded-xl border border-orange-100">
                        <span className="block text-xs font-bold text-orange-600 uppercase tracking-wider">Late</span>
                        <span className="text-xl font-black text-orange-700">3</span>
                     </div>
                      <div className="bg-rose-50 px-4 py-2 rounded-xl border border-rose-100">
                        <span className="block text-xs font-bold text-rose-600 uppercase tracking-wider">Absent</span>
                        <span className="text-xl font-black text-rose-700">1</span>
                     </div>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                     <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Check In</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Check Out</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {attendance.map((record, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-700 flex items-center gap-2">
                                    <Calendar size={16} className="text-slate-400" />
                                    {record.date}
                                </td>
                                <td className="px-6 py-4">
                                     <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                                        record.status === 'Present' ? 'bg-green-100 text-green-700' :
                                        record.status === 'Late' ? 'bg-orange-100 text-orange-700' :
                                        'bg-rose-100 text-rose-700'
                                    }`}>
                                        {record.status === 'Present' && <CheckCircle size={14} />}
                                        {record.status === 'Late' && <Clock size={14} />}
                                        {record.status === 'Absent' && <XCircle size={14} />}
                                        {record.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-600">{record.checkIn}</td>
                                <td className="px-6 py-4 font-medium text-slate-600">{record.checkOut}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StaffAttendance;
