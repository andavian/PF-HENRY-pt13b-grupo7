import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/routes";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="App">
      {pathname !== "/" && <NavBar setCurrentPage={setCurrentPage} />}
      <AppRoutes />
    </div>
  );
}

export default App;
