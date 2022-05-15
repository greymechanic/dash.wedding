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
                <div className="cell label wide">
                  <p><b>FRIDAY JUNE 3</b></p>
                </div>
                <div className="cell detail">
                  <p><b>7:30PM:</b> Drinks @ <a href="https://g.page/GilmanBrewingCompany?share" target="_blank">Gilman Brewing Company</a></p>
                </div>
              </div>
              <div className="row">
                <div className="cell label wide">
                  <p><b>SATURDAY JUNE 4</b></p>
                </div>
                <div className="cell detail">
                <p><b>4:30PM:</b> Wedding!</p>
                </div>
              </div>
              <div className="row">
                <div className="cell label wide">
                  <p><b>SUNDAY JUNE 5</b></p>
                </div>
                <div className="cell detail">
                  <p><b>11AM: </b>Hangover brunch @ <a href="https://goo.gl/maps/H7yEEogJ2i4WZmRh8" target="_blank">our house</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="rsvp">
            <a href="https://pp.events/a8PNLZz0" type="button" target="_blank">rsvp</a>
          </div>
        </section>
      </div>
      <Marquee />
    </div>
  );
}

export default Schedule;