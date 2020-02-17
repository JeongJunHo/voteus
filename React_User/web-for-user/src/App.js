import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import UserHome from "./pages/UserHome";
import UserAuthentication from "./pages/UserAuthentication";
import UserVote from "./pages/UserVote";
import PageNotFound from "./pages/PageNotFound";

import TypeContext from "./context/TypeContext";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={UserHome} />
            <Route path="/user-home" component={UserHome} />
            <TypeContext.Provider value={'auth'}>
              <Route path="/user-auth" component={UserAuthentication} />
            </TypeContext.Provider>
            <Route path="/user-vote/:code/:name" component={UserVote} />
            {/* <Route path="*" component={PageNotFound} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
