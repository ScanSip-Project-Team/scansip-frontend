//Import Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

//Import Components
import FlashScreen from "./pages/FlashScreen";
import Orders from "./pages/Orders";
import Selection from "./pages/Selection";
import ProductDescription from "./pages/ProductDescription";
import UserPaiement from "./pages/UserPaiement";

// Import Assets
import "./App.css";

library.add(faChevronDown);
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
