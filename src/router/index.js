import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/home/index'

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default Routes
