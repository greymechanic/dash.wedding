import "./App.scss";
import woodside1 from "./images/woodside-1.jpg";
import woodside2 from "./images/woodside-2.jpg";

function App() {
  return (
    <div className="home page">
      <header className="marquee">
        <p>June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
      </header>
      <div className="main">
        <h2>save the date</h2>
        <h1>
          LAUREN & <br />
          ANDREW <br />
          ARE <br />
          GETTING <br />
          MARRIED
        </h1>
        <h2 className="tagline">at their home in berkeley, ca</h2>
        <div className="background top-image">
          <p className="caption">1151 Woodside Rd — May 1956</p>
          <img src={woodside1} />
        </div>
        <div className="background bottom-image">
          {/* <p className="caption">1151 Woodside Rd - May 1956</p> */}
          <img src={woodside2} />
        </div>
      </div>
      <footer className="marquee-r">
        <p>June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
        <p aria-hidden="true">June 4, 2022</p>
      </footer>
    </div>
  );
}

export default App;
