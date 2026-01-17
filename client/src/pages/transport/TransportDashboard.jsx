
import React from 'react';
import { Truck, MapPin, Users, Fuel } from 'lucide-react';

const TransportDashboard = () => {
    const stats = [
        { title: "Total Buses", value: "24", icon: Truck, color: "bg-blue-500" },
        { title: "Active Routes", value: "18", icon: MapPin, color: "bg-green-500" },
        { title: "Students", value: "850", icon: Users, color: "bg-purple-500" },
        { title: "Fuel Consumption", value: "1240L", icon: Fuel, color: "bg-orange-500" },
    ];

    const liveStatus = [
        { id: 1, bus: "Bus 01", route: "Route A - Downtown", driver: "John Smith", status: "On Time", location: "Main St. Crossing" },
        { id: 2, bus: "Bus 04", route: "Route B - Westside", driver: "Mike Johnson", status: "Delayed", location: "Traffic at 5th Ave" },
        { id: 3, bus: "Bus 07", route: "Route C - North Hills", driver: "Sarah Davis", status: "Arrived", location: "School Campus" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-[#0B1120]">Transport Overview</h1>
                <p className="text-slate-400 font-medium">Monitor fleet status and routes</p>
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

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-black text-slate-800 mb-6">Live Status</h3>
                <div className="space-y-4">
                    {liveStatus.map((status) => (
                        <div key={status.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-slate-800 border border-slate-200 font-black text-sm">
                                    {status.bus.split(" ")[1]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{status.route}</h4>
                                    <p className="text-xs text-slate-500 font-bold">Driver: <span className="text-slate-700">{status.driver}</span></p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right hidden md:block">
                                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Current Location</span>
                                    <span className="font-bold text-slate-700 text-sm">{status.location}</span>
                                </div>
                                <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide text-center min-w-[100px] ${
                                    status.status === 'On Time' || status.status === 'Arrived' ? 'bg-green-100 text-green-700' : 'bg-rose-100 text-rose-700'
                                }`}>
                                    {status.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransportDashboard;
