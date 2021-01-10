import React, { Suspense, lazy } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { LayoutSplashScreen, ContentRoute } from '../_metronic/layout';
import { BuilderPage } from './pages/BuilderPage';
import { MyPage } from './pages/MyPage';
import { DashboardPage } from './pages/DashboardPage';
import { HomePage } from './pages/HomePage';
import { Dashboard2Page } from './pages/Dashboard2Page';
import { PresentationVideos } from './pages/PresentationVideos/PresentationVideos';
import { RecordInterview } from './pages/RecordInterview';
import { Dashboard2Paid } from './pages/Dashboard2Paid';

const GoogleMaterialPage = lazy(() =>
  import('./modules/GoogleMaterialExamples/GoogleMaterialPage')
);
const ReactBootstrapPage = lazy(() =>
  import('./modules/ReactBootstrapExamples/ReactBootstrapPage')
);
const ECommercePage = lazy(() =>
  import('./modules/ECommerce/pages/eCommercePage')
);
const UserProfilepage = lazy(() =>
  import('./modules/UserProfile/UserProfilePage')
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from='/' to='/home' />
        }
        <ContentRoute path='/dashboard' component={DashboardPage} />
        <ContentRoute path='/builder' component={BuilderPage} />
        <ContentRoute path='/my-page' component={MyPage} />
        <ContentRoute path='/home' component={HomePage} />
        <ContentRoute path='/dashboard2' component={Dashboard2Page} />
        <ContentRoute path='/dashboard2Paid' component={Dashboard2Paid} />

        <ContentRoute
          path='/presentationVideos'
          component={PresentationVideos}
        />
        <ContentRoute path='/recordInterview' component={RecordInterview} />
        <Route path='/google-material' component={GoogleMaterialPage} />
        <Route path='/react-bootstrap' component={ReactBootstrapPage} />
        <Route path='/e-commerce' component={ECommercePage} />
        <Route path='/user-profile' component={UserProfilepage} />
        <Redirect to='error/error-v1' />
      </Switch>
    </Suspense>
  );
}
