import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {recipe.summary}
                </p>

                <span className="text-blue-600 font-medium hover:underline">
                  View Recipe →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
