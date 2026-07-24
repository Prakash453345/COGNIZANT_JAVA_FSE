// ============================================================================
// Exercise 09: ES6 Features - Cricket App
// Application Name: cricketapp
// ============================================================================
//
// Objectives:
// - Use map() method of ES6
// - Apply arrow functions of ES6
// - Implement Destructuring features of ES6
// - Implement Merge/Spread features of ES6
//
// Steps to create and run:
// 1. npx create-react-app cricketapp
// 2. cd cricketapp
// 3. Create src/Components/ folder
// 4. Create ListofPlayers.js and IndianPlayers.js inside src/Components/
// 5. Update src/App.js
// 6. npm start
// 7. Open browser at http://localhost:3000
//
// ============================================================================

// ===================== src/Components/ListofPlayers.js =====================

import React, { Component } from 'react';

class ListofPlayers extends Component {
  render() {
    // Declare an array with 11 players using map feature of ES6
    const players = [
      { name: 'Virat Kohli', score: 82 },
      { name: 'Rohit Sharma', score: 95 },
      { name: 'KL Rahul', score: 64 },
      { name: 'Shikhar Dhawan', score: 55 },
      { name: 'Hardik Pandya', score: 78 },
      { name: 'Rishabh Pant', score: 42 },
      { name: 'Ravindra Jadeja', score: 71 },
      { name: 'Jasprit Bumrah', score: 30 },
      { name: 'Mohammed Shami', score: 68 },
      { name: 'Yuzvendra Chahal', score: 25 },
      { name: 'Shreyas Iyer', score: 88 }
    ];

    // Display all players using map()
    const playerList = players.map((player, index) => (
      <li key={index}>
        {player.name} - Score: {player.score}
      </li>
    ));

    // Filter players with scores below 70 using arrow functions of ES6
    const filteredPlayers = players.filter((player) => player.score < 70);

    const filteredList = filteredPlayers.map((player, index) => (
      <li key={index} style={{ color: 'red' }}>
        {player.name} - Score: {player.score}
      </li>
    ));

    return (
      <div>
        <h2>All Players</h2>
        <ul>{playerList}</ul>

        <h2>Players with Score Below 70</h2>
        <ul>{filteredList}</ul>
      </div>
    );
  }
}

export default ListofPlayers;

// ===================== src/Components/IndianPlayers.js =====================

import React, { Component } from 'react';

class IndianPlayers extends Component {
  render() {
    // Destructuring feature of ES6 - Odd and Even team players
    const teamPlayers = [
      'Player 1', 'Player 2', 'Player 3', 'Player 4',
      'Player 5', 'Player 6', 'Player 7', 'Player 8',
      'Player 9', 'Player 10', 'Player 11'
    ];

    // Destructuring into odd and even indexed players
    const oddTeamPlayers = teamPlayers.filter((_, index) => index % 2 !== 0);
    const evenTeamPlayers = teamPlayers.filter((_, index) => index % 2 === 0);

    // Merge feature of ES6 - T20 and Ranji Trophy players
    const T20players = ['Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Hardik Pandya', 'Rishabh Pant'];
    const RanjiTrophyPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Mayank Agarwal', 'Prithvi Shaw'];

    // Merge two arrays using spread operator (ES6)
    const allPlayers = [...T20players, ...RanjiTrophyPlayers];

    return (
      <div>
        <h2>Odd Team Players (Destructuring)</h2>
        <ul>
          {oddTeamPlayers.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>

        <h2>Even Team Players (Destructuring)</h2>
        <ul>
          {evenTeamPlayers.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>

        <h2>T20 Players</h2>
        <ul>
          {T20players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>

        <h2>Ranji Trophy Players</h2>
        <ul>
          {RanjiTrophyPlayers.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>

        <h2>Merged Players (Spread Operator)</h2>
        <ul>
          {allPlayers.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default IndianPlayers;

// ===================== src/App.js =====================

import React, { Component } from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true  // Toggle between true and false to switch views
    };
  }

  render() {
    const { flag } = this.state;

    return (
      <div className="App">
        <h1>Cricket App</h1>
        <button onClick={() => this.setState({ flag: !flag })}>
          Toggle View (Flag: {flag.toString()})
        </button>
        <hr />
        {/* Simple if-else using ternary operator with flag variable */}
        {flag ? (
          <ListofPlayers />
        ) : (
          <IndianPlayers />
        )}
      </div>
    );
  }
}

export default App;
