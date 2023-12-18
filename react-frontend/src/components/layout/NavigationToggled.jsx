import { items } from "../../types/nav/NavItems";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { logout } from "../../utils/helperFunctions/Logout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./NavigationToggle.scss";
import { bookmark } from "../../utils/helperFunctions/Bookmark";
import ProfileSettings from "../privateViews/ProfileSettings";
import { ratinghistory } from "../../utils/helperFunctions/Rating";

const NavigationOpen = ({ isOpen, onChange }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.userReducer.token);

  const handleLogout = () => {
    logout(dispatch, navigate);
    onChange(false);
  };

  const handleProfileSettings = () => {
    ProfileSettings(navigate);
    onChange(false);
  };

  const handleBookmark = () => {
    bookmark(navigate);
    onChange(false);
  };
  const handleRatinghistory = () => {
    ratinghistory(navigate);
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
          <div className="bookmark" onClick={handleBookmark}>
            Bookmark
          </div>
        )}
        {isLoggedIn && (
          <div className="rating" onClick={handleRatinghistory}>
            Rating History
          </div>
        )}
        {isLoggedIn && (
          <div className="profileSettings" onClick={handleProfileSettings}>
            Profile Settings
          </div>
        )}
        {isLoggedIn && (
          <div className="logout" onClick={handleLogout}>
            Log out
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationOpen;
