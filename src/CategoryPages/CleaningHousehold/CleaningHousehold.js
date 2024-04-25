import React from 'react'
import SingleProduct from '../../Components/AllFruitsVegetables/SingleProduct'
import {CartState} from '../../Context/Context'
function CleaningHousehold() {
    const {
        state: { FruitsVegetablesProduct },
        
      } = CartState();
      const OnlyCleaningHousehold = (product) =>
      product.category === "CleaningHousehold";
  return (
    <div>
    <h2 className="text-center display-4 mt-4 fw-bold">
     Household Cleaners
    </h2>

    <div className="product-container">
      <div className="product-products">
        {FruitsVegetablesProduct.filter(OnlyCleaningHousehold).map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default CleaningHousehold
