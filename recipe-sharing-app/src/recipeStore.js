import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Add recipe
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // Update recipe
  updateRecipe: (id, updatedData) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // Search & filter
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes,
    }),
}));
