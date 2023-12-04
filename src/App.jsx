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
import AdminHistory from "./pages/AdminHistory";

// Import Assets
import "./App.css";
import AdminUpdateProduct from "./Pages/AdminUpdateProduct";
import AdminSignUp from "./Pages/AdminSignUp";
import AdminSignIn from "./Pages/AdminSignIn";

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
  const [adminToken, setAdminToken] = useState("");

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
        <Route
          path="/admin/orders"
          element={
            <Orders adminToken={adminToken} setAdminToken={setAdminToken} />
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminProducts
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />
        <Route
          path="/admin/new-product"
          element={
            <AdminNewProduct
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />
        <Route
          path="/admin/update-product"
          element={
            <AdminUpdateProduct
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />
        <Route
          path="/admin/history"
          element={
            <AdminHistory
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />
        <Route
          path="/admin/signup"
          element={
            <AdminSignUp
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />

        <Route
          path="/admin/signin"
          element={
            <AdminSignIn
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />

        {/* page de test SAMUEL */}
        <Route path="/lab" element={<Lab />} />

        <Route path="/paiement/:id" element={<UserPaiement total={total} />} />
      </Routes>
    </Router>
  );
}

export default App;
