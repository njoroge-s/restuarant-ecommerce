import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar";
import Homescreen from "./screens/homeScreen";
import CartScreen from "./screens/cartScreen";
import RegisterScreen from "./screens/registerScreen";
import LogInScreen from "./screens/logInScreen";
import OrderScreen from "./screens/orderScreens";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />

        <Routes>
          <Route path="/" Component={Homescreen} />
          <Route path="/cart" Component={CartScreen} />
          <Route path="/register" Component={RegisterScreen} />
          <Route path="/login" Component={LogInScreen} />
          <Route path="/orders" Component={OrderScreen} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;