import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Trace from './Trace';
import Report from './Report';
import About from './About';


const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Trace",
      element: (
        <>
          <Navbar />
          <Trace />
        </>
      ),
    },
    {
      path: "/Report",
      element: (
        <>
          <Navbar />
          <Report />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
