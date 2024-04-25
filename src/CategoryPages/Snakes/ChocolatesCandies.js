import React from "react";
import SingleProduct from "../../Components/AllFruitsVegetables/SingleProduct";
import { CartState } from "../../Context/Context";
import "../../Components/AllFruitsVegetables/Styles.css";
function ChocolatesCandies() {
  const {
    state: { FruitsVegetablesProduct },
  } = CartState();
  const OnlySnakes = (product) =>
    product.category === "Snakes" &&
    product.subcategory === "ChocolatesCandies";
  return (
    <div>
      <h2 className="text-center display-4 mt-4 fw-bold">
        Chocolates and Candies
      </h2>

      <div className="product-container">
        <div className="product-products">
          {FruitsVegetablesProduct.filter(OnlySnakes).map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChocolatesCandies;
