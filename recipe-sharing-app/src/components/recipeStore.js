import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // Store user's favorite recipe IDs
  recommendations: [], // Store recommended recipes

  // Add recipe to favorites
  addFavorite: (recipeId) => set((state) => {
    // Prevent duplicate favorites
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),

  // Remove recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),

  // Generate recommendations based on favorites
  generateRecommendations: () => set((state) => {
    // Mock recommendation system: recommend recipes similar to the favorites
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Add recipes to the store
  setRecipes: (recipes) => set({ recipes }),

}));

export { useRecipeStore };
