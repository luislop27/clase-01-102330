import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/Logo.jpg';

const Header = ({ 
  title="Defaul Title", 
  subtitle="Default subtitle",
  color,
 }) => {
  return (
    <div className={styles.header} style= {{backgroundColor:color}}>
        <img src={logo} alt="music logo"width={100}/>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
