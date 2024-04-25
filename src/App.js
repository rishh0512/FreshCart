import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import AllProducts from "./Page/AllProducts";
import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";
import Recipe from "./Page/Recipe";
import Cart from "./Cart/Cart";
import BathHygiene from './CategoryPages/BabyCare/BathHygiene'
import DiapersWipes from './CategoryPages/BabyCare/DiapersWipes'
import FoodFormula from './CategoryPages/BabyCare/FoodFormula'
import MothersMaternity from './CategoryPages/BabyCare/MothersMaternity'
import ColdCoffee from './CategoryPages/Beverages/ColdCoffee'
import ColdDrinks from './CategoryPages/Beverages/ColdDrinks'
import EnergyHealth from './CategoryPages/Beverages/EnergyHealth'
import DetergentsDishwash from './CategoryPages/CleaningHousehold/DetergentsDishwash'
import Disposables from './CategoryPages/CleaningHousehold/Disposables'
import FreshnersRepellents from './CategoryPages/CleaningHousehold/FreshnersRepellents'
import MopsBrushes from './CategoryPages/CleaningHousehold/MopsBrushes'
import Fruits from './CategoryPages/FruitsVegetables/Fruits'
import HerbsSeasonings from './CategoryPages/FruitsVegetables/HerbsSeasonings'
import Vegetables from './CategoryPages/FruitsVegetables/Vegetables'
import BiscuitsCookies from './CategoryPages/Snakes/BiscuitsCookies'
import BreakfastCereals from './CategoryPages/Snakes/BreakfastCereals'
import ChocolatesCandies from './CategoryPages/Snakes/ChocolatesCandies'
import PicklesChutney from './CategoryPages/Snakes/PicklesChutney'
import SingleProductDetails from './SingleProductDetails/SingleProductDetails'
import Deals from "./Page/Deals";

import SingleRecipe from "./RecipeComponent/SingleRecipe";
import BabyCare from "./CategoryPages/BabyCare/BabyCare";
import FruitsVegetables from "./CategoryPages/FruitsVegetables/FruitsVegetables";
import Beverages from "./CategoryPages/Beverages/Beverages";
import Snakes from "./CategoryPages/Snakes/Snakes";
import CleaningHousehold from "./CategoryPages/CleaningHousehold/CleaningHousehold";


function App() {
  return (
  
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/allProducts" element=<AllProducts /> />
        <Route path="/deals" element=<Deals /> />
        <Route  path="/allProducts/:id" element={ <SingleProductDetails/>}/>
         <Route  path="/:label" element={ <SingleRecipe/>}/> 
        <Route path="/recipe" element=<Recipe /> />
        <Route path="/cart" element=<Cart /> />
        <Route path="/babyCare" element=<BabyCare /> />
        <Route path="/fruitsVegetables" element=<FruitsVegetables /> />
        <Route path="/beverages" element=<Beverages /> />
        <Route path="/snakes" element=<Snakes /> />
        <Route path="/householdCleaners" element=<CleaningHousehold /> />
        <Route path="/bath-hygiene" element=<BathHygiene /> />
        <Route path="/diapers-wipes" element=<DiapersWipes /> />
        <Route path="/food-formula" element=<FoodFormula /> />
        <Route path="/mothers-maternity" element=<MothersMaternity /> />
        <Route path="/cold-coffee" element=<ColdCoffee /> />
        <Route path="/cold-drinks" element=<ColdDrinks /> />
        <Route path="/energy-health" element=<EnergyHealth /> />
        <Route path="/detergents-dishwash" element=<DetergentsDishwash /> />
        <Route path="/disposables" element=<Disposables /> />
        <Route path="/freshners-repellents" element=<FreshnersRepellents /> />
        <Route path="/mops-brushes" element=<MopsBrushes /> />
        <Route path="/fruits" element=<Fruits /> />
        <Route path="/herbs-seasonings" element=<HerbsSeasonings /> />
        <Route path="/vegetables" element=<Vegetables /> />
        <Route path="/biscuits-cookies" element=<BiscuitsCookies /> />
        <Route path="/breakfast-cereals" element=<BreakfastCereals /> />
        <Route path="/chocolates-candies" element=<ChocolatesCandies /> />
        <Route path="/pickles-chutney" element=<PicklesChutney /> />
  
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
