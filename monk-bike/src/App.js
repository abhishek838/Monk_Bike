import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/second" component={SecondPage} />
      </Switch>
    </Router>
  );
};

export default App;