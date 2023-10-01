import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/admin/Admin";
import Footer from "./components/Footer/Footer";
import Footerbar from "./components/FooterBar/FooterBar";
import FormProducts from "./components/FormProducts/FormProducts";
import FormCloudinary from "./components/FormProducts/FormCloudinary";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/home" element={<Home />} />
        {/* <Route path="/store" element={<Store />} /> */}

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cloudinary" element={<FormCloudinary />} />
      </Routes>
      <Footer/>
      <Footerbar/>
    </div>
  );
}

export default App;
