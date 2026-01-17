
import React from 'react';
import { Car, User, Settings, AlertCircle } from 'lucide-react';

const TransportDrivers = () => {
    const drivers = [
        { id: 1, name: "John Smith", license: "DL-987654321", phone: "+1 234 567 890", vehicle: "Bus 01", status: "Available" },
        { id: 2, name: "Mike Johnson", license: "DL-123456789", phone: "+1 234 567 891", vehicle: "Bus 04", status: "On Route" },
        { id: 3, name: "Sarah Davis", license: "DL-456123789", phone: "+1 234 567 892", vehicle: "Bus 07", status: "Available" },
    ];

     const vehicles = [
        { id: "Bus 01", model: "Volvo 9700", capacity: "45 Seats", mileage: "12,500 km", status: "Good" },
        { id: "Bus 04", model: "Mercedes Tourismo", capacity: "50 Seats", mileage: "8,200 km", status: "Maintenance Due" },
        { id: "Bus 07", model: "Scania Touring", capacity: "48 Seats", mileage: "15,100 km", status: "Good" },
    ];

    return (
        <div className="space-y-8">
            <div>
                 <h1 className="text-3xl font-black text-[#0B1120]">Drivers & Vehicles</h1>
                <p className="text-slate-400 font-medium">Manage drivers and fleet maintenance</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Drivers Section */}
                <div className="space-y-6">
                    <h2 className="text-xl font-black text-slate-800 px-2">Driver Directory</h2>
                    {drivers.map((driver) => (
                        <div key={driver.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                                {driver.name.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-800">{driver.name}</h3>
                                <p className="text-xs text-slate-500 font-bold">{driver.phone}</p>
                            </div>
                            <div className="text-right">
                                <span className={`block text-[10px] font-black uppercase tracking-widest mb-1 ${
                                    driver.status === 'Available' ? 'text-green-600' : 'text-orange-600'
                                }`}>{driver.status}</span>
                                <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
                                    {driver.vehicle}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vehicles Section */}
                 <div className="space-y-6">
                    <h2 className="text-xl font-black text-slate-800 px-2">Fleet Status</h2>
                    {vehicles.map((vehicle, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 group">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-50 text-slate-600 rounded-xl">
                                        <Car size={20} />
                                    </div>
                                    <span className="font-black text-slate-800">{vehicle.id}</span>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                    vehicle.status === 'Good' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                                }`}>
                                    {vehicle.status}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-slate-50 rounded-xl">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Model</span>
                                    <span className="font-bold text-slate-700">{vehicle.model}</span>
                                </div>
                                 <div className="p-3 bg-slate-50 rounded-xl">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Mileage</span>
                                    <span className="font-bold text-slate-700">{vehicle.mileage}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransportDrivers;
