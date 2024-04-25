import React from "react";
import { Link } from "react-router-dom";

const RecipeCartCard = ({Image, Description}) => {
  return (
   
<div class="card shadow-sm">
      <img src={Image} alt="" style={{height: "200px"}}/>
      <div class="card-body">
        <p>{Description}</p>
      </div>
    </div>
  
  );
};

export default RecipeCartCard;