import React from 'react'
import "./category.css"

const Bottomfooter = () => {
  return (
    <div>
         <footer className="text-center text-lg-start footer-bg text-muted mt-5">
        <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-dark"> 
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              {/* <i className="fab fa-facebook-f"></i> */}
              <i className="bi bi-facebook"></i>
            </a>
            <a href="" className="me-4 text-reset">
              {/* <i className="fab fa-twitter"></i> */}
              <i className="bi bi-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              {/* <i className="fab fa-google"></i> */}
              <i className="bi bi-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              {/* <i className="fab fa-instagram"></i> */}
              <i className="bi bi-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              {/* <i className="fab fa-linkedin"></i> */}
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <div>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Company name and logo
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a className="text-reset tdn cp">Angular</a>
                </p>
                <p>
                  <a className="text-reset tdn cp">React</a>
                </p>
                <p>
                  <a className="text-reset tdn cp">Vue</a>
                </p>
                <p>
                  <a className="text-reset tdn cp">Laravel</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a className="text-reset tdn cp">Pricing</a>
                </p>
                <p>
                  <a className="text-reset tdn cp">Settings</a>
                </p>
                <p>
                  <a className="text-reset tdn cp">Orders</a>
                </p>
                <p>
                  <a className="text-reset tdn cp">Help</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="bi bi-house-fill"></i> New York, NY 10012, US</p>
                <p>
                <i className="bi bi-envelope-check-fill me-2"></i>
                  info@example.com
                </p>
                <p><i className="bi bi-telephone-fill"></i> + 01 234 567 88</p>
                <p><i className="bi bi-printer-fill"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-4 downbgcolor">
          © 2021 Copyright:
          <a className="text-reset fw-bold ms-1 tdn">Tejas Navale</a>
        </div>
      </footer>
    </div>
  )
}

export default Bottomfooter
