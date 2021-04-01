import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast, ToastContentProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { PropsFromRedux } from '.';
import * as serviceWorker from '../serviceWorker';
import ScrollToTop from './ScrollToTop';
import Layout from '../components/Layout';
import ErrorPage from '../pages/Error/Error';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Location from '../pages/Location';
import ServicePortfolio from '../pages/ServicePorfolio';
import Service from '../pages/Service';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import QuickShipping from '../pages/QuickShipping';
import OverseasShipping from '../pages/OverseasShipping';
import ShipmentQuote from '../pages/ShipmentQuote';
import Wallet from '../pages/Wallet';
import Modal from '../components/Modal';
import FAQs from '../pages/FAQs';
import OverseasShippingForm from '../components/OverseasShippingForm';

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

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ToastContainer />
      <ScrollToTop />
      <Modal />
      <Switch>
        <Route exact path="/">
          <Layout component={<Home />} />
        </Route>
        <Route exact path="/faqs">
          <Layout component={<FAQs />} />
        </Route>
        <Route exact path="/about-us">
          <Layout component={<AboutUs />} />
        </Route>
        <Route exact path="/contact-us">
          <Layout component={<ContactUs />} />
        </Route>
        <Route exact path="/locations">
          <Layout component={<Location />} />
        </Route>
        <Route exact path="/services-portfolio">
          <Layout component={<ServicePortfolio />} />
        </Route>
        <Route exact path="/shipment/:trackingCode">
          <Layout component={<Home />} />
        </Route>
        <Route exact path="/sign-up">
          <Layout component={<SignUp />} />
        </Route>
        <Route exact path="/sign-in">
          <Layout component={<SignIn />} />
        </Route>
        <Route path="/giggo-delivery-app">
          <Layout component={<QuickShipping />} />
        </Route>
        <Route path="/overseas-shipping/ship">
          <Layout component={<OverseasShippingForm />} />
        </Route>
        <Route exact path="/overseas-shipping">
          <Layout component={<OverseasShipping />} />
        </Route>

        <Route exact path="/get-a-quote">
          <Layout component={<ShipmentQuote />} />
        </Route>
        <Route exact path="/wallet">
          <Layout component={<Wallet />} />
        </Route>
        <Route exact path="/wallet/fund">
          <Layout component={<Wallet />} />
        </Route>
        <Route exact path="/gig-alpha">
          <Layout
            component={
              <ErrorPage error="Coming Soon" description="Watch this space" />
            }
          />
        </Route>
        <Route exact path="/:service">
          <Layout component={<Service />} />
        </Route>
        <Route>
          <Layout
            component={
              <ErrorPage
                error="404"
                description="The page you are looking for does not exist"
              />
            }
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
