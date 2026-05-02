function About() {
  return (
    <section id="about" style={styles.section}>
      <h2>About Me</h2>
      <p>
        My journey into tech started with curiosity about how websites work.
        Over time, I began building full-stack applications including farm
        systems, weather apps, and health platforms.
      </p>
      <p>
        I aim to become a professional software engineer and build impactful
        solutions for Africa and beyond.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
  },
};

export default About;