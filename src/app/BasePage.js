import React, { Suspense, lazy, useEffect } from "react";
import {
  Redirect,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";
import { Dashboard2Page } from "./pages/Dashboard2Page";
import { PresentationVideos } from "./pages/PresentationVideos/PresentationVideos";
import { RecordInterview } from "./pages/RecordInterview";
import { Dashboard2Paid } from "./pages/Dashboard2Paid";
import { ReadReview } from "./pages/ReadReview";
import { AdminPage } from "./pages/AdminPage";
import { useSelector, shallowEqual } from "react-redux";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

export default function BasePage() {
  const history = useHistory();
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );
  const location = useLocation();

  React.useEffect(() => {
    if (!isAuthorized) {
      history.push("/");
    } else if (
      location.pathname === "/" ||
      location.pathname === "/auth/login"
    ) {
      history.push("/dashboard2");
    }
  }, [history, location, isAuthorized]);
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <ContentRoute path="/home" component={HomePage} />
        <ContentRoute path="/dashboard2" component={Dashboard2Page} />
        <ContentRoute path="/dashboard2Paid" component={Dashboard2Paid} />
        <ContentRoute path="/readReview" component={ReadReview} />
        <ContentRoute path="/admin" component={AdminPage} />

        <ContentRoute
          path="/presentationVideos"
          component={PresentationVideos}
        />
        <ContentRoute path="/recordInterview" component={RecordInterview} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
