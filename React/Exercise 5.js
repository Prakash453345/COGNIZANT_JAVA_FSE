// ============================================================================
// Exercise 05: Styling React Components - Cohort Dashboard
// Application Name: cohort-dashboard
// ============================================================================
//
// Objectives:
// - Style a react component
// - Define styles using the CSS Module
// - Apply styles to components using className and style properties
//
// Steps to create and run:
// 1. npx create-react-app cohort-dashboard
// 2. cd cohort-dashboard
// 3. Create CohortDetails.js and CohortDetails.module.css in src/
// 4. Update src/App.js
// 5. npm start
// 6. Open browser at http://localhost:3000
//
// ============================================================================

// ===================== src/CohortDetails.module.css =====================

/*
.box {
  width: 300px;
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
}

dt {
  font-weight: 500;
}
*/

// ===================== src/CohortDetails.js =====================

import React, { Component } from 'react';
import styles from './CohortDetails.module.css';

class CohortDetails extends Component {
  render() {
    const { name, technology, duration, status } = this.props;

    const headingStyle = {
      color: status === 'Ongoing' ? 'green' : 'blue'
    };

    return (
      <div className={styles.box}>
        <h3 style={headingStyle}>{name}</h3>
        <dl>
          <dt>Technology</dt>
          <dd>{technology}</dd>
          <dt>Duration</dt>
          <dd>{duration}</dd>
          <dt>Status</dt>
          <dd>{status}</dd>
        </dl>
      </div>
    );
  }
}

export default CohortDetails;

// ===================== src/App.js =====================

import React, { Component } from 'react';
import CohortDetails from './CohortDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Academy - Cohort Dashboard</h1>
        <CohortDetails
          name="Full Stack Java"
          technology="Java, Spring Boot, React"
          duration="12 Weeks"
          status="Ongoing"
        />
        <CohortDetails
          name="Full Stack .NET"
          technology="C#, ASP.NET, Angular"
          duration="10 Weeks"
          status="Completed"
        />
        <CohortDetails
          name="Cloud Engineering"
          technology="AWS, Docker, Kubernetes"
          duration="8 Weeks"
          status="Ongoing"
        />
        <CohortDetails
          name="Data Engineering"
          technology="Python, Spark, Hadoop"
          duration="10 Weeks"
          status="Completed"
        />
      </div>
    );
  }
}

export default App;
