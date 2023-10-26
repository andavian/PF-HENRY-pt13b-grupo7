import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import { MyRoutes } from "./routers/routes";
import CartButton from "./components/Cart-Button/CartButton";
import Footer from "./components/Footer/Footer";
import Footerbar from "./components/FooterBar/FooterBar";
import Profile from "./components/ProfileUser/ProfileUser";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import FormProducts from "./components/FormProducts/FormProducts";
import FormCategories from "./components/FormCategories/FormCategories";

// Pages
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/Detail/Detail";
import Admin from "./pages/admin/Admin";
import Construccion from "./pages/Construcion/Construcion";
import Confirmacion from "./pages/ConfirmacionCompra/ConfirmacionCompra";
import Store from "./pages/Store/Store";
import CategoriesViews from "./pages/CategoriesView/CategoriesViews";

// Dashboard Components
import DashHome from "./Dashboard/DashViews/DashHome/DashHome";
import DashPage from "./Dashboard/DashComponent/DashPage/DashPage";
import DashProducts from "./Dashboard/DashComponent/DashProducts/DashProducts";
import DashClients from "./Dashboard/DashComponent/DashClientes/DashClients";
import DashCategory from "./Dashboard/DashComponent/DashCategory/DashCategory";

function App() {
  return (
    <div>
      <Navbar />
      <CartButton />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Confirmacion" element={<Confirmacion />} />
        <Route path="diseños" element={<Construccion />} />
        <Route path="contacto" element={<Construccion />} />
        <Route path="home" element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="admin" element={<Admin />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="store/:category" element={<Store />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/dashaddproduct"
          element={
            <div>
              <DashHome />
              <FormProducts />
            </div>
          }
        />
        <Route
          path="/dashpage"
          element={
            <div>
              <DashHome />
              <DashPage />
            </div>
          }
        />
        <Route
          path="/dashproducts"
          element={
            <div>
              <DashHome />
              <DashProducts />
            </div>
          }
        />
        <Route
          path="/dashclients"
          element={
            <div>
              <DashHome />
              <DashClients />
            </div>
          }
        />
        <Route
          path="/dashaddcategory"
          element={
            <div>
              <DashHome />
              <FormCategories />
            </div>
          }
        />
        <Route
          path="/dashcategories"
          element={
            <div>
              <DashHome />
              <DashCategory />
            </div>
          }
        />
      </Routes>
      <Footer />
      <Footerbar />
    </div>
  );
}

export default App;
