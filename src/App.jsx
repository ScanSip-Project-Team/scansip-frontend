//Import Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faUser,
  faCircleXmark,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

//Import Components
import FlashScreen from "./pages/FlashScreen";
import Orders from "./Pages/Orders";
import Selection from "./Pages/Selection";
import UserPaiement from "./pages/UserPaiement";
import Billing from "./Pages/Billing";
import CartClient from "./Pages/CartClient";
import Lab from "./pages/Lab";
import AdminProducts from "./pages/AdminProducts";
import AdminNewProduct from "./pages/AdminNewProduct";

// Import Assets
import "./App.css";

library.add(
  faChevronDown,
  faChevronUp,
  faUser,
  faCircleXmark,
  faPenToSquare,
  faTrashCan,
);
function App() {
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
        <Route path="/billing/:id" element={<Billing />} />

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
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/new-product" element={<AdminNewProduct />} />
        {/* page de test SAMUEL */}
        <Route path="/lab" element={<Lab />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/paiement/:id" element={<UserPaiement total={total} />} />
      </Routes>
    </Router>
  );
}

export default App;
