import React from "react";
import SingleProduct from "./SingleProduct";
import { CartState } from "../../Context/Context";
import SaleBanner from "../SaleBanner";

function FruitsVegetables() {
  const {
    state: { FruitsVegetablesProduct },
  } = CartState();
  return (
    <>
      <SaleBanner />
      <div className="product-container">
        <div className="product-products">
          {FruitsVegetablesProduct.map(
            (product) => (
              <SingleProduct product={product} key={product.id} />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default FruitsVegetables;
