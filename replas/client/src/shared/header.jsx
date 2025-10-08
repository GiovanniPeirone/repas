import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <a href="#home" className={style.link}>Home</a>
        <a href="#problematic" className={style.link}>Problematica</a>
        <a href="#solution" className={style.link}>Soluciones</a>
      </nav>

      {/* Onda dinámica */}
      <div className={style.waveContainer}>
        <svg
          className={`${style.wave} ${style.wave1}`}
          viewBox="0 0 120 28"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 V12 Q30 17 55 12 T120 11 V30z"
            fill="rgba(0,170,255,0.3)" // onda azul translúcida
          />
        </svg>
        <svg
          className={`${style.wave} ${style.wave2}`}
          viewBox="0 0 120 28"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 V12 Q30 17 55 12 T120 11 V30z"
            fill="rgba(0,170,255,0.5)" // segunda onda más fuerte
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
