import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Selection from "./pages/Selection";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages import
import Selection from "./pages/Selection";
import ProductDescription from "./Pages/ProductDescription";

function App() {
<<<<<<< HEAD
  return <Router>
    <Routes>
      <Route path="/" element={<Selection/>}></Route>
    </Routes>
  </Router>;
=======
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />}></Route>
        <Route path="/products/:id" element={<ProductDescription />} />
      </Routes>
    </Router>
  );
>>>>>>> 98f6877f45d44ebbdaba85978c3f380ab13cf47c
}

export default App;
