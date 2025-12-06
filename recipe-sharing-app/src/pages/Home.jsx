import SearchBar from "../components/SearchBar";
import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";
import FavoritesList from "../components/FavoritesList";
import RecommendationsList from "../components/RecommendationsList";

const Home = () => (
  <>
    <SearchBar />
    <AddRecipeForm />
    <RecipeList />
    <FavoritesList />          {/* 🔹 Show favorites */}
    <RecommendationsList />    {/* 🔹 Show recommendations */}
  </>
);

export default Home;
