/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { ContentRoute, Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { HomePage } from "./pages/HomePage";
import { Dashboard2Page } from "./pages/Dashboard2Page";

export function Routes() {
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );

  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    if (!isAuthorized && !location.pathname === "/auth/login") {
      history.push("/");
    } else if (
      (isAuthorized && location.pathname === "/") ||
      (isAuthorized && location.pathname === "/auth/login")
    ) {
      history.push("/dashboard2");
    }
  }, [isAuthorized]);

  return (
    <>
      {!isAuthorized ? (
        <Switch>
          <ContentRoute
            exact
            path="/dashboard2/:id"
            component={Dashboard2Page}
          />
          <Route path="/auth/login" component={AuthPage} />
          <Route path="/" component={HomePage} />
          <Route path="/error" component={ErrorsPage} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/auth/login" component={AuthPage} />
          <Route path="/logout" component={Logout} />
          <Layout>
            <BasePage />
          </Layout>
          <Route path="/error" component={ErrorsPage} />
        </Switch>
      )}
    </>
  );
}
