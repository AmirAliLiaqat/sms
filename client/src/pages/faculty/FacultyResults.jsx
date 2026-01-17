import React, { useState } from "react";
import { UploadCloud, FileText, Check, AlertCircle } from "lucide-react";

const FacultyResults = () => {
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [examType, setExamType] = useState("mid-term");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-[#0B1120]">Upload Results</h1>
        <p className="text-slate-400 font-medium">Publish exam results for your classes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Select Examination</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Class & Section</label>
                <select 
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-[#FFD60A] transition-colors"
                >
                  <option value="10-A">Class 10-A (Mathematics)</option>
                  <option value="10-B">Class 10-B (Mathematics)</option>
                  <option value="9-A">Class 9-A (Physics)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Exam Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setExamType('mid-term')}
                    className={`p-3 rounded-xl border-2 font-bold text-sm transition-all ${
                      examType === 'mid-term' 
                        ? 'border-[#0B1120] bg-[#0B1120] text-white' 
                        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                    }`}
                  >
                    Mid Term
                  </button>
                  <button 
                    onClick={() => setExamType('final')}
                    className={`p-3 rounded-xl border-2 font-bold text-sm transition-all ${
                      examType === 'final' 
                        ? 'border-[#0B1120] bg-[#0B1120] text-white' 
                        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                    }`}
                  >
                    Final Exam
                  </button>
                </div>
              </div>
            </div>
          </div>

           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
             <h3 className="text-xl font-bold text-slate-800 mb-6">Instruction Guide</h3>
             <ul className="space-y-4">
               <li className="flex gap-3 text-sm text-slate-500 font-medium">
                 <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">1</div>
                 Download the template CSV file.
               </li>
               <li className="flex gap-3 text-sm text-slate-500 font-medium">
                 <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">2</div>
                 Fill in the student marks accurately.
               </li>
               <li className="flex gap-3 text-sm text-slate-500 font-medium">
                 <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">3</div>
                 Upload the file to publish results.
               </li>
             </ul>
             <button className="mt-6 text-sm font-bold text-blue-600 hover:underline">
               Download CSV Template
             </button>
           </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Upload File</h3>
          
          <div className="flex-1 border-3 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-12 text-center hover:bg-slate-50 transition-colors group cursor-pointer relative">
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer" 
              accept=".csv,.xlsx"
              onChange={handleFileChange}
            />
            <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center transition-colors ${file ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:shadow-md'}`}>
               {file ? <Check size={32} /> : <UploadCloud size={32} />}
            </div>
            {file ? (
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">{file.name}</h4>
                <p className="text-sm text-slate-400 font-medium">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            ) : (
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Drag & Drop or Click</h4>
                <p className="text-sm text-slate-400 font-medium max-w-[200px] mx-auto">
                  Upload PDF or CSV files containing result data
                </p>
              </div>
            )}
          </div>

          <div className="mt-8">
            <button 
              disabled={!file}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                file 
                ? 'bg-[#FFD60A] text-[#0B1120] hover:shadow-lg hover:-translate-y-1' 
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              Publish Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyResults;
