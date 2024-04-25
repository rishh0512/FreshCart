import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import { AllProductsData } from "../Data/AllProductsData";
import { v4 as uuidv4 } from "uuid";
const Cart = createContext();

const Context = ({ children }) => {
  const FruitsVegetablesProduct = AllProductsData.map((product) => ({
    id: uuidv4(),
    label: product.label,
    img: product.img,
    discountedPrice: product.discountedPrice,
    price: product.price,
    inStock: product.inStock,
    category:product.category,
    subcategory:product.subcategory,
    quantity:product.quantity,
    brand:product.brand,
    aboutProduct:product.aboutProduct,
    benefits:product.benefits,
    storageUses:product.storageUses,
  }))
 


  const [state, dispatch] = useReducer(cartReducer, {
    FruitsVegetablesProduct: FruitsVegetablesProduct,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
