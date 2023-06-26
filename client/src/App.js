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
          <Route path="/" exact component={Homescreen} />
          <Route path="/cart" exact component={CartScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/login" exact component={LogInScreen} />
          <Route path="/orders" exact component={OrderScreen} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;