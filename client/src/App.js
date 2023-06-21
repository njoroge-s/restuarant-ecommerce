import logo from "./logo.svg"
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'
import {BrowserRouter, Route} from "react-router-dom"
import Navbar from "./components/navBar";
import Homescreen from "./screens/homeScreen";
import cartScreen from "./screens/cartScreen";
import registerScreen from "./screens/registerScreen";
import logInScreen from "./screens/logInScreen";
import orderScreen from "./screens/orderScreens";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>

      <Route path="/" exact Component={Homescreen} />
      <Route path="cart" exact Component={cartScreen} />
      <Route path="/register" exact Component={registerScreen}/>
      <Route path="/login" exact Component={logInScreen}/>
      <Route path="/orders" exact Component={orderScreen}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
