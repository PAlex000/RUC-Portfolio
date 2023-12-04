const Header = ({ header }) => {
  const headerStyle = {
    position: "relative",
    textAlign: "center",
    color: "white",
    width: "80%",
    paddingTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderRadius: "15px",
  };

  const overlayTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "2rem",
  };

  return (
    <div style={headerStyle}>
      <img
        src={header}
        alt="Header Image"
        style={{ width: "100%", height: "auto" }}
      />
      <div style={overlayTextStyle}>Welcome to Our Movie Collection</div>
    </div>
  );
};

export default Header;
