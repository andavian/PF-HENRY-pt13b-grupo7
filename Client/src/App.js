import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/admin/Admin";
import Footer from "./components/Footer/Footer";
import Footerbar from "./components/FooterBar/FooterBar";
import Construccion from "./pages/Construcion/Construcion";
import Store from "./pages/Store/Store";
import CategoriesViews from "./pages/CategoriesView/CategoriesViews";
import Profile from "./components/ProfileUser/ProfileUser";
import Favorites from "./pages/favorites/favorites";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="mensaje" element={<Construccion />} />
        <Route path="home" element={<Home />} />
        <Route path="store" element={<Store />} /> 
        <Route path="detail/:id" element={<Detail />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="admin" element={<Admin />} />
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
      <Footer />
      <Footerbar />
    </div>
  );
}

export default App;
