import Container from "react-bootstrap/Container";

const CustomContainer = ({
  children,
  className,
  style = {},
  fluid = false,
}) => {
  const customStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#000",
    paddingLeft: "10%",
    paddingRight: "10%",
    ...style,
  };

  return (
    <Container
      className={`px-5 ${className}`}
      fluid={fluid}
      style={customStyle}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
