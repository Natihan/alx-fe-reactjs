import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import HomePage from './components/HomePage'; // Import HomePage component
import RecipeDetail from './components/RecipeDetail';


function App() {
  return (
    <Router>
      <Routes>
        {/* HomePage Route */}
        <Route path="/" element={<HomePage />} />
        {/* Recipe Detail Route, dynamic path with :id */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

const App = () => {
  return (
    <div className="App">
      <HomePage /> {/* Use HomePage component */}
    </div>
  );
};

function App() {
  return (
    <div className="text-center p-4">
      <h1 className="text-4xl text-blue-500">Welcome to Recipe Sharing Platform</h1>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
