//Import Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

//Import Components
import FlashScreen from "./pages/FlashScreen";
import Orders from "./pages/Orders";
import Selection from "./Pages/Selection";
import UserPaiement from "./pages/UserPaiement";
import Billing from "./Pages/Billing";

// Import Assets
import "./App.css";

library.add(faChevronDown, faChevronUp, faUser);
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlashScreen />} />
        <Route path="/home" element={<Selection />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/paiement" element={<UserPaiement />} />
      </Routes>
    </Router>
  );
}

export default App;
