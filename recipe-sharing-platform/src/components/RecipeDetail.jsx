import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">

        {/* Back Button */}
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Recipes
        </Link>

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mt-4 shadow-md"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mt-6 mb-4">
          {recipe.title}
        </h1>

        {/* Summary */}
        <p className="text-gray-700 text-lg mb-6">
          {recipe.summary}
        </p>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Cooking Instructions
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Step one of the recipe goes here.</li>
            <li>Step two of the recipe goes here.</li>
            <li>Step three of the recipe goes here.</li>
          </ol>
        </div>

      </div>
    </div>
  );
}

export default RecipeDetail;
