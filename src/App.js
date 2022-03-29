import "./App.scss";
import Details from "./components/Details";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

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
      <Details />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
