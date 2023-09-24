import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoot from './MainRoot/MainRoot';

const router=createBrowserRouter([
    {
      path:'/',
      element: <MainRoot></MainRoot>,
      children:[
        {
          path:'/',
          element: <div>Home Page</div>,
        },
        {
          path:'/donation',
          element: <div>Donation Page</div>,
        },
        {
          path:'/statistics',
          element: <div>Please Donate me</div>,
        },
      ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
