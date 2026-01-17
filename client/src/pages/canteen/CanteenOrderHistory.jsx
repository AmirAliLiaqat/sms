import React from "react";
import { Clock, User } from "lucide-react";

const CanteenOrderHistory = () => {
    const orders = [
        { id: "ORD-001", items: ["Chicken Sandwich", "Coke"], total: "$6.50", user: "John Doe (Student)", date: "Today, 12:30 PM", status: "Completed" },
        { id: "ORD-002", items: ["Veg Burger"], total: "$4.50", user: "Sarah Smith (Student)", date: "Today, 12:15 PM", status: "Completed" },
        { id: "ORD-003", items: ["Fruit Salad", "Water"], total: "$4.50", user: "Michael Brown (Faculty)", date: "Today, 11:45 AM", status: "Completed" },
        { id: "ORD-004", items: ["Coffee", "Muffin"], total: "$5.00", user: "Emily Davis (Staff)", date: "Today, 10:00 AM", status: "Completed" },
    ];

    return (
        <div className="space-y-8">
            <div>
                 <h1 className="text-3xl font-black text-[#0B1120]">Order History</h1>
                <p className="text-slate-400 font-medium">Recent transactions and orders</p>
            </div>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                             <div className="p-3 bg-slate-50 text-slate-500 rounded-xl font-black text-xs h-fit">
                                 {order.id}
                             </div>
                             <div>
                                 <h3 className="font-bold text-slate-800 text-lg mb-1">{order.items.join(", ")}</h3>
                                 <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                     <span className="flex items-center gap-1"><User size={14} /> {order.user}</span>
                                     <span className="flex items-center gap-1"><Clock size={14} /> {order.date}</span>
                                 </div>
                             </div>
                        </div>
                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2">
                             <span className="text-xl font-black text-green-600">{order.total}</span>
                             <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-lg">
                                 {order.status}
                             </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CanteenOrderHistory;
