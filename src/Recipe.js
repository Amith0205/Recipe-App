import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.recbod}>
        <div className={style.recbodl}>
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
          <p>Calories : {calories}</p>
        </div>
        <img className={style.image} src={image} alt="" />
      </div>
    </div>
  );
};
export default Recipe;
