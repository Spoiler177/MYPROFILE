function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Me</h2>
      <p>Email: victor@example.com</p>
      <p>GitHub: github.com/yourusername</p>
      <p>LinkedIn: linkedin.com/in/yourusername</p>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
  },
};

export default Contact;