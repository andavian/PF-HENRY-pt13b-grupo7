import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Shop />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
