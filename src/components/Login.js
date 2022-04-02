import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import Marquee from "./Marquee";
import { useNavigate } from "react-router-dom"; 

function Login() {
  let navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["pw"]);
  const [name, setPassword] = useState("");

  const onChange = (pw) => {
    setCookie("pw", pw, { path: "/" });
  };
  return (

    <div>
      <div className="container bright">
        <section>
          <h2>Details</h2>
          <div className="content">
            <div className="detailsTable">
              <div className="row">
                <div className="cell label pw">
                  <p><b>Password</b></p>
                </div>
                <div className="cell detail pw">
                  <input
                    className="password"
                    type="password"
                    placeholder="open sesame!"
                    value={name}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      onChange(e.target.value);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        navigate("/");
                      }
                  }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Marquee />
    </div>
  );
}

export default Login;