import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RecipeCartCard from "./RecipeCartCard";
import PomegranateAmericanoRecipe from "../Assests/HomePage/PomegranateAmericanoRecipe.jpg";
import FrothyIcedMatchaGreenTeaRecipe from "../Assests/HomePage/FrothyIcedMatchaGreenTeaRecipe.jpg";
import GarlicConfitRecipe from "../Assests/HomePage/GarlicConfitRecipe.jpg";
import ChineseBlackRice from "../Assests/HomePage/ChineseBlackRice.jpg";
import CoconutCupcakes from "../Assests/HomePage/CoconutCupcakes.jpg";
import SmokedChickenWings from "../Assests/HomePage/SmokedChickenWings.jpeg";
import ArrabbiataPastaSauce from "../Assests/HomePage/ArrabbiataPastaSauce.jpg";
const RecipeCart = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider py-5">
      <Link to="/recipe" className=" text-decoration-none">
        <h1 className="text-center display-4 mt-4 fw-bold text-light">
          Shop Here
          <br /> Your Next Cookout
        </h1>
      </Link>
      <div className="container mt-5">
        <Slider {...settings}>
          <div className="p-1">
            <RecipeCartCard
              Image={FrothyIcedMatchaGreenTeaRecipe}
              Description="Frothy Iced Matcha Green Tea Recipe"
            />
          </div>
          <div className="p-1">
            <RecipeCartCard
              Image={GarlicConfitRecipe}
              Description="Garlic Confit Recipe"
            />
          </div>
          <div className="p-1">
            <RecipeCartCard
              Image={PomegranateAmericanoRecipe}
              Description="Pomegranate Americano Recipe"
            />
          </div>
          <div className="p-1">
            <RecipeCartCard
              Image={CoconutCupcakes}
              Description="Coconut Cupcakes"
            />
          </div>
          <div className="p-1">
            <RecipeCartCard
              Image={ArrabbiataPastaSauce}
              Description="Arrabbiata Pasta Sauce"
            />
          </div>
          <div className="p-1">
            <RecipeCartCard
              Image={ChineseBlackRice}
              Description="Chinese Black Rice"
            />
          </div>
          <div className="p-1">
            <RecipeCartCard
              Image={SmokedChickenWings}
              Description="Smoked Chicken Wings"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RecipeCart;
