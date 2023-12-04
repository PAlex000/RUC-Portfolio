import { Routes, Route } from "react-router-dom";
import Home from "./components/views/Home.jsx";

const App = () => {
  return (
    <div>
      <p>Hello World</p>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* other routes */}
      </Routes>
    </div>
  );
};

export default App;
