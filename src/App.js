import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { ShopContextProvider } from './context/shopContext';
import { HomePage } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/menu"
import { Contact } from "./pages/Contact/contact"
import { About } from "./pages/About/about"
import { Cart } from "./pages/cart/Cart"
import Join from './pages/Join/Join';
import { Shipping } from './pages/shipping/shipping';
import { CheckOut } from './pages/checkOut/checkOut';
import "./assets/font_family.css"

import './App.css';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Menu" element={<Menu />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact us" element={<Contact />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Register" element={<Join />}></Route>
            <Route path="/Check out" element={<CheckOut />}></Route>
            <Route path="/Shipping" element={<Shipping />}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
