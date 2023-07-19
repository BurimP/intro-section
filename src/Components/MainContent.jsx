import React from "react";
import LeftMain from "./LeftMain";
import bigImg from "../images/image-hero-desktop.png";

const MainContent = () => {
  return (
    <div className="main-content">
      <LeftMain />
      <div className="bigImg">
        <img src={bigImg} alt="" />
      </div>
      {/* <img src={bigImg} alt="" className="bigImg" /> */}
    </div>
  );
};

export default MainContent;
