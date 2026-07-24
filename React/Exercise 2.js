// ============================================================================
// Exercise 02: React Components - Student Management Portal
// Application Name: StudentApp
// ============================================================================
//
// Objectives:
// - Create class components
// - Create multiple components
// - Render components
//
// Steps to create and run:
// 1. npx create-react-app StudentApp
// 2. cd StudentApp
// 3. Create src/Components/ folder
// 4. Create Home.js, About.js, Contact.js inside src/Components/
// 5. Update src/App.js
// 6. npm start
// 7. Open browser at http://localhost:3000
//
// ============================================================================

// ===================== src/Components/Home.js =====================

import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Home page of Student Management Portal</h2>
      </div>
    );
  }
}

export default Home;

// ===================== src/Components/About.js =====================

import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the About page of the Student Management Portal</h2>
      </div>
    );
  }
}

export default About;

// ===================== src/Components/Contact.js =====================

import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Contact page of the Student Management Portal</h2>
      </div>
    );
  }
}

export default Contact;

// ===================== src/App.js =====================

import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Student Management Portal</h1>
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
