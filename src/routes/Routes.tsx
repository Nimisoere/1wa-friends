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
const AboutUs = React.lazy(() => import('../pages/AboutUs'));
const ContactUs = React.lazy(() => import('../pages/ContactUs'));
const Location = React.lazy(() => import('../pages/Location'));
const ServicePortfolio = React.lazy(() => import('../pages/ServicePorfolio'));
const Service = React.lazy(() => import('../pages/Service'));
const SignUp = React.lazy(() => import('../pages/SignUp'));
const SignIn = React.lazy(() => import('../pages/SignIn'));
const QuickShipping = React.lazy(() => import('../pages/QuickShipping'));
const OverseasShipping = React.lazy(() => import('../pages/OverseasShipping'));
const ShipmentQuote = React.lazy(() => import('../pages/ShipmentQuote'));
const Wallet = React.lazy(() => import('../pages/Wallet'));
const FAQs = React.lazy(() => import('../pages/FAQs'));
const OverseasShippingForm = React.lazy(
  () => import('../components/OverseasShippingForm')
);

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
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
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
        <Route exact path="/faqs">
          <Loader>
            <Layout component={<FAQs />} />
          </Loader>
        </Route>
        <Route exact path="/about-us">
          <Loader>
            <Layout component={<AboutUs />} />
          </Loader>
        </Route>
        <Route exact path="/contact-us">
          <Loader>
            <Layout component={<ContactUs />} />
          </Loader>
        </Route>
        <Route exact path="/locations">
          <Loader>
            <Layout component={<Location />} />
          </Loader>
        </Route>
        <Route exact path="/services-portfolio">
          <Loader>
            <Layout component={<ServicePortfolio />} />
          </Loader>
        </Route>
        <Route exact path="/shipment/:trackingCode">
          <Loader>
            <Layout component={<Home />} />
          </Loader>
        </Route>
        <Route exact path="/sign-up">
          <Loader>
            <Layout component={<SignUp />} />
          </Loader>
        </Route>
        <Route exact path="/sign-in">
          <Loader>
            <Layout component={<SignIn />} />
          </Loader>
        </Route>
        <Route path="/giggo-delivery-app">
          <Loader>
            <Layout component={<QuickShipping />} />
          </Loader>
        </Route>
        <Route path="/overseas-shipping/ship">
          <Loader>
            <Layout component={<OverseasShippingForm />} />
          </Loader>
        </Route>
        <Route exact path="/overseas-shipping">
          <Loader>
            <Layout component={<OverseasShipping />} />
          </Loader>
        </Route>

        <Route exact path="/get-a-quote">
          <Loader>
            <Layout component={<ShipmentQuote />} />
          </Loader>
        </Route>
        <Route exact path="/wallet">
          <Loader>
            <Layout component={<Wallet />} />
          </Loader>
        </Route>
        <Route exact path="/wallet/fund">
          <Loader>
            <Layout component={<Wallet />} />
          </Loader>
        </Route>
        <Route exact path="/gig-alpha">
          <Loader>
            <Layout
              component={
                <ErrorPage error="Coming Soon" description="Watch this space" />
              }
            />
          </Loader>
        </Route>
        <Route exact path="/:service">
          <Loader>
            <Layout component={<Service />} />
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
