import "./App.scss";
import Deets from "./components/Deets";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

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
        <Route path="/" element={<Login/>} />
        <Route path="/details" element={<Deets/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;