import React from "react";
import { TrendingUp, ShoppingBag, DollarSign, Package } from "lucide-react";

const CanteenDashboard = () => {
    const stats = [
        { title: "Today's Sales", value: "$1,245.50", change: "+12%", icon: DollarSign, color: "bg-green-500" },
        { title: "Orders", value: "156", change: "+8", icon: ShoppingBag, color: "bg-blue-500" },
        { title: "Low Stock Items", value: "4", change: "-2", icon: Package, color: "bg-rose-500" },
        { title: "Revenue (Month)", value: "$24,500", change: "+5%", icon: TrendingUp, color: "bg-purple-500" },
    ];

    const topItems = [
        { id: 1, name: "Chicken Sandwich", sales: 45, revenue: "$225" },
        { id: 2, name: "Veg Burger", sales: 38, revenue: "$190" },
        { id: 3, name: "Fruit Salad", sales: 32, revenue: "$160" },
    ];

    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-black text-[#0B1120]">Canteen Sales</h1>
                <p className="text-slate-400 font-medium">Daily sales performance and inventory</p>
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
                     <h3 className="text-xl font-black text-slate-800 mb-6">Sales Trend (Weekly)</h3>
                     <div className="h-64 flex items-end justify-between gap-4">
                         {[60, 45, 75, 50, 80, 65, 90].map((h, i) => (
                             <div key={i} className="w-full flex flex-col justify-end group">
                                 <div 
                                    className="bg-slate-100 group-hover:bg-[#FFD60A] rounded-t-xl transition-all relative overflow-hidden" 
                                    style={{ height: `${h}%` }}
                                 ></div>
                                 <span className="text-[10px] font-bold text-slate-400 text-center mt-2 uppercase tracking-wider">
                                     {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                 </span>
                             </div>
                         ))}
                     </div>
                </div>

                 <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
                    <h3 className="text-xl font-black text-slate-800 mb-6">Top Selling Items</h3>
                    <div className="space-y-6">
                        {topItems.map((item, idx) => (
                            <div key={item.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                     <span className="font-black text-slate-300 text-lg">#{idx + 1}</span>
                                     <div>
                                         <h4 className="font-bold text-slate-800">{item.name}</h4>
                                         <p className="text-xs text-slate-500 font-bold">{item.sales} sold</p>
                                     </div>
                                </div>
                                <span className="font-black text-green-600 text-sm bg-green-50 px-3 py-1 rounded-lg">{item.revenue}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CanteenDashboard;
