import "./App.scss";
import Deets from "./components/Deets";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Reset from "./components/Reset";
import Userfront from "@userfront/react";

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
        <Route path="/signup" element={<Signup/>} />
        <Route path="/reset" element={<Reset/>} />
      </Routes>
      <Footer />
    </div>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  console.log(location);
  if (!Userfront.tokens.accessToken) {
    // Redirect to the home page
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default App;