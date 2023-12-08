import { items } from "../../types/nav/NavItems";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import "./NavigationToggle.scss";

const NavigationOpen = ({ isOpen, onChange }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isOpen]);

  return (
    <div className={`Menu ${isOpen ? "open" : ""}`}>
      <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}
      >
        <AiOutlineClose />
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <Link to={item.itemLink} key={index} onClick={() => onChange(false)}>
            {item.itemText}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationOpen;
