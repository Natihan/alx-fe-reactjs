import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes); // Use filtered recipes
  const searchTerm = useRecipeStore((state) => state.searchTerm); // Get current search term

  // Show message when no recipes match the search term
  const noResultsMessage = searchTerm ? 'No recipes found' : 'No recipes available';

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>{noResultsMessage}</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
