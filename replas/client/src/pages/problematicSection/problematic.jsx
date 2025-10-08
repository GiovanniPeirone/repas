import React from "react";
import Group from "../../assets/Group.png";

const ProblematicSection = () => {

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Repensemos el Plastico</h1>

      <div style={styles.card}>
        <h2 style={styles.subtitle}>Problematica</h2>
        <p style={styles.text}>
          Hoy en día vivimos en un mundo donde dependemos del plástico casi por completo,
          encontramos plástico para la comida, para la ropa, para uso diario, plásticos en
          nuestro cerebro, esto porque son baratos, y baratos de producir en masa a pesar
          de las consecuencias que ello genere.
        </p>
        <p style={styles.text}>
          Sin el plástico será realmente difícil obtener sus beneficios al precio que nos
          lo dan, y hasta donde sabemos, a causa de la producción masiva existen islas
          enormes de plástico que tienen un tamaño inmenso, en el océano, contaminando el
          ambiente, degradándose a microplásticos que afectan a la vida de todos los seres
          vivos incluyéndonos.
        </p>
        <p style={styles.text}>
          En esta página web se encontrarán los proyectos, información y presentaciones de
          los talleres que realizamos los estudiantes de sexto año hacia el resto de
          cursos, contamos con tu ayuda para difundir esta idea y llegar a más personas.
        </p>
        <img src={Group} alt="Descripción de la imagen" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  container: {
    margin: "20px auto",
    maxWidth: "900px",
    padding: "10px",
    border: "2px solid #00c853",
    borderRadius: "10px",
    backgroundColor: "#eafeea",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    background: "#66f68f",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  },
  subtitle: {
    fontSize: "20px",
    borderLeft: "4px solid black",
    paddingLeft: "8px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "12px",
    textAlign: "justify",
  },
  image: {
    marginTop: "20px",
    width: "100%",
    borderRadius: "10px",
  },
};

export default ProblematicSection;
