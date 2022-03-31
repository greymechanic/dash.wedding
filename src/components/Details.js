import Marquee from "./Marquee";

function Details() {
  return (
    <div>
      <div className="container bright">
        <section>
          <h2>Details</h2>
          <div className="content">
            <div className="detailsTable">
              <div className="row">
                <div className="cell label">
                  <p><b>WHEN</b></p>
                </div>
                <div className="cell detail">
                  <p>June 4, 2022 @ 4PM</p>
                </div>
              </div>
              <div className="row">
                <div className="cell label">
                  <p><b>WHERE</b></p>
                </div>
                <div className="cell detail">
                  <p><a href="https://goo.gl/maps/H7yEEogJ2i4WZmRh8" target="_blank">1151 Woodside Rd Berkeley, CA 94708</a></p>
                </div>
              </div>
              <div className="row">
                <div className="cell label">
                  <p><b>DRESS</b></p>
                </div>
                <div className="cell detail">
                  <p>Anything goes, <a href="#dress-code">really</a>!</p>
                </div>
              </div>
              <div className="row">
                <div className="cell label">
                  <p><b>GIFTS</b></p>
                </div>
                <div className="cell detail">
                <p><a href="#" target="_blank">View our registry</a></p>
                </div>
              </div>
              <div className="row">
                <div className="cell label">
                  <p><b>RSVP</b></p>
                </div>
                <div className="cell detail">
                  <p>Please <a href="#" target="_blank">RSVP</a> by May 1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rsvp">
            <a href="#" type="button" target="_blank">RSVP</a>
          </div>
        </section>
      </div>
      <Marquee />
    </div>
  );
}

export default Details;