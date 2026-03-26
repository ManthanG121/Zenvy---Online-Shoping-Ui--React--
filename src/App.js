import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Main-Footer";
import Navbar from "./components/Navbar";
import Singlepage from "./components/Singlepage";
import Singlepage2 from "./components/Singlepage2";

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
          <Route path="/Singlepage/:id" element={<Singlepage/>}></Route>
          <Route path="/Singlepage2/:id" element={<Singlepage2/>}></Route>
        </Routes>
        <Footer/>

      </BrowserRouter>

      
    </>
  );
}

export default App;
