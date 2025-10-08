import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>Problematica</a>
        <a href="#" style={styles.link}>Soluciones</a>
      </nav>

      {/* Onda dinámica */}
      <div style={styles.waveContainer}>
        <svg
          style={{ ...styles.wave, ...styles.wave1 }}
          viewBox="0 0 120 28"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 V12 Q30 17 55 12 T120 11 V30z"
            fill="rgba(0,170,255,0.3)" // onda azul translúcida
          />
        </svg>
        <svg
          style={{ ...styles.wave, ...styles.wave2 }}
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

const styles = {
  header: {
    position: "relative",
    background: "#66f68f",
    height: "120px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    overflow: "hidden",
    zIndex: 2,
  },
  navbar: {
    display: "flex",
    gap: "20px",
    zIndex: 3, // texto siempre arriba
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: 500,
  },
  waveContainer: {
    position: "absolute",
    bottom: "-10px", // sobresale hacia el contenido
    left: 0,
    width: "100%",
    height: "60px",
    overflow: "hidden",
    lineHeight: 0,
    zIndex: 1,
  },
  wave: {
    position: "absolute",
    bottom: 0,
    width: "200%",
    height: "100%",
  },
  wave1: {
    animation: "waveAnim 8s linear infinite",
  },
  wave2: {
    animation: "waveAnim 12s linear infinite reverse",
  },
};

// Keyframes globales
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes waveAnim {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }`;

if (styleSheet) {
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

export default Header;
