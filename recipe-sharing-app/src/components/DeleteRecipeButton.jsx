// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm('Delete this recipe?');
    if (!ok) return;
    deleteRecipe(id);
    // after deleting, go back to home
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
