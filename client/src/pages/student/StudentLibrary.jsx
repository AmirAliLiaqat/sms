import React from "react";
import { BookOpen, Clock, AlertCircle } from "lucide-react";

const issuedBooks = [
  { id: "B1001", title: "Introduction to Algorithms", author: "Cormen", issuedDate: "Jan 05, 2025", dueDate: "Jan 19, 2025", status: "Due Soon" },
  { id: "B1042", title: "Clean Code", author: "Robert C. Martin", issuedDate: "Jan 10, 2025", dueDate: "Jan 24, 2025", status: "Active" },
];

const history = [
  { id: "B0921", title: "Design Patterns", author: "Gang of Four", returnDate: "Dec 20, 2024", fine: 0 },
  { id: "B0855", title: "Operating System Concepts", author: "Silberschatz", returnDate: "Nov 15, 2024", fine: 10 },
];

const StudentLibrary = () => {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">My Library</h1>
        <p className="text-slate-400 font-medium">Track your issued books.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           {/* Currently Issued */}
           <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
             <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <BookOpen size={20} className="text-[#FFD60A]" />
               Currently Issued
             </h3>
             
             <div className="space-y-4">
               {issuedBooks.map((book, idx) => (
                 <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-16 bg-white shadow-sm border border-slate-200 rounded-md flex items-center justify-center">
                       <BookOpen size={20} className="text-slate-300" />
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-800">{book.title}</h4>
                       <p className="text-xs text-slate-500 font-medium italic">by {book.author}</p>
                       <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">ID: {book.id}</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                     <div className="text-right">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Due Date</p>
                       <p className={`text-sm font-black ${book.status === 'Due Soon' ? 'text-amber-500' : 'text-slate-700'}`}>
                         {book.dueDate}
                       </p>
                     </div>
                     <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                       book.status === 'Due Soon' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                     }`}>
                       {book.status}
                     </span>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* History */}
           <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
             <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Clock size={20} className="text-slate-400" />
               Reading History
             </h3>
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="border-b border-slate-100">
                     <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Book Details</th>
                     <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Returned On</th>
                     <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Fine Paid</th>
                   </tr>
                 </thead>
                 <tbody>
                   {history.map((item, idx) => (
                     <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                       <td className="p-4">
                         <div className="font-bold text-slate-700">{item.title}</div>
                         <div className="text-[10px] text-slate-400">{item.id}</div>
                       </td>
                       <td className="p-4 text-sm font-medium text-slate-600">{item.returnDate}</td>
                       <td className="p-4 text-sm font-bold text-slate-800 text-right">
                         {item.fine > 0 ? <span className="text-rose-500">${item.fine}</span> : <span className="text-green-500">-</span>}
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
           <div className="bg-[#0B1120] rounded-[2rem] p-8 text-white">
             <h3 className="text-lg font-bold mb-4">Library Rules</h3>
             <ul className="space-y-3 text-sm text-slate-300 font-medium list-disc list-inside leading-relaxed">
               <li>Books can be retained for 14 days.</li>
               <li>Late return fine is $1 per day.</li>
               <li>Lost books must be replaced or paid for.</li>
               <li>Maximum 3 books at a time.</li>
             </ul>
           </div>
           
           <div className="bg-amber-50 rounded-[2rem] p-8 text-amber-900 border border-amber-100">
             <div className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest text-xs text-amber-600">
               <AlertCircle size={14} />
               Alert
             </div>
             <p className="text-sm font-medium">
               New arrival of "Artificial Intelligence: A Modern Approach" is now available in Section C.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLibrary;
