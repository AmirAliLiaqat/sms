import React from "react";
import { BookOpen, Users, AlertCircle, Clock } from "lucide-react";

const LibraryDashboard = () => {
    const stats = [
        { title: "Total Books", value: "12,450", icon: BookOpen, color: "bg-blue-500" },
        { title: "Books Issued", value: "845", icon: Users, color: "bg-green-500" },
        { title: "Overdue", value: "42", icon: AlertCircle, color: "bg-rose-500" },
        { title: "New Arrivals", value: "125", icon: Clock, color: "bg-purple-500" },
    ];

    const recentIssues = [
        { id: 1, book: "The Great Gatsby", user: "John Doe (Student)", date: "Today, 10:30 AM", due: "Jan 24" },
        { id: 2, book: "Introduction to Physics", user: "Sarah Smith (Student)", date: "Today, 09:15 AM", due: "Jan 24" },
        { id: 3, book: "Modern World History", user: "Mr. Wilson (Faculty)", date: "Yesterday", due: "Jan 23" },
    ];

    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-black text-[#0B1120]">Library Overview</h1>
                <p className="text-slate-400 font-medium">Manage library assets and activities</p>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className={`p-4 rounded-2xl ${stat.color} bg-opacity-10 text-${stat.color.split("-")[1]}-600`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-800">{stat.value}</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
                <h3 className="text-xl font-black text-slate-800 mb-6">Recent Issues</h3>
                <div className="space-y-4">
                    {recentIssues.map((issue) => (
                        <div key={issue.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-slate-400 border border-slate-200 font-bold">
                                    B
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{issue.book}</h4>
                                    <p className="text-xs text-slate-500 font-bold">Issued to: <span className="text-slate-700">{issue.user}</span></p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Due: {issue.due}</span>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Active</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LibraryDashboard;
