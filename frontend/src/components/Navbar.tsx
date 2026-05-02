function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Victor Kamau</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#111",
    color: "white",
  },
};

export default Navbar;