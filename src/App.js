import "./App.scss";
import React from 'react';
import Deets from "./components/Deets";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import { useCookies } from "react-cookie";

function App() {

  var vh = window.innerHeight * 0.01,
    delay = 250, // delay between calls
    throttled = false; // are we currently throttled?
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  function setHeight() {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('resize', function () {
    // only run if we're not throttled
    if (!throttled) {
      setHeight();
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, delay);
    }
  });

  setHeight();
  return (
    <div className="wrapper">
      <LandingPage />
      <Routes>
        <Route 
          path="/"
          element={
            <RequireAuth>
              <Deets/>
            </RequireAuth>
          } />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
}

function RequireAuth({ children }) {
  const [cookies] = useCookies(["pw"]);
  const secret = "dash";
  const hasAuth = cookies.pw !== undefined ? cookies.pw.toLowerCase() === secret : false;

  let location = useLocation();
  if (!hasAuth) {
    // Redirect to the home page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;