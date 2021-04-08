import React, { useEffect, useState, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast, ToastContentProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { PropsFromRedux } from '.';
import * as serviceWorker from '../serviceWorker';
import ScrollToTop from './ScrollToTop';
import ErrorPage from '../pages/Error/Error';

const Layout = React.lazy(() => import('../components/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const User = React.lazy(() => import('../pages/User'));

interface RefrestToastProps extends ToastContentProps {
  // eslint-disable-next-line react/no-unused-prop-types
  action: () => void;
}

const RefreshToast: React.FC<RefrestToastProps> = ({ closeToast, action }) => {
  const close = () => {
    action();
    closeToast && closeToast();
  };

  return (
    <div>
      New version available
      <button type="button" onClick={close}>
        Refresh
      </button>
    </div>
  );
};

interface RouterProps extends PropsFromRedux {}

const Routes: React.FC<RouterProps> = ({ notification, clear }) => {
  const [newVersionAvailable, setNewVersionAvailable] = useState<boolean>(
    false
  );
  const [waitingWorker, setWaitingWorker] = useState<any>({
    postMessage: (message: any) => message,
  });

  const onServiceWorkerUpdate = (registration: ServiceWorkerRegistration) => {
    setWaitingWorker(registration?.waiting);
    if (registration) setNewVersionAvailable(true);
  };

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

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      serviceWorker.register({ onUpdate: onServiceWorkerUpdate });
    }
  }, []);

  useEffect(() => {
    const updateServiceWorker = () => {
      waitingWorker && waitingWorker.postMessage({ type: 'SKIP_WAITING' });
      setNewVersionAvailable(false);
      window.location.reload();
    };

    const notify = () =>
      toast(
        ({ closeToast, toastProps }: RefrestToastProps) => (
          <RefreshToast
            closeToast={closeToast}
            toastProps={toastProps}
            action={updateServiceWorker}
          />
        ),
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: false,
        }
      );
    if (newVersionAvailable) {
      notify();
    }
    return () => {
      toast.dismiss();
    };
  }, [newVersionAvailable, waitingWorker]);

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
