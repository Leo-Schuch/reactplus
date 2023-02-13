import React from "react";
import banner from "./banner.png";
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1>A galeria mais completa do espaço</h1>
      <img src={banner} alt="Imagem vista do espaço" />
    </div>
  );
};

export default Banner;
