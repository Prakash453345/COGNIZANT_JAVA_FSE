// ============================================================================
// Exercise 11: Event Handling - Event Examples App
// Application Name: eventexamplesapp
// ============================================================================
// Steps: npx create-react-app eventexamplesapp -> Create components -> npm start
// ============================================================================

// ===================== src/Components/EventExamples.js =====================

import React, { Component } from 'react';

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  // Increment the counter value
  increment() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  // Say Hello with a static message
  sayHello() {
    alert('Hello! The counter has been incremented.');
  }

  // Decrement the counter value
  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  // Function that takes an argument
  sayWelcome(message) {
    alert(message);
  }

  // Synthetic event handler
  onPress(e) {
    // e is the synthetic event
    alert('I was clicked');
    console.log('Synthetic event:', e);
  }

  // Increment button invokes multiple methods
  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Event Handling Examples</h2>

        {/* Counter Display */}
        <h3>Counter: {this.state.counter}</h3>

        {/* 1. Increment button invokes multiple methods */}
        <button onClick={this.handleIncrement} style={btnStyle}>
          Increment
        </button>

        {/* Decrement button */}
        <button onClick={this.decrement} style={btnStyle}>
          Decrement
        </button>

        <hr />

        {/* 2. Say Welcome button with argument */}
        <button onClick={() => this.sayWelcome('Welcome')} style={btnStyle}>
          Say Welcome
        </button>

        <hr />

        {/* 3. Synthetic event OnPress */}
        <button onClick={this.onPress} style={btnStyle}>
          Click Me (Synthetic Event)
        </button>
      </div>
    );
  }
}

const btnStyle = {
  padding: '10px 20px', margin: '5px', fontSize: '14px',
  cursor: 'pointer', borderRadius: '5px', border: '1px solid #333'
};

export default EventExamples;

// ===================== src/Components/CurrencyConvertor.js =====================

import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { rupees: '', euro: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const conversionRate = 0.011; // 1 INR = 0.011 EUR approx
    const euroValue = (parseFloat(this.state.rupees) * conversionRate).toFixed(2);
    this.setState({ euro: euroValue });
  }

  render() {
    return (
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', margin: '20px', maxWidth: '400px' }}>
        <h2>Currency Convertor (INR to EUR)</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Indian Rupees (INR):
            <input type="number" value={this.state.rupees} onChange={this.handleChange}
              style={{ display: 'block', margin: '10px 0', padding: '8px', width: '200px' }} />
          </label>
          <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}>
            Convert
          </button>
        </form>
        {this.state.euro && (
          <h3 style={{ color: 'green' }}>Euro (EUR): €{this.state.euro}</h3>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;

// ===================== src/App.js =====================

import React, { Component } from 'react';
import EventExamples from './Components/EventExamples';
import CurrencyConvertor from './Components/CurrencyConvertor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Event Examples App</h1>
        <EventExamples />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
