import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router';

export const AppContext = createContext();

const AllContext = ({ children }) => {
  const [role, setRole] = useState("admin");
  
  // Retrieve backend URL from environment variables
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Log a warning if the environment variable is not set
  if (!backendUrl) {
    console.warn('VITE_BACKEND_URL is not defined in the .env file');
  }

  const value = { role, setRole, backendUrl };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AllContext;
