import React from 'react'
import SingleProduct from "../../Components/AllFruitsVegetables/SingleProduct";
import { CartState } from "../../Context/Context";
import "../../Components/AllFruitsVegetables/Styles.css";
function EnergyHealth() {
  const {
    state: { FruitsVegetablesProduct },
  } = CartState();
  const OnlyBeverages = (product) =>
    product.category === "Beverages" && product.subcategory === "EnergyDrinks";
  return (
    <div>
    <h2 className="text-center display-4 mt-4 fw-bold">
    Taste the Ultimate Power of ENERGY DRINK.
    </h2>

    <div className="product-container">
      <div className="product-products">
        {FruitsVegetablesProduct.filter(OnlyBeverages).map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default EnergyHealth
