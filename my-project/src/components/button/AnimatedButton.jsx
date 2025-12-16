import React from "react";
import styles from "./AnimatedButton.module.css";

const AnimatedButton = () => {
  return (
    <a href={`/gilbertoDiazCV1.pdf`} target="_blank">
      <button className={`${styles.btn16} ${styles.custombtn} ${styles.doto}`}>DESCARGAR CV</button>
    </a>
  );
};

export default AnimatedButton;
