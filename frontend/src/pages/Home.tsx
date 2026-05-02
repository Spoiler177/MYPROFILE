function Home() {
  return (
    <section id="home" style={styles.section}>
      <h1>Frontend Developer | Student | Tech Enthusiast</h1>
      <p>
        I am a passionate student developer building modern web applications
        using React and TypeScript.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center" as const,
  },
};

export default Home;