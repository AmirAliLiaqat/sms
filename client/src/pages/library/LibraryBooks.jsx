import React, { useState } from "react";
import { Search, Filter, MoreVertical, Book } from "lucide-react";

const LibraryBooks = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const books = [
        { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0446310789", category: "Fiction", status: "Available", added: "Jan 10, 2023" },
        { id: 2, title: "1984", author: "George Orwell", isbn: "978-0451524935", category: "Fiction", status: "Issued", added: "Feb 15, 2023" },
        { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0743273565", category: "Classics", status: "Available", added: "Mar 05, 2023" },
        { id: 4, title: "A Brief History of Time", author: "Stephen Hawking", isbn: "978-0553380163", category: "Science", status: "Available", added: "Apr 20, 2023" },
        { id: 5, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "978-0374533557", category: "Psychology", status: "Lost", added: "May 12, 2023" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                     <h1 className="text-3xl font-black text-[#0B1120]">Book Management</h1>
                    <p className="text-slate-400 font-medium">Catalog and manage library inventory</p>
                </div>
                 <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 outline-none focus:border-[#FFD60A] w-64"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Book Details</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">ISBN</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {books.filter(b => b.title.toLowerCase().includes(searchTerm.toLowerCase())).map((book) => (
                                <tr key={book.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                                <Book size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-800">{book.title}</div>
                                                <div className="text-xs text-slate-500 font-medium">by {book.author}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-600">
                                        {book.isbn}
                                    </td>
                                    <td className="px-6 py-4">
                                         <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wide">
                                            {book.category}
                                         </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                                            book.status === 'Available' ? 'bg-green-100 text-green-700' :
                                            book.status === 'Issued' ? 'bg-orange-100 text-orange-700' :
                                            'bg-rose-100 text-rose-700'
                                        }`}>
                                            {book.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LibraryBooks;
