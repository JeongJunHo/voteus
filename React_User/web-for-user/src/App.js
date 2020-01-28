import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import UserHome from './pages/UserHome';
import UserAuthentication from './pages/UserAuthentication';
import UserVote from './pages/UserVote';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={UserHome} />
          <Route exact path="/user-auth" component={UserAuthentication} />
          <Route exact path="/user-vote" component={UserVote} />
        </div>
      </Router>
    );
  }
}

export default App;