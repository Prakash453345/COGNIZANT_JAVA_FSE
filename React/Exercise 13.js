// ============================================================================
// Exercise 13: Conditional Rendering - Blogger App
// Application Name: bloggerapp
// ============================================================================
// Steps: npx create-react-app bloggerapp -> Create components -> npm start
// Implements conditional rendering using multiple approaches:
// 1. if-else statements
// 2. Ternary operator
// 3. Logical && operator
// 4. Switch-case
// ============================================================================

// ===================== src/Components/BookDetails.js =====================

import React, { Component } from 'react';

class BookDetails extends Component {
  render() {
    const books = [
      { id: 1, title: 'Clean Code', author: 'Robert C. Martin', price: 450 },
      { id: 2, title: 'Design Patterns', author: 'Gang of Four', price: 600 },
      { id: 3, title: 'Refactoring', author: 'Martin Fowler', price: 550 }
    ];

    return (
      <div style={{ padding: '20px' }}>
        <h2>Book Details</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
              <th style={cellStyle}>ID</th><th style={cellStyle}>Title</th>
              <th style={cellStyle}>Author</th><th style={cellStyle}>Price</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td style={cellStyle}>{book.id}</td><td style={cellStyle}>{book.title}</td>
                <td style={cellStyle}>{book.author}</td><td style={cellStyle}>Rs.{book.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const cellStyle = { padding: '10px', border: '1px solid #ddd', textAlign: 'center' };

export default BookDetails;

// ===================== src/Components/BlogDetails.js =====================

import React, { Component } from 'react';

class BlogDetails extends Component {
  render() {
    const blogs = [
      { id: 1, title: 'Getting Started with React', date: '2026-01-15', category: 'Frontend' },
      { id: 2, title: 'Understanding Microservices', date: '2026-02-20', category: 'Backend' },
      { id: 3, title: 'Docker for Beginners', date: '2026-03-10', category: 'DevOps' }
    ];

    return (
      <div style={{ padding: '20px' }}>
        <h2>Blog Details</h2>
        {blogs.map((blog) => (
          <div key={blog.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', margin: '10px 0' }}>
            <h3>{blog.title}</h3>
            <p><strong>Date:</strong> {blog.date} | <strong>Category:</strong> {blog.category}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BlogDetails;

// ===================== src/Components/CourseDetails.js =====================

import React, { Component } from 'react';

class CourseDetails extends Component {
  render() {
    const courses = [
      { id: 1, name: 'Full Stack Java', duration: '12 Weeks', level: 'Advanced' },
      { id: 2, name: 'React Development', duration: '8 Weeks', level: 'Intermediate' },
      { id: 3, name: 'Python for ML', duration: '10 Weeks', level: 'Advanced' }
    ];

    return (
      <div style={{ padding: '20px' }}>
        <h2>Course Details</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id} style={{ margin: '10px 0' }}>
              <strong>{course.name}</strong> - {course.duration} ({course.level})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CourseDetails;

// ===================== src/App.js =====================

import React, { Component } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'books' };
  }

  // Method 1: if-else approach
  renderContent() {
    const { selectedTab } = this.state;
    if (selectedTab === 'books') {
      return <BookDetails />;
    } else if (selectedTab === 'blogs') {
      return <BlogDetails />;
    } else if (selectedTab === 'courses') {
      return <CourseDetails />;
    } else {
      return <h2>Select a tab</h2>;
    }
  }

  // Method 2: Switch-case approach (alternative)
  renderWithSwitch() {
    switch (this.state.selectedTab) {
      case 'books': return <BookDetails />;
      case 'blogs': return <BlogDetails />;
      case 'courses': return <CourseDetails />;
      default: return <h2>Select a tab</h2>;
    }
  }

  render() {
    const { selectedTab } = this.state;
    const btnStyle = (tab) => ({
      padding: '10px 25px', margin: '5px', cursor: 'pointer', borderRadius: '5px',
      border: 'none', fontSize: '14px', color: 'white',
      backgroundColor: selectedTab === tab ? '#2c3e50' : '#95a5a6'
    });

    return (
      <div className="App" style={{ fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Blogger App</h1>
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <button style={btnStyle('books')} onClick={() => this.setState({ selectedTab: 'books' })}>Book Details</button>
          <button style={btnStyle('blogs')} onClick={() => this.setState({ selectedTab: 'blogs' })}>Blog Details</button>
          <button style={btnStyle('courses')} onClick={() => this.setState({ selectedTab: 'courses' })}>Course Details</button>
        </div>

        {/* Method 1: Using if-else */}
        {this.renderContent()}

        {/* Method 3: Using ternary operator (example) */}
        {/* {selectedTab === 'books' ? <BookDetails /> : selectedTab === 'blogs' ? <BlogDetails /> : <CourseDetails />} */}

        {/* Method 4: Using logical && operator (example) */}
        {/* {selectedTab === 'books' && <BookDetails />}
            {selectedTab === 'blogs' && <BlogDetails />}
            {selectedTab === 'courses' && <CourseDetails />} */}
      </div>
    );
  }
}

export default App;
