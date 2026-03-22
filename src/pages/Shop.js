import React from 'react'
import Sidebar from '../components/Shop-Sidebar'
import Footer from '../components/Main-Footer';
import TopBar from '../components/Shop-TopBar';
import{ Product_Card, NProduct_Card } from '../components/Shop-Product-Card';

import product_data from "../data/Trending-Products.json";
import New_Product_data from "../data/NewArrivals-Products.json";

const Shop = () => {
  return (
    <div>
      <div className="container my-5">

        <div className="row">
          {/* Sidebar */}
          <Sidebar />

          <div className="col-lg-9">
            {/* Shop Top Bar */}
            <TopBar />

            <div className="row g-4">
              {/* Product Card */}
              {product_data.map((data)=>(
              <Product_Card 
              pname = {data.name}
              pimage = {data.image}
              pprice = {data.Offer_price}
              pop = {data.Orignal_Price}
              />

              ))}
              {New_Product_data.map((data)=>(
              <NProduct_Card 
              npname = {data.name}
              npimage = {data.image}
              npprice = {data.price}
              />
              ))}
          
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Shop
