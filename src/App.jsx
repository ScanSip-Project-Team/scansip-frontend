//Import Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Components
import FlashScreen from "./pages/FlashScreen";
import Orders from "./pages/Orders";
import Selection from "./pages/Selection";
import ProductDescription from "./Pages/ProductDescription";
import UserPaiement from "./Pages/UserPaiement";

// Import Assets
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlashScreen />} />
        <Route path="/home" element={<Selection />} />
        <Route path="/products" element={<ProductDescription />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/paiement" element={<UserPaiement />} />
      </Routes>
    </Router>
  );
}

export default App;
