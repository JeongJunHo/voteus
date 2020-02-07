import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import UserHome from "./pages/UserHome";
import UserAuthentication from "./pages/UserAuthentication";
import UserVote from "./pages/UserVote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uservotelist: null
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={UserHome} />
          <Route path="/user-home" component={UserHome} />
          <Route path="/user-auth" component={UserAuthentication} />
          {/* <Route exact path="/user-vote" component={UserVote} /> */}
          <Route path="/user-vote/:code/:name" component={UserVote} />
        </div>
      </Router>
    );
  }
}

export default App;
