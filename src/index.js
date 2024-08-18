import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Archive from './Pages/Archive';
import Contact from './Pages/Contact';
import WorkDetail from './Pages/WorkDetail';
import Privacy from './Pages/Privacy';
import Legal from './Pages/Legal';

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
  },
  {
    path: '/work/:id',
    element: <WorkDetail /> // Add this route for work detail
  },
  {
    path: '/privacy',
    element: <Privacy /> // Add this route for work detail
  },
  {
    path: '/legal',
    element: <Legal /> // Add this route for work detail
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
