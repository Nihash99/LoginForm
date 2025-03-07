// src/App.js

import React from 'react';
import './App.css';
import LoginPage from './LoginPage'; // Import LoginPage component

function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <LoginPage /> {/* Render the LoginPage component */}
    </div>
  );
}

export default App;
