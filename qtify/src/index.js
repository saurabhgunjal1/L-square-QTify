import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Landingpage from './pages/landingpage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Landingpage/>,
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);


// reportWebVitals();
