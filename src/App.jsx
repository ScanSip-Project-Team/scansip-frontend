import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages import
import Selection from "./pages/Selection";
import ProductDescription from "./pages/ProductDescription";
import FlashScreen from "./pages/FlashScreen";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/flashscreen" element={<FlashScreen />} />
        <Route path="/" element={<Selection />} />
        <Route path="/products" element={<ProductDescription />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
