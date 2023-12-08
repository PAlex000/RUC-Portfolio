import { Carousel } from "react-bootstrap";

const Header = ({ headers, style = {} }) => {
  const headerStyle = {
    color: "white",
    width: "80%",
    height: "75%",
    paddingTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    ...style,
  };

  return (
    <div style={headerStyle}>
      <Carousel>
        {headers.map((header, index) => (
          <Carousel.Item key={index}>
            <img
              src={header.imageUrl}
              style={headerStyle}
              alt={`Header Image ${index}`}
            />
            {header.overlayText && (
              <Carousel.Caption>
                <h3>{header.overlayText.title}</h3>
                <p>{header.overlayText.description}</p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Header;
