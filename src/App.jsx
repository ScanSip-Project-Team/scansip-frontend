import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Selection from "./pages/Selection";


function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Selection/>}></Route>
    </Routes>
  </Router>;
}

export default App;
