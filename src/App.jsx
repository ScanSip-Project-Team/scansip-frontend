import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages import
import Selection from "./pages/Selection";
import ProductDescription from "./Pages/ProductDescription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />}></Route>
        <Route path="/products/:id" element={<ProductDescription />} />
      </Routes>
    </Router>
  );
}

export default App;
