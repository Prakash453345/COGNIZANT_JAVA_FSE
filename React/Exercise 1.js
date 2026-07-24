// ============================================================================
// Exercise 01: Setting up a React Environment
// Application Name: myfirstreact
// ============================================================================
//
// Objectives:
// - Define SPA and its benefits
// - Set up a React environment using create-react-app
//
// Steps to create and run:
// 1. npx create-react-app myfirstreact
// 2. cd myfirstreact
// 3. Replace src/App.js with the code below
// 4. npm start
// 5. Open browser at http://localhost:3000
//
// ============================================================================

// ===================== src/App.js =====================

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the first session of React</h1>
      </div>
    );
  }
}

export default App;

// ===================== src/index.js (default - no changes needed) =====================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
