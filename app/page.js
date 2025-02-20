"use client";
import { useState } from 'react';

export default function StudentTable() {
  // Data dummy mahasiswa
  const students = [
    { id: 1, nim: "2021001", nama: "Ananda Putra", gender: "L", prodi: "Teknik Informatika", kelas: "TI-3A", semester: 4, alamat: "Jl. Merdeka No. 12, Jakarta", hobby: "Coding", citaCita: "Software Engineer" },
    { id: 2, nim: "2021002", nama: "Budi Santoso", gender: "L", prodi: "Sistem Informasi", kelas: "SI-3B", semester: 4, alamat: "Jl. Pahlawan No. 23, Bandung", hobby: "Futsal", citaCita: "Data Scientist" },
    { id: 3, nim: "2021003", nama: "Citra Dewi", gender: "P", prodi: "Teknik Informatika", kelas: "TI-3A", semester: 4, alamat: "Jl. Kenanga No. 45, Surabaya", hobby: "Membaca", citaCita: "UI/UX Designer" },
    { id: 4, nim: "2021004", nama: "Dimas Rizky", gender: "L", prodi: "Sistem Informasi", kelas: "SI-3A", semester: 4, alamat: "Jl. Mawar No. 78, Yogyakarta", hobby: "Fotografi", citaCita: "Business Analyst" },
    { id: 5, nim: "2021005", nama: "Elsa Putri", gender: "P", prodi: "Manajemen Informatika", kelas: "MI-3B", semester: 4, alamat: "Jl. Melati No. 56, Semarang", hobby: "Menyanyi", citaCita: "Project Manager" },
    { id: 6, nim: "2021006", nama: "Faisal Rahman", gender: "L", prodi: "Teknik Informatika", kelas: "TI-3B", semester: 4, alamat: "Jl. Dahlia No. 34, Malang", hobby: "Gaming", citaCita: "Game Developer" },
    { id: 7, nim: "2021007", nama: "Gita Nirmala", gender: "P", prodi: "Sistem Informasi", kelas: "SI-3C", semester: 4, alamat: "Jl. Anggrek No. 89, Medan", hobby: "Menari", citaCita: "System Analyst" },
    { id: 8, nim: "2021008", nama: "Hadi Nugroho", gender: "L", prodi: "Manajemen Informatika", kelas: "MI-3A", semester: 4, alamat: "Jl. Cendana No. 67, Makassar", hobby: "Basket", citaCita: "Network Engineer" },
    { id: 9, nim: "2021009", nama: "Indah Permata", gender: "P", prodi: "Teknik Informatika", kelas: "TI-3C", semester: 4, alamat: "Jl. Flamboyan No. 21, Palembang", hobby: "Memasak", citaCita: "Cybersecurity Analyst" },
    { id: 10, nim: "2021010", nama: "Joko Prasetyo", gender: "L", prodi: "Sistem Informasi", kelas: "SI-3D", semester: 4, alamat: "Jl. Bougenville No. 43, Denpasar", hobby: "Traveling", citaCita: "IT Consultant" }
  ];

  const [expandedId, setExpandedId] = useState(null);

  // Toggle expandable row
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 tracking-wide">
        DATA MAHASISWA
      </h1>
      
      {/* Desktop View - Traditional Table */}
      <div className="hidden md:block overflow-x-auto shadow-xl rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-4 px-6 text-left font-bold text-base">No</th>
              <th className="py-4 px-6 text-left font-bold text-base">NIM</th>
              <th className="py-4 px-6 text-left font-bold text-base">Nama</th>
              <th className="py-4 px-6 text-left font-bold text-base">Gender</th>
              <th className="py-4 px-6 text-left font-bold text-base">Prodi</th>
              <th className="py-4 px-6 text-left font-bold text-base">Kelas</th>
              <th className="py-4 px-6 text-left font-bold text-base">Semester</th>
              <th className="py-4 px-6 text-left font-bold text-base">Alamat</th>
              <th className="py-4 px-6 text-left font-bold text-base">Hobby</th>
              <th className="py-4 px-6 text-left font-bold text-base">Cita-cita</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {students.map((student, index) => (
              <tr key={student.id} className={`border-b border-gray-200 hover:bg-blue-50 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="py-3 px-6 text-base">{student.id}</td>
                <td className="py-3 px-6 font-medium text-base">{student.nim}</td>
                <td className="py-3 px-6 font-medium text-base">{student.nama}</td>
                <td className="py-3 px-6 text-base">{student.gender === 'L' ? 'Laki-laki' : 'Perempuan'}</td>
                <td className="py-3 px-6 text-base">{student.prodi}</td>
                <td className="py-3 px-6 text-base">{student.kelas}</td>
                <td className="py-3 px-6 text-center text-base">{student.semester}</td>
                <td className="py-3 px-6 max-w-xs text-base">{student.alamat}</td>
                <td className="py-3 px-6 text-base">{student.hobby}</td>
                <td className="py-3 px-6 text-base">{student.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile View - Grid Cards */}
      <div className="md:hidden space-y-4">
        {students.map((student) => (
          <div key={student.id} className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200">
            {/* Header with basic info */}
            <div 
              className="bg-blue-600 p-4 flex justify-between items-center cursor-pointer text-white"
              onClick={() => toggleExpand(student.id)}
            >
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="font-bold text-base">#{student.id}</div>
                <div className="font-bold text-base">{student.nim}</div>
                <div className="font-bold text-base">{student.nama}</div>
              </div>
              <svg 
                className={`w-6 h-6 transform transition-transform ${expandedId === student.id ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Expandable detail */}
            {expandedId === student.id && (
              <div className="p-5 grid grid-cols-2 gap-x-6 gap-y-4 text-base border-t">
                <div className="grid grid-cols-1">
                  <span className="font-bold text-gray-700">Gender:</span>
                  <span className="text-gray-800">{student.gender === 'L' ? 'Laki-laki' : 'Perempuan'}</span>
                </div>
                
                <div className="grid grid-cols-1">
                  <span className="font-bold text-gray-700">Prodi:</span>
                  <span className="text-gray-800">{student.prodi}</span>
                </div>
                
                <div className="grid grid-cols-1">
                  <span className="font-bold text-gray-700">Kelas:</span>
                  <span className="text-gray-800">{student.kelas}</span>
                </div>
                
                <div className="grid grid-cols-1">
                  <span className="font-bold text-gray-700">Semester:</span>
                  <span className="text-gray-800">{student.semester}</span>
                </div>
                
                <div className="col-span-2 grid grid-cols-1 mt-2">
                  <span className="font-bold text-gray-700">Alamat:</span>
                  <span className="text-gray-800">{student.alamat}</span>
                </div>
                
                <div className="grid grid-cols-1">
                  <span className="font-bold text-gray-700">Hobby:</span>
                  <span className="text-gray-800">{student.hobby}</span>
                </div>
                
                <div className="grid grid-cols-1">
                  <span className="font-bold text-gray-700">Cita-cita:</span>
                  <span className="text-gray-800">{student.citaCita}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}