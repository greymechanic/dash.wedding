import woodside1 from "../images/woodside-1.jpg";
import woodside2 from "../images/woodside-2.jpg";
import Marquee from "./Marquee";
import MarqueeReverse from "./MarqueeReverse";

function LandingPage() {
  return (
    <div className="home page">
      <Marquee />
    <div className="main">
      <h3>save the date</h3>
      <h1>
        LAUREN & <br />
        ANDREW <br />
        ARE <br />
        GETTING <br />
        MARRIED
      </h1>
      <h3 className="tagline">at their home in berkeley, ca</h3>
      <div className="background top-image">
        <p className="caption">1151 Woodside Rd — May 1956</p>
        <img src={woodside1} />
      </div>
      <div className="background bottom-image">
        {/* <p className="caption">1151 Woodside Rd - May 1956</p> */}
        <img src={woodside2} />
      </div>
    </div>
    <MarqueeReverse/>
  </div>
  );
}

export default LandingPage;