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
    ...style,
  };

  return (
    <Container
      className={`${className}`}
      fluid={fluid}
      style={customStyle}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
