import React, { useState } from 'react';

const AddRecipeForm = () => {
  // Step 1: Initialize state for form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [image, setImage] = useState('');
  
  // Step 2: Initialize state for error messages
  const [errors, setErrors] = useState({});

  // Step 3: Validate the form fields
  const validate = () => {
    const newErrors = {};

    // Check if title is provided
    if (!title) newErrors.title = 'Title is required';
    
    // Check if ingredients are provided and contain at least two items
    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Ingredients must have at least two items';
    }

    // Check if steps are provided
    if (!steps) newErrors.steps = 'Preparation steps are required';

    // If there are errors, set the error state
    setErrors(newErrors);

    // Return true if no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validate()) {
      return; // If validation fails, prevent form submission
    }

    // Clear any previous errors
    setErrors({});

    // Prepare the recipe object to submit
    const newRecipe = {
      title,
      ingredients: ingredients.split(','),
      steps: steps.split('\n'),
      image, // Optional field
    };

    // In a real app, here you'd save this data to a database or server
    console.log('New Recipe Submitted:', newRecipe);

    // Reset form fields
    setTitle('');
    setIngredients('');
    setSteps('');
    setImage('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-4">Add a New Recipe</h1>

      {/* Step 5: Display error messages */}
      {Object.keys(errors).length > 0 && (
        <div className="bg-red-100 text-red-500 p-4 mb-4 rounded-md">
          {Object.values(errors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`mt-1 p-2 w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients (separate with commas)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className={`mt-1 p-2 w-full border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter ingredients separated by commas"
          />
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className={`mt-1 p-2 w-full border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter the preparation steps"
          />
        </div>

        {/* Recipe Image URL */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL (Optional)</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL (optional)"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
