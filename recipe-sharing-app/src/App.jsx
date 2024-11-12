import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './recipeStore';

function App() {
  // Load initial recipes (assuming hardcoded for now)
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Hardcoded example data (you can replace this with actual data from an API)
    const initialRecipes = [
      { id: 1, title: 'Spaghetti', description: 'Delicious Italian pasta' },
      { id: 2, title: 'Fried Chicken', description: 'Crispy and golden' },
      { id: 3, title: 'Grilled Cheese', description: 'Simple and tasty' },
    ];
    setRecipes(initialRecipes);
  }, [setRecipes]);

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
      </div>
    </Router>
  );
}

export default App;
