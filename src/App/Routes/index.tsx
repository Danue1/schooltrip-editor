import { Home } from "App/Pages/Home";
import { NotFound } from "App/Pages/NotFound";
import { HOME, NOT_FOUND } from "constants/Routes";
import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

export const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path={HOME} component={Home} exact />
      <Route path={NOT_FOUND} component={NotFound} exact />

      <Redirect to={NOT_FOUND} />
    </Switch>
  </Suspense>
);
