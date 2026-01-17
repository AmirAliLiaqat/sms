
import React from 'react';
import { MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const TransportRoutes = () => {
    const routes = [
        { id: 1, name: "Route A - Downtown", stops: 12, students: 45, duration: "45 mins", pickup: "07:00 AM", status: "Active" },
        { id: 2, name: "Route B - Westside", stops: 8, students: 32, duration: "35 mins", pickup: "07:15 AM", status: "Active" },
        { id: 3, name: "Route C - North Hills", stops: 15, students: 50, duration: "55 mins", pickup: "06:45 AM", status: "Maintenance" },
    ];

    return (
        <div className="space-y-8">
            <div>
                 <h1 className="text-3xl font-black text-[#0B1120]">Routes & Stops</h1>
                <p className="text-slate-400 font-medium">Manage transportation routes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {routes.map((route) => (
                    <div key={route.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-4 rounded-2xl bg-blue-50 text-blue-600">
                                <MapPin size={24} />
                            </div>
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                route.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                            }`}>
                                {route.status}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 mb-2">{route.name}</h3>
                        
                        <div className="space-y-3 mt-6 pt-6 border-t border-slate-100">
                             <div className="flex items-center justify-between text-sm font-medium">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <MapPin size={16} /> Total Stops
                                </span>
                                <span className="font-bold text-slate-700">{route.stops}</span>
                             </div>
                             <div className="flex items-center justify-between text-sm font-medium">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <Users size={16} /> Students
                                </span>
                                <span className="font-bold text-slate-700">{route.students}</span>
                             </div>
                             <div className="flex items-center justify-between text-sm font-medium">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <Clock size={16} /> Pickup Time
                                </span>
                                <span className="font-bold text-slate-700">{route.pickup}</span>
                             </div>
                        </div>

                         <button className="w-full mt-6 py-3 rounded-xl bg-slate-50 text-slate-600 font-bold text-sm hover:bg-[#0B1120] hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-[#0B1120] group-hover:text-white">
                            View Details <ArrowRight size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransportRoutes;
