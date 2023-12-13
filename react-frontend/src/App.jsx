import Navigation from "./components/layout/Navigation.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import RatingHistory from "./components/privateViews/RatingHistory.jsx";
import { Bookmark } from "react-bootstrap-icons";

const App = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
