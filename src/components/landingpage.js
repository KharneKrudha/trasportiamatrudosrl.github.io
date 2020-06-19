import React, { Component } from "react";
import Footers from "./footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing-main">
          <div class="row">
            <div class="column">
              <img src="/img/2.jpg" alt="2 img" />
              <img src="/img/plain.jpg" alt="4 img" />
              <img src="/img/3.jpg" alt="5 img" />
            </div>

            <div class="column">
              <img src="/img/7.jpg" alt="7 img" />
              <img src="/img/plain.jpg" alt="10 img" />
              <img src="/img/8.jpg" alt="8 img" />
              <img src="/img/6.jpg" alt="6 img" />
            </div>

            <div class="column">
              <img src="/img/11.jpg" alt="9 img" />
              <img src="/img/plain.jpg" alt="1 img" />
              <img src="/img/9.jpg" alt="5 img" />
            </div>

            <div class="column">
              <img src="/img/8.jpg" alt="10 img" />
              <img src="/img/plain.jpg" alt="1 img" />
              <img src="/img/6.jpg" alt="6 img" />
              <img src="/img/1.jpg" alt="8 img" />
            </div>
          </div>
          <div className="landing-vid">
            <h1 className="landing-text">Trasporti Amatrudo s.r.l.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
