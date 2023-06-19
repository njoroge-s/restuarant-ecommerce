import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import Navbar from './components/navBar';
import Homescreen from './screens/homeScreen';
import cartScreen from './screens/cartScreen';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>

      <Route path='/' exact Component={Homescreen} />
      <Route path='cart' exact Component={cartScreen} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
