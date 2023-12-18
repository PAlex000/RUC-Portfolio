import Container from "react-bootstrap/Container";


const Header = ({ header }) => {
  const headerStyle = {
    backgroundColor: "#000",
    backgroundImage: `linear-gradient(0deg, 
      rgba(0,0,0,1) 10%, rgba(0,0,0,0) 95%), url(${header}`,
    backgroundSize: "cover",
    width: "100%",
    height: "700px",
    backgroundPosition: "top",
    position: "relative",
    opacity: "0.5",
  }
  
  const overlayTextStyle = {
    position: "absolute",
    fontSize: "45px",
    color: "#FFA869",
    fontWeight: "bold",
    textAlign: "center",
    top: 250,
    width: "100%",
    padding: "2rem",
    textShadow: "3px 5px 7px black",
  }

  // const logo = {
  //   backgroundColor: "#FBD654",
  //   width: "5%",
  //   height: "3rem",
  //   textAlign: "center",
  //   color: "#000",
  //   fontWeight: "bold",
  //   fontSize: "30px",
  //   borderRadius: "10px"
  // }

  return (
    <Container fluid style={headerStyle}>
      {/* <div style={logo}>IMDB</div> */}
      <div style={overlayTextStyle}>Welcome to Our Movie Collection!</div>
    </Container>
  );
};

export default Header;
