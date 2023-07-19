import React, { useState, useEffect, useRef } from "react";
import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

const Features = () => {
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
          Features <img className="arrow" alt="" src={arrow} />
        </h4>
        <div className={newClass}>
          <p>
            <img alt="" src={todo} /> Todo List
          </p>
          <p>
            <img alt="" src={calendar} /> Calendar
          </p>
          <p>
            <img alt="" src={reminders} /> Reminders
          </p>
          <p>
            <img alt="" src={planning} /> Planning
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
