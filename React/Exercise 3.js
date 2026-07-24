// ============================================================================
// Exercise 03: Function Components - Score Calculator
// Application Name: scorecalculatorapp
// ============================================================================
//
// Objectives:
// - Create a function component
// - Apply style to components
// - Render a component
//
// Steps to create and run:
// 1. npx create-react-app scorecalculatorapp
// 2. cd scorecalculatorapp
// 3. Create src/Components/ folder
// 4. Create CalculateScore.js inside src/Components/
// 5. Create src/Stylesheets/ folder
// 6. Create mystyle.css inside src/Stylesheets/
// 7. Update src/App.js
// 8. npm start
// 9. Open browser at http://localhost:3000
//
// ============================================================================

// ===================== src/Components/CalculateScore.js =====================

import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = total / 5; // Assuming 5 subjects
  const status = average >= goal ? 'Passed' : 'Failed';

  return (
    <div className="score-card">
      <h2>Student Score Calculator</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><strong>School:</strong></td>
            <td>{school}</td>
          </tr>
          <tr>
            <td><strong>Total Score:</strong></td>
            <td>{total}</td>
          </tr>
          <tr>
            <td><strong>Average Score:</strong></td>
            <td>{average.toFixed(2)}</td>
          </tr>
          <tr>
            <td><strong>Goal:</strong></td>
            <td>{goal}</td>
          </tr>
          <tr>
            <td><strong>Status:</strong></td>
            <td style={{ color: status === 'Passed' ? 'green' : 'red' }}>
              {status}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalculateScore;

// ===================== src/Stylesheets/mystyle.css =====================

/*
.score-card {
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.score-card h2 {
  text-align: center;
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.score-card table {
  width: 100%;
  border-collapse: collapse;
}

.score-card td {
  padding: 8px 12px;
  border-bottom: 1px solid #ddd;
}

.score-card tr:last-child td {
  border-bottom: none;
}
*/

// ===================== src/App.js =====================

import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Score Calculator App</h1>
      <CalculateScore
        name="John Doe"
        school="ABC International School"
        total={425}
        goal={80}
      />
      <CalculateScore
        name="Jane Smith"
        school="XYZ Public School"
        total={350}
        goal={80}
      />
    </div>
  );
}

export default App;
