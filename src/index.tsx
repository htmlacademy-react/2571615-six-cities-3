import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadOffers } from './store/main-process/thunk-actions';
import { checkAuthorization } from './store/user-process/thunk-actions';

store.dispatch(uploadOffers());
store.dispatch(checkAuthorization());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  </Provider>,
);
