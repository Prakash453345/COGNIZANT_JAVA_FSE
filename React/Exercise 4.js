// ============================================================================
// Exercise 04: Component Lifecycle - Blog App
// Application Name: blogapp
// ============================================================================
//
// Objectives:
// - Implement componentDidMount() hook
// - Implement componentDidCatch() lifecycle hook
// - Fetch data from API using Fetch API
//
// Steps to create and run:
// 1. npx create-react-app blogapp
// 2. cd blogapp
// 3. Create Post.js and Posts.js in src/ folder
// 4. Update src/App.js
// 5. npm start
// 6. Open browser at http://localhost:3000
//
// ============================================================================

// ===================== src/Post.js =====================

class Post {
  constructor(userId, id, title, body) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export default Post;

// ===================== src/Posts.js =====================

import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        this.setState({ error: error.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    alert('An error occurred: ' + error.message);
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2>Error: {error}</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.id} style={{
            border: '1px solid #ddd',
            margin: '10px',
            padding: '15px',
            borderRadius: '8px'
          }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;

// ===================== src/App.js =====================

import React, { Component } from 'react';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Posts />
      </div>
    );
  }
}

export default App;
