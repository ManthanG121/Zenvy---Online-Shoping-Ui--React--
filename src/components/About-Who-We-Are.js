import React from 'react'

const Who_We_Are = () => {
  return (
    <div className="row align-items-center mb-5">

        <div className="col-lg-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&h=500&auto=format&fit=crop"
            className="img-fluid rounded"
            alt=""
          />
        </div>

        <div className="col-lg-6">
          <h3 className="fw-bold mb-3">Who We Are</h3>
          <p className="text-muted">
            Zenvy is a new-age fashion brand built for the modern generation. 
            We blend comfort, quality, and trend to deliver styles that actually matter.
          </p>
          <p className="text-muted">
            From everyday essentials to standout pieces, we make sure your wardrobe never feels outdated.
          </p>
        </div>

      </div>
  )
}

export default Who_We_Are
