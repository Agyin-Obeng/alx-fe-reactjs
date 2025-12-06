import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div style={{ marginTop: 8 }}>
            <Link to={`/recipe/${recipe.id}/edit`} style={{ marginRight: 8 }}>
              Edit
            </Link>
            <Link to={`/recipe/${recipe.id}`}>View</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
