import React from 'react';
import { Pencil, Trash2, PlusCircle } from 'lucide-react';

const prescriptions = [
  {
    id: 1,
    title: "Amoxicillin",
    imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Amoxicillin",
  },
  {
    id: 2,
    title: "Lisinopril",
    imageUrl: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Lisinopril",
  },
  {
    id: 3,
    title: "Metformin",
    imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Metformin",
  },
  {
    id: 4,
    title: "Simvastatin",
    imageUrl: "https://via.placeholder.com/150/FFFF00/000000?text=Simvastatin",
  },
  {
    id: 5,
    title: "Omeprazole",
    imageUrl: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Omeprazole",
  },
  {
    id: 6,
    title: "Levothyroxine",
    imageUrl: "https://via.placeholder.com/150/00FFFF/000000?text=Levothyroxine",
  },
];

const PrescriptionDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-400">Prescriptions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {prescriptions.map((prescription) => (
          <div key={prescription.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src={prescription.imageUrl}
                alt={prescription.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="bg-yellow-400 p-2 rounded-full text-gray-800 hover:bg-yellow-300 transition-colors duration-300">
                  <Pencil className="h-4 w-4" />
                </button>
                <button className="bg-red-500 p-2 rounded-full text-white hover:bg-red-400 transition-colors duration-300">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-yellow-400 text-center">{prescription.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-8 right-8">
        <button className="bg-yellow-400 text-gray-900 rounded-full p-4 shadow-lg hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
          <PlusCircle className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default PrescriptionDashboard;