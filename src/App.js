import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Provider from "./Context/Provider";
import Home from "./Screens/Home";
import User from "./Screens/User";

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Switch>
            <Route path="/" component={ Home }/>
            <Route path="/user/:position" component={ User }/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
