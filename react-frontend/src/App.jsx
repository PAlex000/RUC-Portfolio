import { Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation.jsx";
import Home from "./components/views/Home.jsx";
import Footer from "./components/layout/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import RatingHistory from "./components/privateViews/RatingHistory.jsx";
import { Bookmark } from "react-bootstrap-icons";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/ratinghistory" element={<RatingHistory />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
