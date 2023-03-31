import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to="https://www.facebook.com/" class="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="https://twitter.com/?lang=en" class="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="https://www.instagram.com/" class="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Smoothie Planet
              </h6>
              <p>We are creating smoothie recepies since 1886.</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="#!" className="text-reset">
                  Sweet Smoothies
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Sour Smoothies
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Detox Smoothies
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Diet Smoothies
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="#!" className="text-reset">
                  Subscribe
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Berlin 12047, Germany
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 49 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 49 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 copyright">
        © 2021 Copyright:
        <Link className="text-reset fw-bold" href="./index.html">
          Smoothie Planet
        </Link>
      </div>
    </footer>
  );
}
