import React from "react";

const Info = ({ name, data }) => {
  if (!data || !data.drinks) {
    return <p>No cocktail found for "{name}".</p>;
  }

  const cocktail = data.drinks[0];

  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        style={{ width: "200px" }}
      />

      <h3>Ingredients:</h3>

      <ul>
        {Array.from({ length: 15 }).map((_, i) => {
          const ingredient = cocktail[`strIngredient${i + 1}`];
          const measure = cocktail[`strMeasure${i + 1}`];
          return ingredient ? (
            <section className="ingredient-item" key={i}>
              <div className="ingredient-name">{ingredient}</div>
              <div className="ingredient-measure">{measure}</div>
            </section>
          ) : null;
        })}
      </ul>

      <h3>Instructions:</h3>
      <p>{cocktail.strInstructions}</p>
      <footer> Cheers! </footer>
    </div>
  );
};

export default Info;
