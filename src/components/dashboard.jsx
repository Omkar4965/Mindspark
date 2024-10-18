import React from 'react';
import { User } from 'lucide-react';

const users = [
  { id: 1, name: "John Doe", imageUrl: "https://via.placeholder.com/150/4A90E2/FFFFFF?text=JD" },
  { id: 2, name: "Jane Smith", imageUrl: "https://via.placeholder.com/150/50E3C2/FFFFFF?text=JS" },
  { id: 3, name: "Alice Johnson", imageUrl: "https://via.placeholder.com/150/F5A623/FFFFFF?text=AJ" },
  { id: 4, name: "Bob Williams", imageUrl: "https://via.placeholder.com/150/D0021B/FFFFFF?text=BW" },
  { id: 5, name: "Emma Brown", imageUrl: "https://via.placeholder.com/150/7ED321/FFFFFF?text=EB" },
  { id: 6, name: "Michael Davis", imageUrl: "https://via.placeholder.com/150/9013FE/FFFFFF?text=MD" },
];

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-400">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              // Navigate to the user's prescriptions and reload the page
              window.location.href = `/prescriptions/${user.id}`;
              // Uncomment the line below if you want to reload the current page (not recommended)
              // window.location.reload();
            }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="relative">
              <img
                src={user.imageUrl}
                alt={user.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <User className="h-24 w-24 text-white opacity-75" />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-yellow-400 text-center">{user.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
