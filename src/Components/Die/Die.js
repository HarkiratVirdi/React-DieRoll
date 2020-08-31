import React from "react";
import "./Die.css";

const Die = (props) => {
  return (
    <div>
      <i className={`fas fa-dice-${props.side} Die`}></i>
    </div>
  );
};

export default Die;
