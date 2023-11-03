import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import Cart from "../pages/cart/Cart";
import Detail from "../pages/Detail/Detail";
import Admin from "../pages/admin/Admin";
import Construccion from "../pages/Construcion/Construcion";
import Confirmacion from "../pages/ConfirmacionCompra/ConfirmacionCompra";
import Store from "../pages/Store/Store";
import CategoriesViews from "../pages/CategoriesView/CategoriesViews";
import Profile from "../components/ProfileUser/ProfileUser";
import DashHome from "../Dashboard/DashViews/DashHome/DashHome";
import DashPage from "../Dashboard/DashComponent/DashPage/DashPage";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import DashProducts from "../Dashboard/DashComponent/DashProducts/DashProducts";
import FormProducts from "../components/FormProducts/FormProducts";
import DashClients from "../Dashboard/DashComponent/DashClientes/DashClients";
import FormCategories from "../components/FormCategories/FormCategories";
import DashCategory from "../Dashboard/DashComponent/DashCategory/DashCategory";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="store" element={<Store />} />
      <Route path="home" element={<Home />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="Confirmacion" element={<Confirmacion />} />
      <Route path="diseños" element={<Construccion />} />
      <Route path="contacto" element={<Construccion />} />
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
  );
}

export default AppRoutes;
