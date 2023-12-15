import Container from "react-bootstrap/Container";


const Header = ({ header }) => {
  const headerStyle = {
    backgroundColor: "#000",
    backgroundImage: `linear-gradient(0deg, 
      rgba(0,0,0,1) 15%, rgba(0,0,0,0) 80%), url(${header}`,
    backgroundSize: "cover",
    width: "100%",
    height: "800px",
    backgroundPosition: "center",
    position: "relative",
  }
  
  const overlayTextStyle = {
    position: "absolute",
    fontSize: "45px",
    color: "#FFA869",
    fontWeight: "bold",
    textAlign: "center",
    top: 300,
    width: "100%",
    padding: "2rem",
    textShadow: "2px 3px 5px black"
  }

  return (
    <Container fluid style={headerStyle}>
      <div style={overlayTextStyle}>Welcome to Our Movie Collection!</div>
    </Container>
  );
};

export default Header;
