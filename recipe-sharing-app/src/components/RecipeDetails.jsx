// src/pages/RecipeDetailsPage.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import DeleteRecipeButton from '../components/DeleteRecipeButton';

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipe/${recipe.id}/edit`} style={{ marginRight: 8 }}>
          Edit
        </Link>
        <DeleteRecipeButton id={recipe.id} />
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/">← Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
