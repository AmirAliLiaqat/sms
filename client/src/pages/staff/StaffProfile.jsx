import React from "react";
import { User, Mail, Phone, MapPin, Briefcase, Calendar } from "lucide-react";

const StaffProfile = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-black text-[#0B1120]">My Profile</h1>
                <p className="text-slate-400 font-medium">Manage your personal information</p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#0B1120] to-slate-900"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start pt-12">
                     <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl bg-slate-200 flex items-center justify-center text-4xl font-black text-slate-400">
                        S
                    </div>
                    <div className="flex-1 pt-4">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Sarah Jenkins</h2>
                        <p className="text-slate-500 font-bold text-lg mb-6">Senior Administrative Officer</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-slate-600 font-medium">
                                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                                        <Mail size={18} />
                                    </div>
                                    sarah.jenkins@sms.edu
                                </div>
                                <div className="flex items-center gap-3 text-slate-600 font-medium">
                                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                                        <Phone size={18} />
                                    </div>
                                    +1 (555) 123-4567
                                </div>
                                 <div className="flex items-center gap-3 text-slate-600 font-medium">
                                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                                        <MapPin size={18} />
                                    </div>
                                    123 School Lane, Education City
                                </div>
                            </div>
                             <div className="space-y-4">
                                <div className="flex items-center gap-3 text-slate-600 font-medium">
                                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                                        <Briefcase size={18} />
                                    </div>
                                    Administration Dept.
                                </div>
                                <div className="flex items-center gap-3 text-slate-600 font-medium">
                                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                                        <Calendar size={18} />
                                    </div>
                                    Joined: Aug 15, 2019
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffProfile;
