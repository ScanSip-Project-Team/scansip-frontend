//Import Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import Cookies from "js-cookie";
import {
  faChevronDown,
  faChevronUp,
  faUser,
  faCircleXmark,
  faPenToSquare,
  faTrashCan,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

//Import Components
import FlashScreen from "./pages/FlashScreen";
import Orders from "./pages/Orders";
import Selection from "./pages/Selection";
import UserPaiement from "./pages/UserPaiement";
import Billing from "./pages/Billing";
import CartClient from "./pages/CartClient";
import AdminProducts from "./pages/AdminProducts";
import AdminNewProduct from "./pages/AdminNewProduct";
import AdminHistory from "./pages/AdminHistory";
import AdminUpdateProduct from "./pages/AdminUpdateProduct";
import AdminSignUp from "./pages/AdminSignUp";
import AdminSignIn from "./pages/AdminSignIn";

// Import Assets
import "./App.css";

library.add(
  faChevronDown,
  faChevronUp,
  faUser,
  faCircleXmark,
  faPenToSquare,
  faTrashCan,
  faBars,
);
function App() {
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);
  const [adminToken, setAdminToken] = useState(
    Cookies.get("scanSipToken") || null,
  );

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
        <Route path="/payment/:id" element={<UserPaiement total={total} />} />

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
      </Routes>
    </Router>
  );
}

export default App;
