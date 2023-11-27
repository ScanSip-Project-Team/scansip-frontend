import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import ProductDescription from "./Pages/ProductDescription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductDescription />} />
      </Routes>
    </Router>
  );
}

export default App;
