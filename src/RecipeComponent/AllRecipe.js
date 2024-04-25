import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Recipe.css";
import RecipeTile from "./RecipeTile";

function AllRecipe() {
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
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="recipe-container">
      <h1>recepies page</h1>
      <form className="recipe-search" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="enter ingredients"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="recipe-input"
        />
        <input className="recipe-submit" type="submit" value="search" />
        <select className="recipe-healthLabels">
          <option onClick={() => setHealthLabel("vegan")}>vegan</option>
          <option onClick={() => setHealthLabel("gluten-free")}>
            gluten-free
          </option>
          <option onClick={() => setHealthLabel("vegetarian")}>
            vegetarian
          </option>
          <option onClick={() => setHealthLabel("dairy-free")}>
            dairy-free
          </option>
          <option onClick={() => setHealthLabel("wheat-free")}>
            wheat-free
          </option>
          <option onClick={() => setHealthLabel("No-oil added")}>
            No-oil added
          </option>
          <option onClick={() => setHealthLabel("peanut-free")}>
            peanut-free
          </option>
        </select>
      </form>
      <div className="recipe-recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default AllRecipe;
