import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Main-Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar/>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/wishlist" element={<Wishlist/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
        <Footer/>

      </BrowserRouter>

      
    </>
  );
}

export default App;
