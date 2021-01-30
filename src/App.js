import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;
  const [recipes, setRecipes] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [query, setQuery] = useState("chicken");
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
  };

  const updateSearch = (e) => {
    setSearchTitle(e.target.value);
    console.log("searchTitle:" + searchTitle);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchTitle);
    console.log("query:" + query);
  };

  const floorString = (aString) => {
    var aNum = parseInt(aString);
    return aNum + " kcal";
  };

  return (
    <div className="App">
      <h1 id="app-title">Kevin's Recipe Finder App</h1>
      <p id="app-subtitle">Powered by Edamam Recipe API (free)</p>
      <p id="app-subtitle">Developed by Kevin De Rozario</p>
      <form className="search-form">
        <input
          type="text"
          id="searchInputBox"
          placeholder="Enter keyword here"
          value={searchTitle}
          onChange={updateSearch}
        ></input>
        <button type="submit" id="searchButton" onClick={getSearch}>
          <i className="fas fa-search"></i>
        </button>
      </form>

      <div className="App-container">
        {recipes.map((data) => (
          <Recipe
            key={data.recipe.label}
            title={data.recipe.label}
            calories={floorString(data.recipe.calories)}
            image={data.recipe.image}
            ingredients={data.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
