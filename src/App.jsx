import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages import
import Selection from "./pages/Selection";
import ProductDescription from "./Pages/ProductDescription";
import FlashScreen from "./pages/FlashScreen/FlashScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/flashscreen" element={<FlashScreen />} />
        <Route path="/" element={<Selection />} />
        <Route path="/products" element={<ProductDescription />} />
      </Routes>
    </Router>
  );
}

export default App;
