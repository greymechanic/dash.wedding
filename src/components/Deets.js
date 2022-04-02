import Details from "./Details";
import FAQ from "./FAQ";
import Schedule from "./Schedule";
import Userfront from "@userfront/react";

const userData = JSON.stringify(Userfront.user, null, 2);

function Deets() {
  return (
    <div>
      <div>
        <pre>{userData}</pre>
      </div>
      <Details />
      <FAQ />
      <Schedule />
    </div>
  );
}

export default Deets;