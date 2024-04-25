import React from "react";
import SingleProduct from "../../Components/AllFruitsVegetables/SingleProduct";
import { CartState } from "../../Context/Context";
function BabyCare() {
  const {
    state: { FruitsVegetablesProduct },
  } = CartState();
  const OnlyBabyCare = (product) => product.category === "BabyCare";
  return (
    <div>
      <h2 className="text-center display-4 mt-4 fw-bold">Baby Care</h2>
      <div className="product-container">
        <div className="product-products">
          {FruitsVegetablesProduct.filter(OnlyBabyCare).map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BabyCare;
