//Import Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

//Import Components
import FlashScreen from "./pages/FlashScreen";
import Orders from "./pages/Orders";
import Selection from "./Pages/Selection";
import UserPaiement from "./pages/UserPaiement";
import Billing from "./Pages/Billing";
import CartClient from "./Pages/CartClient";

// Import Assets
import "./App.css";

library.add(faChevronDown, faChevronUp, faUser);
function App() {
  //Yohann : J'ai déplacer deux states ici pour récuperer leurs informations sur ma page billing, si besoin d'info me contacter
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlashScreen />} />
        <Route
          path="/home"
          element={
            <Selection
              cart={cart}
              setCart={setCart}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route
          path="/billing"
          element={<Billing cart={cart} total={total} />}
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/paiement" element={<UserPaiement />} />
        <Route
          path="/cart"
          element={
            <CartClient
              cart={cart}
              setCart={setCart}
              total={total}
              setTotal={setTotal}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
