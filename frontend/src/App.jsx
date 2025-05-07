import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import Dashboard from './pages/Dashboard';
import AllUser from './pages/AllUser';
import SignIn from './pages/SignIn';
import { ToastContainer,  } from 'react-toastify';


const AppLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="text-4xl">
      {isLoginPage ? (
        <Routes>
          <Route path="/login" element={<SignIn />} />
        </Routes>
      ) : (
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/allusers" element={<AllUser />} />
          </Routes>
        </Sidebar>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
      <ToastContainer/>
    </Router>
  );
};

export default App;
