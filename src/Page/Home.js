import React from "react";
import Hero from "../HomeComponent/Hero";
import Delivery from "../HomeComponent/Delivery";
import HealthyCart from "../HomeComponent/HealthyCart";
import RecipeCart from "../HomeComponent/RecipeCart";
import BestsellerCart from "../HomeComponent/BestsellerCart";

function Home() {
  return (
    <div>
      <Hero />
      <Delivery/>
      <HealthyCart/>
      <RecipeCart/>
      <BestsellerCart/>
    </div>
  );
}

export default Home;
