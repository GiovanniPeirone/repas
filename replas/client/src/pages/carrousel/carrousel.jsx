import React, { useState } from "react";

const MainCarousel = () => {
  const images = [
    "https://picsum.photos/id/1015/800/400", // reemplaza con tus imágenes
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <main style={styles.carouselContainer}>
      <div style={styles.carouselSlide}>
        <img
          src={images[current]}
          alt={`Slide ${current}`}
          style={styles.image}
        />
      </div>

      <button style={{ ...styles.carouselBtn, ...styles.prev }} onClick={prevSlide}>
        ❮
      </button>
      <button style={{ ...styles.carouselBtn, ...styles.next }} onClick={nextSlide}>
        ❯
      </button>

      <div style={styles.carouselDots}>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.dot,
              ...(index === current ? styles.dotActive : {}),
            }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </main>
  );
};

const styles = {
  carouselContainer: {
    position: "relative",
    maxWidth: "800px",
    textAlign: "center",
  },
  carouselSlide: {
    width: "100%",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    objectFit: "cover",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  carouselBtn: {
    position: "absolute",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "50%",
    fontSize: "1.5rem",
    padding: "8px 12px",
    cursor: "pointer",
    zIndex: 2,
    transition: "background 0.3s",
  },
  prev: {
    left: "20%",
  },
  next: {
    right: "20%",
  },
  carouselDots: {
    marginTop: "12px",
  },
  dot: {
    display: "inline-block",
    height: "12px",
    width: "12px",
    margin: "0 6px",
    background: "black",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  dotActive: {
    background: "#00c853", // verde activo
  },
};

export default MainCarousel;
