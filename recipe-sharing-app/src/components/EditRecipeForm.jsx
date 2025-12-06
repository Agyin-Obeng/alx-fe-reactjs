import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ initialData }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(initialData.title);
  const [description, setDescription] = useState(initialData.description);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    updateRecipe({ id: initialData.id, title, description });
    navigate(`/recipe/${initialData.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '300px', height: '80px' }}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
