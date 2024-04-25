import React from "react";
import HeroImage from "../Assests/HomePage/hero1.png";
import Certificate from "../Assests/HomePage/certi.png";
import { Link } from "react-router-dom";
import "./HeroComponent.css";
const Hero = () => {
  return (
    <div className="container-fluid  px-4 py-5 hero-container">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-10 col-sm-8 col-lg-5">
          <img
            src={HeroImage}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 py-5 hero-text">
          <h1 className="display-1 fw-bold lh-1 mb-3">
            <span>From Farm to Table</span>
          </h1>
          <div className="d-flex align-items-center my-5">
            <img src={Certificate} alt="" className="me-3" />
            <p className="fw-bold">
              We have all your need to cook.
              <br />
              You call, we deliver.
            </p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to="/deals">
            <button
              type="button"
              className="btn btn-warning btn-lg px-4 me-md-2 rounded-0"
            >
              Deals of the Week
            </button>
            </Link>
            <Link to="/allProducts">
              {" "}
              <button
                type="button"
                className="btn btn-light btn-lg px-4 rounded-0"
              >
                Shop All Product
              </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
