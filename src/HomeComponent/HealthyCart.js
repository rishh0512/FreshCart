import React from "react";
import HealthyCartCard from "./HealthyCartCard";
import Turnip from "../Assests/HomePage/turnip.png";
import Celery from "../Assests/HomePage/Celery.png";
import Amaranth from "../Assests/HomePage/Amaranth.png";
import Veg1 from "../Assests/HomePage/veg1.jpg";
import Veg2 from "../Assests/HomePage/veg2.jpg";
import Veg3 from "../Assests/HomePage/veg3.jpg";
import { Link } from "react-router-dom";

const HealthyCart = () => {
  return (
    <div className="container-fluid px-4 py-5 healthy">
      <div className="d-flex justify-content-between">
        <h2 className="text-success mt-2 fw-bold ">
          {" "}
          Customers Healthy Diet Choice
        </h2>
        <Link to='/allProducts'><button className="btn btn-transparent fw-bold px-3 rounded-0 border border-success">
          All Products
        </button></Link>
      </div>
      <div classNam="container mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <HealthyCartCard
            Image={Veg1}
            Image2={Turnip}
            Title="Fresh Fruits"
            Description="Fruit and vegetables are a good source of vitamins and minerals, including folate, vitamin C and potassium. They're an excellent source of dietary fibre, which can help to maintain a healthy gut and prevent constipation and other digestion problems."
          />
          <HealthyCartCard
            Image={Veg2}
            Image2={Amaranth}
            Title="Fresh Vegetables"
            Description="Vegetables are full of essential vitamins, minerals, and antioxidants that provide many important health benefits to your body.Green leafy vegetables also contain vitamin K, which is believed to prevent calcium from building up in your arteries."
          />
          <HealthyCartCard
            Image={Veg3}
            Image2={Celery}
            Title="Fresh Salad"
            Description="Salads are a healthy food that contain vitamins, minerals, fiber, and antioxidants. Fiber can help with digestion, prevent constipation, and promote regular bowel movements."
          />
        </div>
      </div>
    </div>
  );
};

export default HealthyCart;
