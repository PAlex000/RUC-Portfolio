import { items } from "../../types/nav/NavItems";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { logout } from "../../utils/helperFunctions/Logout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./NavigationToggle.scss";

const NavigationOpen = ({ isOpen, onChange }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.userReducer.token);
  console.log("isLoggedIn:", isLoggedIn);

  const handleLogout = () => {
    logout(dispatch, navigate);
    onChange(false);
  };

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
      body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
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
        {isLoggedIn && (
          <div className="logout" onClick={handleLogout}>
            Logout
            {console.log("Logout should be rendered")}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationOpen;
