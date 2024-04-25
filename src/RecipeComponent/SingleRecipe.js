import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import SelectedRecipeDetail from "./SelectedRecipeDetail";
function SingleRecipe() {
  const paramslabel = useParams();
  const label = paramslabel.label;

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan");

  const YOUR_APP_ID = "ca8ca3bc";
  const YOUR_APP_KEY = "6bcdc8939411715d706c606be6e1c7e7";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}&from=0&to=25`;
  useEffect(() => {
    getRecipes();
  }, []);
  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(recipes);
  }

  const selectedRecipe = (recipe) => recipe["recipe"]["label"] === label;
  return (
    <div>
      <div>
        <div>
          {recipes.filter(selectedRecipe).map((recipe) => (
            <SelectedRecipeDetail recipe={recipe} key={label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
