// ============================================================================
// Exercise 10: JSX - Office Space Rental App
// Application Name: officespacerentalapp
// ============================================================================
// Steps: npx create-react-app officespacerentalapp -> Update App.js -> npm start
// ============================================================================

// ===================== src/App.js =====================

import React from 'react';

function App() {
  const heading = <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Office Space Rental</h1>;

  const officeImage = (
    <img
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
      alt="Office Space"
      style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', display: 'block', margin: '20px auto' }}
    />
  );

  const office = { name: 'Tech Park Tower', rent: 75000, address: 'Whitefield, Bangalore' };

  const officeSpaces = [
    { id: 1, name: 'Tech Park Tower', rent: 75000, address: 'Whitefield, Bangalore' },
    { id: 2, name: 'Business Hub', rent: 55000, address: 'Koramangala, Bangalore' },
    { id: 3, name: 'Innovation Centre', rent: 90000, address: 'Electronic City, Bangalore' },
    { id: 4, name: 'Startup Arena', rent: 45000, address: 'HSR Layout, Bangalore' },
    { id: 5, name: 'Corporate Plaza', rent: 65000, address: 'MG Road, Bangalore' },
    { id: 6, name: 'Co-Work Space', rent: 30000, address: 'Indiranagar, Bangalore' }
  ];

  const cardStyle = { border: '1px solid #ddd', borderRadius: '10px', padding: '15px 20px', margin: '10px', boxShadow: '2px 2px 8px rgba(0,0,0,0.1)' };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      {heading}
      {officeImage}
      <h2>Featured Office</h2>
      <div style={cardStyle}>
        <h3>{office.name}</h3>
        <p><strong>Rent: </strong><span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>Rs.{office.rent}</span></p>
        <p><strong>Address: </strong>{office.address}</p>
      </div>
      <h2>All Office Spaces</h2>
      {officeSpaces.map((item) => (
        <div key={item.id} style={cardStyle}>
          <h3>{item.name}</h3>
          <p><strong>Rent: </strong><span style={{ color: item.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>Rs.{item.rent}</span></p>
          <p><strong>Address: </strong>{item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
