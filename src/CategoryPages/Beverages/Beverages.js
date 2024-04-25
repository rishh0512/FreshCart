import React from 'react'
import SingleProduct from '../../Components/AllFruitsVegetables/SingleProduct'
import {CartState} from '../../Context/Context'
function Beverages() {
    const {
        state: { FruitsVegetablesProduct },
        
      } = CartState();
      const OnlyBeverages = (product) =>
    product.category === "Beverages";
  return (
    <div>
    <h2 className="text-center display-4 mt-4 fw-bold">
   Beverages
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

export default Beverages
