import React from "react";
import Footer from '../components/Main-Footer';
import Header from "../components/Wishlist-Header";
import Product from "../components/Wishlist-Product";
import Wishlist_Footer from "../components/Wishlist-Footer";

import New_Product_data from "../data/NewArrivals-Products.json";

function Wishlist() {
  return (
    <div>
    <div className="container my-5">

      {/* HEADER */}
      <Header/>

      <div className="row g-4">

        {/* Product 1 */}
        {New_Product_data.map((data)=>(
        <Product
        pname = {data.name}
        pimage = {data.image}
        pprice = {data.price}
        />
        ))}
      </div>

      {/* EMPTY STATE (optional future use) */}
      <Wishlist_Footer/>

    </div>
    <Footer/>
    </div>
  );
}

export default Wishlist;
