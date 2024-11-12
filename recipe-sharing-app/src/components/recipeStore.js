import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes based on the search term
  filterRecipes: () =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { filteredRecipes: filtered };
    }),

  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Set the list of recipes directly
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
