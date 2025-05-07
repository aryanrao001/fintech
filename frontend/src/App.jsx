import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import Dashboard from './pages/Dashboard';
import AllUser from './pages/AllUser';
import SignIn from './pages/SignIn';
import { ToastContainer,  } from 'react-toastify';
import SignUp from './pages/SignUp';


const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="text-4xl">
      {isAuthPage ? (
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
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
