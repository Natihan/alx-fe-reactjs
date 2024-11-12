import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe from the state
    navigate('/'); // Navigate back to the home page (recipe list)
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
