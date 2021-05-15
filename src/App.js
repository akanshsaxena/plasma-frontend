import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthScreen from "../src/screens/AuthScreen";
import FirstTimeLoginDetails from "../src/screens/FirstTimeLoginDetails";
import DashboardScreen from "../src/screens/DashboardScreen";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AuthScreen />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/details/">
          <FirstTimeLoginDetails />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/dashboard">
          <DashboardScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
