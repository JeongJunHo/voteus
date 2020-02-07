import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CommonContext } from "./context/CommonContext";

import NotFound from "./pages/NotFound";
import VoteMain from "./pages/VoteMain";
import SignInSide from "./pages/SignInSide";
import VoteList from "./pages/VoteList";
import MainPartList from "./pages/MainPartList";
import MiddlePartList from "./pages/MiddlePartList";
import AreaList from "./pages/AreaList";
import PartyList from "./pages/PartyList";
import CandidateList from "./pages/CandidateList";
import VoterList from "./pages/VoterList";

import { koKR } from "@material-ui/core/locale";

import "./index.css";

const theme = createMuiTheme(
  {
    drawerWidth: 320,
    typography: {
      fontFamily: ["Noto Sans KR"].join(","),
      button: {
        fontFamily: "Noto Sans KR"
      },
      body1: {
        fontWeight: 500
      }
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundColor: "white"
          }
        }
      }
    }
  },
  koKR
);

const App = () => {
  return (
    <CommonContext.Provider value={{}}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignInSide} />
            <Route path="/SignInSide" component={SignInSide} />
            <Route path="/VoteMain" component={VoteMain} />
            <Route path="/VoteList" component={VoteList} />
            <Route path="/PartyList" component={PartyList} />
            <Route path="/AreaList" component={AreaList} />
            <Route path="/VoterList" component={VoterList} />
            <Route path="/MainPartList" component={MainPartList} />
            <Route
              path="/CandidateList/:code/:name"
              component={CandidateList}
            />
            <Route
              path="/MiddlePartList/:code/:name"
              component={MiddlePartList}
            />
            <Route path="/not-found" component={NotFound} />
            {/* <Route path="/CandidateList" component={CandidateList} /> */}
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </CommonContext.Provider>
  );
};

export default App;
