import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import ProductDescription from "./Pages/ProductDescription";
import FlashScreen from "./pages/FlashScreen/FlashScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductDescription />} />
        <Route path="/flashscreen" element={<FlashScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
