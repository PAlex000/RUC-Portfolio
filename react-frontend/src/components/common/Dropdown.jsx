import Dropdown from "react-bootstrap/Dropdown";
import "./Button.scss";

function Dropdowns({ onGenreSelect }) {
  const handleSelect = (genre) => {
    onGenreSelect(genre);
  };

  return (
    <Dropdown className="pt-4 pr-4">
      <Dropdown.Toggle
        className="custom-dropdown-toggle"
        variant="success"
        id="dropdown-basic"
      >
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSelect("all")}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("action")}>
          Action
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("drama")}>
          Drama
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("crime")}>
          Crime
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdowns;
