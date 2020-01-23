import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import VoteHome from './pages/VoteHome';
import VoteMain from './pages/VoteMain';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={VoteMain} />
          <Route exact path="/home" component={VoteHome} />
        </div>
      </Router>
    );
  }
}

export default App;