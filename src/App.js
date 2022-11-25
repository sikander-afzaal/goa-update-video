import "./App.css";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace/Marketplace";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route extact path="/Marketplace" element={<Marketplace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
