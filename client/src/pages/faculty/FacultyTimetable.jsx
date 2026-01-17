import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";

const FacultyTimetable = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  const schedule = {
      "Monday": [
          { time: "09:00 - 10:00", subject: "Mathematics", class: "10-A", room: "101", color: "bg-blue-100 text-blue-700 border-blue-200" },
          { time: "11:00 - 12:00", subject: "Mathematics", class: "10-B", room: "102", color: "bg-purple-100 text-purple-700 border-purple-200" },
          { time: "13:00 - 14:00", subject: "Physics", class: "9-A", room: "Lab 3", color: "bg-green-100 text-green-700 border-green-200" },
      ],
      "Tuesday": [
          { time: "10:00 - 11:00", subject: "Physics", class: "9-B", room: "Lab 3", color: "bg-orange-100 text-orange-700 border-orange-200" },
          { time: "12:00 - 13:00", subject: "Mathematics", class: "10-A", room: "101", color: "bg-blue-100 text-blue-700 border-blue-200" },
      ],
       "Wednesday": [
          { time: "09:00 - 10:00", subject: "Mathematics", class: "10-A", room: "101", color: "bg-blue-100 text-blue-700 border-blue-200" },
          { time: "13:00 - 14:00", subject: "Physics", class: "9-A", room: "Lab 3", color: "bg-green-100 text-green-700 border-green-200" },
      ],
        "Thursday": [
          { time: "11:00 - 12:00", subject: "Mathematics", class: "10-B", room: "102", color: "bg-purple-100 text-purple-700 border-purple-200" },
          { time: "10:00 - 11:00", subject: "Physics", class: "9-B", room: "Lab 3", color: "bg-orange-100 text-orange-700 border-orange-200" },
      ],
        "Friday": [
           { time: "09:00 - 10:00", subject: "Mathematics", class: "10-A", room: "101", color: "bg-blue-100 text-blue-700 border-blue-200" },
          { time: "10:00 - 11:00", subject: "Physics", class: "9-B", room: "Lab 3", color: "bg-orange-100 text-orange-700 border-orange-200" },
      ]
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Weekly Schedule</h1>
        <p className="text-slate-400 font-medium">Your class timetable</p>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar">
          {days.map((day) => (
              <button 
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                    selectedDay === day 
                    ? "bg-[#0B1120] text-white shadow-lg shadow-slate-300" 
                    : "bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                  {day}
              </button>
          ))}
      </div>

      <div className="space-y-4">
        {schedule[selectedDay]?.length > 0 ? (
            schedule[selectedDay].map((slot, index) => (
                 <div key={index} className="bg-white p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-32 shrink-0 flex flex-col justify-center">
                        <span className="text-sm font-bold text-slate-400 mb-1 flex items-center gap-2">
                            <Clock size={16} />
                            Time
                        </span>
                        <span className="font-bold text-slate-800">{slot.time}</span>
                    </div>

                     <div className="flex-1 border-l-2 border-slate-100 pl-6 border-dashed">
                        <h3 className="text-lg font-bold text-slate-800 mb-1">{slot.subject}</h3>
                        <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                             <span className="bg-slate-100 px-2 py-0.5 rounded text-xs uppercase tracking-wide font-bold">
                                {slot.class}
                             </span>
                             <span className="flex items-center gap-1">
                                 <MapPin size={16} />
                                 {slot.room}
                             </span>
                        </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border ${slot.color}`}>
                        Active
                    </div>
                </div>
            ))
        ) : (
            <div className="text-center py-12 bg-white rounded-[2rem] border border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">No classes scheduled for {selectedDay}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default FacultyTimetable;
