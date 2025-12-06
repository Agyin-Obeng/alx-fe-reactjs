import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

const Home = () => (
  <>
    <SearchBar />      {/* 🔹 Add search bar here */}
    <AddRecipeForm />
    <RecipeList />
  </>
);

export default Home;
