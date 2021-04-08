import React, { useEffect, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { PropsFromRedux } from '.';
import ScrollToTop from './ScrollToTop';
import ErrorPage from '../pages/Error/Error';

const Layout = React.lazy(() => import('../components/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const User = React.lazy(() => import('../pages/User'));

interface RouterProps extends PropsFromRedux {}

const Routes: React.FC<RouterProps> = ({ notification, clear }) => {
  useEffect(() => {
    if (notification.alertType && notification.message) {
      toast[notification.alertType](notification.message, {
        position: 'top-right',
        onClose: () => {
          clear({});
        },
      });
    }
  }, [clear, notification.alertType, notification.message]);

  const Loader: React.FC = ({ children }) => (
    <Suspense
      fallback={<ErrorPage showLink={false} description="" error="..." />}
    >
      {children}
    </Suspense>
  );

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ToastContainer />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Loader>
            <Layout component={<Home />} />
          </Loader>
        </Route>
        <Route exact path="/user/:id/:fullname">
          <Loader>
            <Layout component={<User />} />
          </Loader>
        </Route>
        <Route>
          <Loader>
            <Layout
              component={
                <ErrorPage
                  error="404"
                  description="The page you are looking for does not exist"
                />
              }
            />
          </Loader>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
