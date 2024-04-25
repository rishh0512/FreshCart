import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BestsellerCartCard = ({ Image, Name, Price, Color, Id }) => {
  const navigate = useNavigate();
  function openProductDetails(id) {
    navigate(`/allProducts/${id}`);
  }
  return (
    <div className="col-12 col-md-4">
      <div className="p-1 ">
        <div className={`border shadow-sm p-3 ${Color}`}>
          <img src={Image} alt="" className="w-75 h-75" />
          <h3>{Name}</h3>
          <p>₹{Price}</p>

          <button
            className="btn bg-white w-100 rounded-0"
            onClick={() => openProductDetails(Id)}
          >
            {" "}
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestsellerCartCard;
