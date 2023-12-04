import { Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation.jsx";
import Home from "./components/views/Home.jsx";
import Footer from "./components/layout/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
