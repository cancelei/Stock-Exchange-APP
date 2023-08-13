import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import reportWebVitals from './reportWebVitals';
import Homepage from './router/Homepage';
import Detailpage from './router/Detailpage';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/detail/:symbol/:name/:price/:change/:dayLow/:dayHigh/:marketCap/:volume/:exchange',
    element: <Detailpage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
