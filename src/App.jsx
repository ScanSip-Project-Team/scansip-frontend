import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Selection from "./pages/Selection";

import ProductDescription from "./Pages/ProductDescription";
import FlashScreen from "./pages/FlashScreen";

function App() {


  


  return (
    <Router>
      <Routes>

       
        <Route path="/flashscreen" element={<FlashScreen/>}/>

        <Route path="/" element={<Selection />}></Route>
<Route path="/products/:id" element={<ProductDescription />} />

      </Routes>
    </Router>
  );

        



}

export default App;
