import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Selection from "./pages/Selection";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages import
import Selection from "./pages/Selection";
import ProductDescription from "./Pages/ProductDescription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
