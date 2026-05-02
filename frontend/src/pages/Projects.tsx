function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2>My Projects</h2>

      <div style={styles.card}>
        <h3>Farm E-Commerce Platform</h3>
        <p>Online platform for farmers to sell and manage products.</p>
      </div>

      <div style={styles.card}>
        <h3>Weather Forecast App</h3>
        <p>Real-time weather application using API integration.</p>
      </div>

      <div style={styles.card}>
        <h3>MediGuide Health Website</h3>
        <p>Educational platform about diseases and prevention.</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    margin: "20px 0",
    borderRadius: "8px",
  },
};

export default Projects;