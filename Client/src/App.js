import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/admin/Admin";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer2/Footer2";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/home" element={<Shop />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
      <Footer/>
      <Footer2/>
    </div>
  );
}

export default App;
