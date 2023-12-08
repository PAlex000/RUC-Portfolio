import {Routes, Route} from "react-router-dom";
import Navigation from "./components/layout/Navigation.jsx";
import Home from "./components/views/Home.jsx";
import Footer from "./components/layout/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileSettings from "./components/privateViews/ProfileSettings.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profilesettings" element={<ProfileSettings />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
