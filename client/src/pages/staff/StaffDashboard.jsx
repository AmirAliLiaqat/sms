import React from "react";
import { CheckSquare, Clock, AlertCircle } from "lucide-react";

const StaffDashboard = () => {
    const tasks = [
        { id: 1, title: "Prepare Monthly Report", deadline: "Today, 5:00 PM", priority: "High", status: "In Progress" },
        { id: 2, title: "Update Student Records", deadline: "Tomorrow", priority: "Medium", status: "Pending" },
        { id: 3, title: "Inventory Check", deadline: "Jan 20", priority: "Low", status: "Pending" },
    ];

    const notifications = [
        { id: 1, title: "Meeting Reminder", msg: "Staff meeting at 2:00 PM in Conference Room A.", time: "1 hour ago" },
        { id: 2, title: "System Maintenance", msg: "Server downtime scheduled for Saturday night.", time: "3 hours ago" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-[#0B1120]">My Tasks</h1>
                <p className="text-slate-400 font-medium">Manage your daily activities and notifications</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {tasks.map((task) => (
                        <div key={task.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${task.priority === 'High' ? 'bg-rose-50 text-rose-600' : task.priority === 'Medium' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
                                    <CheckSquare size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg mb-1">{task.title}</h3>
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} /> {task.deadline}
                                        </span>
                                        <span className={`px-2 py-0.5 rounded-lg text-xs font-bold uppercase tracking-wide ${task.priority === 'High' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'}`}>
                                            {task.priority}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-[#0B1120] hover:text-white transition-colors">
                                Mark Done
                            </button>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="bg-[#0B1120] rounded-[2rem] p-6 text-white">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <AlertCircle size={20} className="text-yellow-400" />
                            Notifications
                        </h3>
                        <div className="space-y-4">
                            {notifications.map((notif) => (
                                <div key={notif.id} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <h4 className="font-bold text-sm mb-1">{notif.title}</h4>
                                    <p className="text-xs text-slate-400 mb-2">{notif.msg}</p>
                                    <span className="text-[10px] text-yellow-500 font-bold uppercase tracking-wider">{notif.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;
