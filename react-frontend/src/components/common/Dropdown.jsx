import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import "./Button.scss";

function Dropdowns({ onRatingSelect }) {
  const [selectedRating, setSelectedRating] = useState("Filter by Rating");

  const handleSelect = (ratingCategory) => {
    setSelectedRating(ratingCategory === "high" ? "High Rated" : "Low Rated");
    onRatingSelect(ratingCategory);
  };

  return (
    <Dropdown className="pt-4 pr-4">
      <Dropdown.Toggle
        className="custom-dropdown-toggle"
        variant="success"
        id="dropdown-basic"
      >
        {selectedRating}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSelect("high")}>
          High Rated
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("low")}>
          Low Rated
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdowns;
