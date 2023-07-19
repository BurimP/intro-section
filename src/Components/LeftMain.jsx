import React from "react";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

const LeftMain = () => {
  return (
    <div className="left-main">
      <div className="left-top">
        <h1>
          Make <br></br> remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
      </div>
      <div className="left-bottom">
        <img src={databiz} alt="" />
        <img src={audiophile} alt="" />
        <img src={meet} alt="" />
        <img src={maker} alt="" />
      </div>
    </div>
  );
};

export default LeftMain;
