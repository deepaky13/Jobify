import React from "react";
import Wrapper from "../assets/wrappers/StatItem";

const startItem = ({ count, color, bcg, title, icon }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

export default startItem;
