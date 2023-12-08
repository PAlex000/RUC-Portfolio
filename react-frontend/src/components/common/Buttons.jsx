import Button from "react-bootstrap/Button";

const WatchlistButtonStyle = {
  backgroundColor: "#333333",
  border: "none",
  width: "100%",
  height: "20%",
  marginTop: "25px",
  paddingBottom: "16px",
  borderRadius: "4px",
};

export const WatchlistButton = ({ onClick, children }) => {
  return (
    <Button style={WatchlistButtonStyle} onClick={onClick}>
      <div className="d-flex justify-content-center align-items-center">
        {children}
      </div>
    </Button>
  );
};

export const DangerButton = ({ onClick, children }) => {
  return (
    <Button variant="danger" onClick={onClick}>
      {children}
    </Button>
  );
};
