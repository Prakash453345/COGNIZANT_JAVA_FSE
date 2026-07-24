// ============================================================================
// Exercise 12: Conditional Rendering - Ticket Booking App
// Application Name: ticketbookingapp
// ============================================================================
// Steps: npx create-react-app ticketbookingapp -> Create components -> npm start
// ============================================================================

// ===================== src/Components/GuestPage.js =====================

import React, { Component } from 'react';

class GuestPage extends Component {
  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Welcome, Guest!</h2>
        <p>Browse our available flights below:</p>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '80%' }}>
          <thead>
            <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
              <th style={thStyle}>Flight No</th>
              <th style={thStyle}>From</th>
              <th style={thStyle}>To</th>
              <th style={thStyle}>Departure</th>
              <th style={thStyle}>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tdStyle}>AI-101</td><td style={tdStyle}>Chennai</td><td style={tdStyle}>Delhi</td><td style={tdStyle}>10:00 AM</td><td style={tdStyle}>Rs.5500</td></tr>
            <tr><td style={tdStyle}>AI-202</td><td style={tdStyle}>Mumbai</td><td style={tdStyle}>Bangalore</td><td style={tdStyle}>2:30 PM</td><td style={tdStyle}>Rs.4200</td></tr>
            <tr><td style={tdStyle}>AI-303</td><td style={tdStyle}>Kolkata</td><td style={tdStyle}>Hyderabad</td><td style={tdStyle}>6:00 PM</td><td style={tdStyle}>Rs.4800</td></tr>
          </tbody>
        </table>
        <p style={{ color: 'red', marginTop: '20px' }}>Please login to book tickets.</p>
      </div>
    );
  }
}

const thStyle = { padding: '10px', border: '1px solid #ddd' };
const tdStyle = { padding: '10px', border: '1px solid #ddd', textAlign: 'center' };

export default GuestPage;

// ===================== src/Components/UserPage.js =====================

import React, { Component } from 'react';

class UserPage extends Component {
  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Welcome, User!</h2>
        <p>You are logged in. You can now book tickets.</p>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '80%' }}>
          <thead>
            <tr style={{ backgroundColor: '#27ae60', color: 'white' }}>
              <th style={thStyle}>Flight No</th>
              <th style={thStyle}>From</th>
              <th style={thStyle}>To</th>
              <th style={thStyle}>Departure</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tdStyle}>AI-101</td><td style={tdStyle}>Chennai</td><td style={tdStyle}>Delhi</td><td style={tdStyle}>10:00 AM</td><td style={tdStyle}>Rs.5500</td><td style={tdStyle}><button>Book</button></td></tr>
            <tr><td style={tdStyle}>AI-202</td><td style={tdStyle}>Mumbai</td><td style={tdStyle}>Bangalore</td><td style={tdStyle}>2:30 PM</td><td style={tdStyle}>Rs.4200</td><td style={tdStyle}><button>Book</button></td></tr>
            <tr><td style={tdStyle}>AI-303</td><td style={tdStyle}>Kolkata</td><td style={tdStyle}>Hyderabad</td><td style={tdStyle}>6:00 PM</td><td style={tdStyle}>Rs.4800</td><td style={tdStyle}><button>Book</button></td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const thStyle = { padding: '10px', border: '1px solid #ddd' };
const tdStyle = { padding: '10px', border: '1px solid #ddd', textAlign: 'center' };

export default UserPage;

// ===================== src/Components/LoginControl.js =====================

import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;
    let button;
    let page;

    if (isLoggedIn) {
      button = <button onClick={this.handleLogout} style={{ ...btnStyle, backgroundColor: '#e74c3c' }}>Logout</button>;
      page = <UserPage />;
    } else {
      button = <button onClick={this.handleLogin} style={{ ...btnStyle, backgroundColor: '#27ae60' }}>Login</button>;
      page = <GuestPage />;
    }

    return (
      <div>
        <div style={{ textAlign: 'center', margin: '20px' }}>{button}</div>
        {page}
      </div>
    );
  }
}

const btnStyle = { padding: '12px 30px', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' };

export default LoginControl;

// ===================== src/App.js =====================

import React, { Component } from 'react';
import LoginControl from './Components/LoginControl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>Ticket Booking App</h1>
        <LoginControl />
      </div>
    );
  }
}

export default App;
