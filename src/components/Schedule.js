import Marquee from "./Marquee";

function Schedule() {
  return (
    <div>
      <div className="container bright">
        <section>
          <h2>Schedule</h2>
          <div className="content">
            <div className="detailsTable">
              <div className="row">
                <div className="cell label">
                  <p><b>Friday June 3</b></p>
                </div>
                <div className="cell detail">
                  <p><b>8PM:</b> Drinks @ <a href="https://goo.gl/maps/W8miAufyD2CoaMqr5" target="_blank">Skates on the Bay</a></p>
                </div>
              </div>
              <div className="row">
                <div className="cell label">
                  <p><b>Saturday June 4</b></p>
                </div>
                <div className="cell detail">
                <p><b>4:30PM:</b> Welcome drink</p>
                <p><b>5:00PM:</b> Ceremony</p>
                <p><b>5:15-11PM:</b>Food, Drinks, Dancing</p>
                </div>
              </div>
              <div className="row">
                <div className="cell label">
                  <p><b>Sunday June 5</b></p>
                </div>
                <div className="cell detail">
                  <p><b>11AM-2PM:</b>Hangover brunch @ <a href="https://goo.gl/maps/H7yEEogJ2i4WZmRh8" target="_blank">our house</a></p>
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

export default Schedule;