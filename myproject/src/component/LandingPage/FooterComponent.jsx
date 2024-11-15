import React from 'react'

export default function FooterComponent() {
  return (
    <div>
      <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-success">MyWebsite</h5>
            <p className="small">
              Your go-to platform for outstanding services. We aim to provide the best experience tailored to your needs.
            </p>
          </div>
          
          {/* Links Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-success">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none"></a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media Section */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5 className="fw-bold text-success">Follow Us</h5>
            <div>
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}
