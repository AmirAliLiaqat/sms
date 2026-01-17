
import React from 'react';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const ManagementDashboard = () => {
    const stats = [
        { title: "Total Revenue", value: "$2.4M", change: "+12.5%", icon: DollarSign, color: "bg-green-500" },
        { title: "Active Staff", value: "145", change: "+4", icon: Users, color: "bg-blue-500" },
        { title: "Avg Attendance", value: "94%", change: "+2.1%", icon: Activity, color: "bg-purple-500" },
        { title: "Expenses", value: "$850K", change: "-5.2%", icon: TrendingUp, color: "bg-orange-500" },
    ];

    const recentActivities = [
        { id: 1, action: "Budget Approval", detail: "Science Dept Equipment", time: "2 hours ago", status: "Pending" },
        { id: 2, action: "New Hire", detail: "Math Teacher - G10", time: "5 hours ago", status: "Completed" },
        { id: 3, action: "Policy Update", detail: "Updated Leave Policy", time: "1 day ago", status: "Published" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-[#0B1120]">School Overview</h1>
                <p className="text-slate-400 font-medium">Key performance indicators and daily updates</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10 text-${stat.color.split("-")[1]}-600`}>
                                <stat.icon size={24} />
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-rose-50 text-rose-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-3xl font-black text-slate-800 mb-1">{stat.value}</h3>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.title}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <h3 className="text-xl font-black text-slate-800 mb-6">Recent Activity</h3>
                <div className="space-y-6">
                    {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                            <div>
                                <h4 className="font-bold text-slate-800">{activity.action}</h4>
                                <p className="text-sm text-slate-500 font-medium">{activity.detail}</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{activity.time}</span>
                                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                    activity.status === 'Completed' ? 'bg-green-50 text-green-600' : 
                                    activity.status === 'Pending' ? 'bg-orange-50 text-orange-600' : 
                                    'bg-blue-50 text-blue-600'
                                }`}>
                                    {activity.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagementDashboard;
