import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Handle the change in search input
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Trigger filtering when the search term changes
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
        style={{ padding: '10px', width: '300px' }}
      />
    </div>
  );
};

export default SearchBar;
