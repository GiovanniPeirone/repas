import React from "react";

const SolutionsSection = () => {
  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.subtitle}>Soluciones</h2>
        <p style={styles.text}>
          En sexto año, a partir de la problemática ambiental vinculada al uso excesivo de plásticos
          y su impacto negativo en el medioambiente, pensamos en tres proyectos que giran en torno
          a las “3R”: Repensar, Reciclar y Reutilizar. Con el primero, Repensar, buscamos generar
          conciencia en la comunidad educativa y en nuestro entorno acerca del consumo responsable,
          reflexionando sobre cómo el plástico de un solo uso afecta a nuestro planeta y difundiendo
          alternativas más sostenibles, como envases retornables, bolsas reutilizables o bioplásticos.
        </p>
        <p style={styles.text}>
          En la segunda línea, Reciclar, trabajaremos en la separación, clasificación y transformación
          del plástico descartado, con actividades prácticas como la construcción de eco-ladrillos, el
          uso de pequeñas máquinas de reciclaje o la creación de objetos útiles a partir de plástico
          triturado, otorgándole un nuevo ciclo de vida al material. Finalmente, con Reutilizar, nos
          proponemos dar una segunda oportunidad a los plásticos ya existentes mediante la creatividad,
          fabricando macetas, elementos decorativos, mobiliario escolar u objetos de uso cotidiano,
          logrando extender su vida útil y evitar que se conviertan en residuos contaminantes. Estos tres
          ejes se complementan entre sí y apuntan a fomentar un cambio de hábitos, reduciendo el impacto
          ambiental y promoviendo un compromiso real con el cuidado del entorno.
        </p>

        <h3 style={styles.projectTitle}>FILECO</h3>
        <h3 style={styles.projectTitle}>BIODIESEL</h3>
        <h3 style={styles.projectTitle}>ECOLADRILLOS</h3>
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
  projectTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    borderLeft: "4px solid black",
    paddingLeft: "8px",
    marginTop: "25px",
    marginBottom: "10px",
  },
};

export default SolutionsSection;
