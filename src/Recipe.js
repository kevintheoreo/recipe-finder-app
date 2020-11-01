import React from 'react';
import './Recipe.css';

const Recipe = (props) => {

  const ingredientsArray = props.ingredients;

  return(
    <div className="recipePanel">
      <h2>{props.title}</h2>
      <p>Calories: {props.calories}</p>
      <img src={props.image} alt=""></img>
      <p className="underline">Ingredients:</p>
      <ul className="ingredients-list">
        {ingredientsArray.map(
          (item,index) => (<li key={index}>{item}</li>)
        )}
      </ul>
    </div>
  )
}

export default Recipe;
