import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center">
      <div className="max-w-md">
        <img 
          src="https://abs.com.al/static/media/not-found.24459f505124a66153f7.gif" 
          alt="404 Not Found" 
          className="w-full h-auto object-contain rounded-lg " 
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-6">Oops! Page Not Found</h1>
        <p className="text-gray-600 mt-2">The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <button 
          onClick={() => navigate("/home")} 
          className="mt-5 px-6 py-3 bg-green-800 text-white text-lg font-semibold rounded-lg shadow-md transition-all transform hover:scale-105 active:scale-95 animate-bounce 
          hover:bg-gradient-to-r from-blue-800 to-blue-500"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
