import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/Home';
import Category from './components/Category';
import Search from './components/Search';
import Singlegif from './components/Singlegif';
import Favourites from './components/Favourites';
import Context from './Context/Context';



const router = createBrowserRouter([
  {
    element: <Layout />, // Layout component wraps around the routes
    
    children: [
      {

        path: '/',
        element: <Home />,
      },
      {
        path: '/:category',
        element: <Category />,
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
      {
        path: '/type/:slug',
        element: <Singlegif />,
      },
      {
        path: '/favourites',
        element: <Favourites />,
      },
    ],
  },
]);

function App() {
  return (
    <Context > 
    <RouterProvider router={router} />
    </Context>
  );
}

export default App;
