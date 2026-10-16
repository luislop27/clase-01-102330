import React from "react";
import { argentinaTitles } from "./mockData.js";
import CardComponent from "../CardComponent/CardComponent.jsx";
import styles from "./ListComponent.module.css";

const ListComponent = () => {
  const { titles } = argentinaTitles;

  return (
    <div>
      <h4>{argentinaTitles.player} Tournaments with Argentina</h4>
      <div className={styles.grid}>
        {titles.map((title) => (
          <CardComponent data={title} key={title.id} />
        ))}
      </div>
    </div>
  );
};

export default ListComponent;