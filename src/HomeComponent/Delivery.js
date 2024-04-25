import React from "react";
import Process1 from "../Assests/HomePage/process1.png";
import Process2 from "../Assests/HomePage/process2.png";
import Process3 from "../Assests/HomePage/process3.png";
import "./HeroComponent.css";
const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
      <h2 className="text-center display-4 mt-4 fw-bold">How Delivery Works</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process1} className="w-50 h-50" alt="" />
          </div>
          <h5>Pick Your Needs</h5>
          <p>
            Refill your kitchen monthly
            essentials from our wide range of options in every category.
          </p>
        </div>
        <div className=" col px-5 text-center">
          <div className="mb-3">
            <img src={Process2} className="w-50 h-50" alt="" />
          </div>
          <h5>We Deliver the Bag</h5>
          <p>
            Select a time slot for delivery and your order will be delivered
            right to your doorstep.
          </p>
        </div>
        <div className=" col px-5 text-center">
          <div className="mb-3">
            <img src={Process3} className="w-50 h-50" alt="" />
          </div>
          <h5>You Enjoy Your Veg</h5>
          <p>Decode the taste and nutritions of our items, cooked with love.</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
