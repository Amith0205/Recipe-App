import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Recipe';

const App = () => {
  // console.log(process.env);
  const APP_ID = "e710ff88";
  const APP_KEY = process.env.REACT_APP_API_KEY;
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pasta");

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data);

  };
  //Update search only copies the value entered in the input box.
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  //On form submission the search input obtained is sent as a query.
  const getSearch = e => {
    e.preventDefault(); //important,let's you update the search query.
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}  >
        <input placeholder='Enter the recipe you want to search e.g.chicken...' className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" >Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />

        ))}
      </div>

    </div>
  );
}

export default App;
