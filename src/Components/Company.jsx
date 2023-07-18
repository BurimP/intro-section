import React, { useState, useEffect, useRef } from "react";
import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";

const Company = () => {
  const [newClass, setNewClass] = useState("dropdown-menu");
  const dropdownRef = useRef(null);

  const [arrow, setArrow] = useState(arrowUp);

  const handleLinkClick = () => {
    setNewClass((prevClass) =>
      prevClass === "dropdown-menu" ? "dropdown-menu-active" : "dropdown-menu"
    );
    setArrow((prevArrow) => (prevArrow === arrowUp ? arrowDown : arrowUp));
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setNewClass("dropdown-menu");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div>
      <div className="dropdown" ref={dropdownRef}>
        <h4 className="link" onClick={handleLinkClick}>
          Company <img className="arrow" alt="" src={arrow} />
        </h4>
        <div className={newClass}>
          <p>History</p>
          <p>Our Team</p>
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
