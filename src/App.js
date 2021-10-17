import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Provider from "./Context/Provider";
import Header from "./Components/Header";
import Home from "./Components/Home";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/random-user/" component={ Home }/>
            <Route exact path="/random-user/user/:id" component={ User }/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
