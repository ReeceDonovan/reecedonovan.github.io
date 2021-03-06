import React from "react";
import CardItem from "./CardItem";
import "./CardSec.css";

function CardSec() {
  return (
    <div className="cards">
      <h1 className="glitch">
        <span aria-hidden="true">Check out my projects</span>
        Check out my projects
        <span aria-hidden="true">Check out my projects</span>
      </h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="https://cdn.discordapp.com/attachments/471231303317192735/762771704677138432/project-1.gif"
              text="Visual Sort"
              label="JS"
              link="https://github.com/ReeceDonovan/Visual-Sort"
            />
            <CardItem
              src="https://cdn.discordapp.com/attachments/471231303317192735/762771704677138432/project-1.gif"
              text="Visual Sort"
              label="JS"
              link="https://github.com/ReeceDonovan/Visual-Sort"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardSec;
