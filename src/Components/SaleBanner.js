import React from "react";
import saleImage from "../Assests/HomePage/salebanner.webp";
import { Link } from "react-router-dom";
function SaleBanner() {
  return (
    <div>
      <Link to="/cold-drinks">
        <img
          src={saleImage}
          alt="freshcart"
          style={{ maxWidth: "100vw", width: "100%" }}
        />
      </Link>
    </div>
  );
}

export default SaleBanner;
