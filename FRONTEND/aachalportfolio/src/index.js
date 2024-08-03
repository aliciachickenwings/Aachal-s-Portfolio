import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Archive from './Pages/Archive';
import Contact from './Pages/Contact';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/aboutme',
    element: <Aboutme/>
  },
  {
    path: '/archive',
    element: <Archive/>
  },
  {
    path: '/contact',
    element: <Contact/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
