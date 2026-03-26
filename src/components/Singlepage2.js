import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/NewArrivals-Products.json"

const Singlepage2 = () => {
    const {id} = useParams();
  return (
    <>
        <div className="container py-5">
      <div className="row g-5">

        {/* LEFT: PRODUCT IMAGE */}
        <div className="col-md-6">
          <div className="border rounded p-3 text-center bg-light">
            {data.filter((temp,index)=>temp.id == id).map((vdata)=>(
              <img src={vdata.image} alt={vdata.name} className="img-fluid rounded"
            />
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT DETAILS */}
        <div className="col-md-6">
        {data.filter((temp,index)=>temp.id == id).map((vdata)=>(
          <h2 className="fw-bold">{vdata.name}</h2>
          ))}
          {/* Rating */}
          <div className="mb-2 text-warning">
            ⭐⭐⭐⭐☆ <span className="text-muted">(120 reviews)</span>
          </div>

          {/* Price */}
          {data.filter((temp,index)=>temp.id == id).map((vdata)=>(
          <h4 className="text-dark">
            ₹{vdata.price}{" "}
            
            {data.filter((temp,index)=>temp.id == id).map((d2)=>(
            <span className="text-muted text-decoration-line-through fs-6">
              ₹{d2.orignalprice}
            </span>
            ))}
          </h4>
          ))}
            {data.filter((temp,index)=>temp.id == id).map((data)=>(
          <p className="text-success fw-semibold">
            You save ₹{data.orignalPrice - data.price}
          </p>
          ))}

          {/* Description */}
          {data.filter((temp,index)=>temp.id== id).map((data)=>(
          <p className="text-muted">
            {data.discription}
          </p>
            ))}
          {/* SIZE */}
          <div className="mb-3">
            <label className="fw-semibold">Select Size:</label>
            <div className="mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button key={size} className="btn btn-outline-dark me-2 mb-2">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="mb-3">
            <label className="fw-semibold">Quantity:</label>
            <input
              type="number"
              className="form-control w-25 mt-2"
              defaultValue={1}
              min={1}
            />
          </div>

          {/* BUTTONS */}
          <div className="d-flex gap-3">
            <button className="btn btn-dark w-50">Add to Cart</button>
            <button className="btn btn-outline-dark w-50">
              ❤️ Wishlist
            </button>
          </div>

          {/* EXTRA INFO */}
          <div className="mt-4">
            <p className="mb-1">🚚 Free Delivery</p>
            <p className="mb-1">🔄 7 Days Return</p>
            <p className="mb-1">🔒 Secure Payment</p>
          </div>
        </div>
      </div>

      {/* TABS / DESCRIPTION SECTION */}
      <div className="mt-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className="nav-link active">Description</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Reviews</button>
          </li>
        </ul>

        <div className="border p-4">
          <p className="text-muted">
            This product is made with high-quality materials ensuring durability
            and comfort. Ideal for casual and semi-formal occasions.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Singlepage2
