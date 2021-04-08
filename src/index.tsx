import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import ErrorBoundary from './components/ErrorBoundary';
import Routes from './routes';

const persistor = persistStore(store);
const rootElement = document.getElementById('root');

const BaseComponent: React.FC = () => (
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement?.hasChildNodes()) {
  hydrate(<BaseComponent />, rootElement);
} else {
  render(<BaseComponent />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
