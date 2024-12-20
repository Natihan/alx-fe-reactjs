<<<<<<< HEAD
=======
import React from 'react';
import Counter from './components/Counter';
>>>>>>> 9e1e54e3d0609ce5f095cd43b111c9727e70d1b5
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


<<<<<<< HEAD

=======
function App() {
  return (
    <div>
      <h1>Simple Counter Application</h1>
      <Counter />  {/* Include the Counter component */}
    </div>
  );
}
>>>>>>> 9e1e54e3d0609ce5f095cd43b111c9727e70d1b5
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </div>
    );
}
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
function App() {
    return (
        <div>
            <WelcomeMessage />
            {/* Other components or content can go here */}
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
