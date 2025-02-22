import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Requests() {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* REQUESTS CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-500">Requests Page</h1>
        <p className="text-lg text-gray-600 mt-4">Your friend requests go here...</p>
      </div>
    </div>
  );
}