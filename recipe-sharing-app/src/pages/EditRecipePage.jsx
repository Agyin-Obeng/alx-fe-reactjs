// src/pages/EditRecipePage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from '../components/EditRecipeForm';

const EditRecipePage = () => {
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
      <h2>Edit Recipe</h2>
      <EditRecipeForm initialData={recipe} />
    </div>
  );
};

export default EditRecipePage;
