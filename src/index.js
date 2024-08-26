import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErroPage from './pages/ErroPage';
import HomePage from './pages/HomePage';

const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErroPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    }
  ]

}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);

