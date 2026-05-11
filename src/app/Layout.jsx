// import React from 'react';
import './globals.css';
import NavBar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen app-background">
      <NavBar />
      <Outlet /> {/* This placeholder active Child routes are render here.*/}
    </div>
  );
};

export default Layout;
