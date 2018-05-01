import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FirstPost from './Pages/Landing/FirstPost/FirstPost';

const PLACEHOLDER = () => (
  <div>
    <h2>PLACEHOLDER</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={FirstPost} />
      </Router>
    );
  }
}

export default App;
