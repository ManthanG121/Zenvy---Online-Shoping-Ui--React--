import React from 'react'

const Left_side = () => {
  return (
    <div className="col-lg-5">

          <div
            className="p-4 shadow-sm"
            style={{ borderRadius: "10px" }}
          >
            <h4 className="fw-bold mb-4">Get in Touch</h4>

            <div className="mb-4">
              <h6 className="fw-bold">📧 Email</h6>
              <p className="text-muted mb-0">support@zenvy.com</p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold">📞 Phone</h6>
              <p className="text-muted mb-0">+91 9876543210</p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold">📍 Location</h6>
              <p className="text-muted mb-0">Mumbai, India</p>
            </div>

            <div>
              <h6 className="fw-bold">⏰ Working Hours</h6>
              <p className="text-muted mb-0">Mon - Sat: 10 AM - 7 PM</p>
            </div>
          </div>

        </div>
  )
}

export default Left_side
