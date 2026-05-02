function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Victor Kamau. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center" as const,
    padding: "20px",
    backgroundColor: "#111",
    color: "white",
  },
};

export default Footer;