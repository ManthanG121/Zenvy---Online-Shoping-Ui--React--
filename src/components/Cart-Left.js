import React from 'react'
import Cart_Product from './Cart-Product'
import product_data from "../data/Trending-Products.json";

const Left = () => {
  return (
    <div className="col-lg-8">

          {/* ITEM */}
          {product_data.map((data)=>(
          <Cart_Product
          pname = {data.name}
          pimage = {data.image}
          pOffer_price = {data.Offer_price}
          pop = {data.Orignal_Price}
          />
          ))}
        </div>
  )
}

export default Left
