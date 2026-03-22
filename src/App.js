import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">Zenvy</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/shop" class="nav-link">Shop</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link">About Us</Link>
                </li>
                <li class="nav-item dropdown">
                  <a to="/" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link to="/" class="dropdown-item">Action</Link></li>
                    <li><Link to="/" class="dropdown-item">Another action</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link to="/" class="dropdown-item">Something else here</Link></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link">Contact Us</Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              <div class="d-flex align-items-center gap-3 ms-3">
                <Link to="/wishlist"><i class="bi bi-heart-fill fs-5"></i></Link>
                <Link to="/cart"><i class="bi bi-bag-dash-fill fs-5"></i></Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/wishlist" element={<Wishlist/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
