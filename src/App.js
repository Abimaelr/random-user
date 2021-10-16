import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Context } from "./Context/Context";
import Home from "./Screens/Home";
import User from "./Screens/User";

function App() {
  return (
    <div className="App">
      <Context.Provider>
        <Router>
          <Switch>
            <Route path="/" component={ Home }/>
            <Route path="/user/:position" component={ User }/>
          </Switch>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
