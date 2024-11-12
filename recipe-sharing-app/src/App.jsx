import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './recipeStore';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    // Hardcoded example data (can be replaced with data from an API)
    const initialRecipes = [
      { id: 1, title: 'Spaghetti', description: 'Delicious Italian pasta' },
      { id: 2, title: 'Fried Chicken', description: 'Crispy and golden' },
      { id: 3, title: 'Grilled Cheese', description: 'Simple and tasty' },
      { id: 4, title: 'Lasagna', description: 'Classic comfort food' },
    ];
    setRecipes(initialRecipes);

    // Generate recommendations when recipes are set
    generateRecommendations();
  }, [setRecipes, generateRecommendations]);

  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>

        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
}

export default App;
