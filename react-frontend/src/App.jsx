import Navigation from "./components/layout/Navigation.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import RecentlySearched from "./components/common/RecentlySearched.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <RecentlySearched />
      <Footer />
    </div>
  );
};

export default App;
