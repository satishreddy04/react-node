import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginComponent } from "./components/loginPage/loginPage";
import { HomeComponent } from "./components/homePage/homePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact={true} component={LoginComponent} />
        <Route path={"/welcome"}exact={true} component={HomeComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
