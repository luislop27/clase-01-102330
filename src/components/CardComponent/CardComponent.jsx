import React from "react";
import styles from "./CardComponent.module.css";

const CardComponent = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headercard}>
        <h3>{data.competition}</h3>
      </div>
      <div className={styles.info}>
        <p>Name:</p>
        <p className={styles.textData}>{data.commonName}</p>
        <p>Country:</p>
        <p className={styles.textData}>{data.hostCountry}</p>
        <p>Year:</p>
        <p className={styles.textData}>{data.year}</p>
        <p>Venue:</p>
        <p className={styles.textData}>{data.venue}</p>
        <p>Description:</p>
        <p className={styles.textData}>{data.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
