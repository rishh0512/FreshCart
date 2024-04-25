import React from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function RecipeTile({ recipe }) {
  const paramsid = useParams();
  const id = paramsid.id;
 
  const navigate = useNavigate();
  function openRecipeDetail(label){
   navigate(`/${(label)}`);
      }
  return (
   
      <div className="Recipe-Tile"  onClick={()=>openRecipeDetail(recipe["recipe"]["label"])} style={{cursor:'pointer'}}>
        <img className="recipeTile-img" src={recipe["recipe"]["image"]} />

        <p className="recipeTile-label" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
        
      </div>

  );
}

export default RecipeTile;
