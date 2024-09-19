

import Optin from "./Optin/Optin";
import Preloader from "./Preloader/Preloader";
import Timer from "./Countdown/Timer";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

export default ComingSoon;
