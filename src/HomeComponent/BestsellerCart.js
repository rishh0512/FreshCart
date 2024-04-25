import React from "react";
import BestsellerCartCard from "./BestsellerCartCard";
import Product1 from "../Assests/FruitsVegetablesImages/Avocado.webp";
import Product2 from "../Assests/FruitsVegetablesImages/Mushrooms-Button.webp";
import Product3 from "../Assests/HerbsSeasonings/fresho-curry-leaves-removebg-preview.png";
import Product4 from "../Assests/HerbsSeasonings/fresho-lemon-grass-removebg-preview.png";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function BestsellerCart() {
  const {
    state: { FruitsVegetablesProduct },
  } = CartState();
  const navigate = useNavigate();
  const BestSeller1 = (product) => product.label === "Avocado";
  const BestSeller2 = (product) => product.label === "Mushrooms-Button";
  const BestSeller3 = (product) => product.label === "Curry Leaves";
  const BestSeller4 = (product) => product.label === "Lemon Grass";
  const BestSeller5 = (product) =>
    product.label === "Coriander leaves 100g + Garlic 250g + Ginger 250g";

  function openProductDetails(id) {
    navigate(`/allProducts/${id}`);
  }
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <h3 className="text-success"> Bestseller Pickups</h3>
        <Link to="/allProducts">
          <button className="btn btn-transparent fw-bold px-3 rounded-0 border border-success">
            All Products
          </button>
        </Link>
      </div>
      <div className="row mt-5">
        {FruitsVegetablesProduct.filter(BestSeller1).map((product) => (
          <>
            <BestsellerCartCard
              Id={product.id}
              Image={product.img}
              Name={product.label}
              Price={product.price}
              Color="p1color"
            />
          </>
        ))}
        {FruitsVegetablesProduct.filter(BestSeller2).map((product) => (
          <>
            <BestsellerCartCard
              Id={product.id}
              Image={product.img}
              Name={product.label}
              Price={product.price}
              Color="p2color"
            />
          </>
        ))}
        {FruitsVegetablesProduct.filter(BestSeller3).map((product) => (
          <>
            <BestsellerCartCard
              Id={product.id}
              Image={product.img}
              Name={product.label}
              Price={product.price}
              Color="p3color"
            />
          </>
        ))}

        <div className="col-12 col-md-8">
          <div className="p-1">
            <div className="border shadow-sm d-flex p4color">
              {FruitsVegetablesProduct.filter(BestSeller4).map((product) => (
                <>
                  <div className="text-center px-0 px-lg-5">
                    <img src={product.img} alt="" className="p-Image" />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h3>{product.label}</h3>
                    <p>₹{product.price}</p>
                    <button
                      className="btn bg-white w-100 rounded-0"
                      onClick={() => openProductDetails(product.id)}
                    >
                      Details
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="p-1">
            {FruitsVegetablesProduct.filter(BestSeller5).map((product) => (
              <div className="border shadow-sm py-4 px-3 p5color">
                <h3>{product.label}</h3>
                <p>₹{product.price}</p>
                <button
                  className="btn bg-white w-100 rounded-0"
                  onClick={() => openProductDetails(product.id)}
                >
                  {" "}
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestsellerCart;
