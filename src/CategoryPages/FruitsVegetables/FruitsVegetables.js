import React from "react";
import SingleProduct from "../../Components/AllFruitsVegetables/SingleProduct";
import { CartState } from "../../Context/Context";
function FruitsVegetables() {
  const {
    state: { FruitsVegetablesProduct },
  } = CartState();
  const OnlyFruitsVegetables = (product) =>
    product.category === "Fruits&Vegetables";
  return (
    <div>
      <h2 className="text-center display-4 mt-4 fw-bold">
       Fruits & Vegetables
      </h2>

      <div className="product-container">
        <div className="product-products">
          {FruitsVegetablesProduct.filter(OnlyFruitsVegetables).map(
            (product) => (
              <SingleProduct product={product} key={product.id} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default FruitsVegetables;
