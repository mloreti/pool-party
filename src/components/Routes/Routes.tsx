import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Players from "../Players";
import Home from "../Home";
import Games from "../Games";
import PlayerProfile from "../PlayerProfile";
import Game from "../Game";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/players" component={Players} />
      <Route path="/players/:id" component={PlayerProfile} />
      <Route exact path="/games" component={Games} />
      <Route path="/games/:id" component={Game} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
