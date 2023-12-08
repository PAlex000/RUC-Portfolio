import { items } from "../../types/nav/NavItems";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import "./NavigationToggle.scss";

const NavigationOpen = ({ isOpen, onChange }) => {
  useEffect(() => {
    const body = document.body;
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const bodyPaddingRight = parseInt(
      getComputedStyle(body).getPropertyValue("padding-right") || "0",
      10
    );

    if (isOpen) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`; // Prevent width reflow
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <div className={`Menu ${isOpen ? "open" : ""}`}>
      <AiOutlineClose className="btn-close" onClick={() => onChange(false)} />
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
