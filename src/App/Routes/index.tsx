import { CharacterPage } from "App/Pages/Character";
import { HomePage } from "App/Pages/Home";
import { ItemPage } from "App/Pages/Item";
import { NotFoundPage } from "App/Pages/NotFound";
import { QuestPage } from "App/Pages/Quest";
import { PATH_CHARACTER, PATH_HOME, PATH_ITEM, PATH_NOT_FOUND, PATH_QUEST } from "constants/Routes";
import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

export const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path={PATH_HOME} component={HomePage} exact />
      <Route path={PATH_CHARACTER} component={CharacterPage} exact />
      <Route path={PATH_ITEM} component={ItemPage} exact />
      <Route path={PATH_QUEST} component={QuestPage} exact />
      <Route path={PATH_NOT_FOUND} component={NotFoundPage} exact />

      <Redirect to={PATH_NOT_FOUND} />
    </Switch>
  </Suspense>
);
