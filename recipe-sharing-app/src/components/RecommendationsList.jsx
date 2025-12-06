import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations} style={{ marginBottom: 10 }}>
        Refresh Recommendations
      </button>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
