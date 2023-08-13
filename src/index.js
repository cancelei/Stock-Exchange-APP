import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import reportWebVitals from './reportWebVitals';
import Homepage from './router/Homepage';
import Detailpage from './router/Detailpage';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:symbol/:name/:price/:change/:dayLow/:dayHigh/:marketCap/:volume/:exchange" element={<Detailpage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
