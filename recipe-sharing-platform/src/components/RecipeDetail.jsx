import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.json'; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the recipe ID from the URL
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details from the data.json file based on the ID
    const recipeData = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(recipeData);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <button
        onClick={() => navigate('/')}
        className="mb-6 text-blue-500 hover:underline"
      >
        Back to Home
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Recipe Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Recipe Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-800">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
            <ol className="list-decimal pl-5 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-800">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
