// import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import UserHome from "./pages/UserHome";
import UserAuthentication from "./pages/UserAuthentication";
import UserVote from "./pages/UserVote";

import TypeContext from "./context/TypeContext";

const App = props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={UserHome} />
          <Route path="/user-home" component={UserHome} />
          <TypeContext.Provider value={'auth'}>
            <Route path="/user-auth" component={UserAuthentication} />
          </TypeContext.Provider>
          <Route path="/user-vote/:code/:name" component={UserVote} />

          {/* {userauth === 1 ? (
            <Route path="/user-vote/:code/:name" component={UserVote} />
          ):(
            <Route path="/user-vote/:code/:name" component={UserVote} />
          )} */}
      </div>
    </Router>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       auth: 0
//     };
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           {this.state.auth}
//           <Route exact path="/" component={UserHome} />
//             <Route path="/user-home" component={UserHome} />
//             <TypeContext.Provider value={'auth'}>
//               <Route path="/user-auth" component={UserAuthentication} />
//             </TypeContext.Provider>
//             {/* <TypeContext.Provider value={'vote'}> */}
//               <Route path="/user-vote/:code/:name" component={UserVote} />
//             {/* </TypeContext.Provider> */}
//         </div>
//       </Router>
//     );
//   }
// }

export default App;
