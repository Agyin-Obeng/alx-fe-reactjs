import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        display: "block",
        width: "300px",
        marginBottom: "20px",
        padding: "8px",
      }}
    />
  );
};

export default SearchBar;
