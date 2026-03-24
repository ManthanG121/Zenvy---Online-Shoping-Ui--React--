import React from "react";
import Footer from '../components/Main-Footer';
import Header from "../components/Cart-Header";
import Left from "../components/Cart-Left";
import Right from "../components/Cart-Right";
import Cart_footer from "../components/Cart-footer";

function Cart() {
  return (
    <div>
    <div className="container my-5">

      {/* HEADER */}
      <Header/>

      <div className="row g-4">

        {/* LEFT: CART ITEMS */}
        <Left/>

        {/* RIGHT: SUMMARY */}
        <Right/>

      </div>

      {/* EMPTY STATE */}
      <Cart_footer/>

    </div>
    </div>
  );
}

export default Cart;