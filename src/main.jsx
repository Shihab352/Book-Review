import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import HomePage from './Components/HomePage/HomePage';
import ListedBooks from './Pages/ListedBooks';
import PagesToRead from './Pages/PagesToRead';
import BookDetails from './Components/BookDetails/BookDetails';
import WishList from './Components/WishList/WishList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'/ListedBooks',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('./Books.json'),
        children:[
          {
            index:true,

          },
          {
            path:'WishList',
            element:<WishList></WishList>
          }
        ]
      },
      {
        path:'/PagesToRead',
        element:<PagesToRead></PagesToRead>,
        loader:()=>fetch('./Books.json')
      },
      {
path: '/book/:id',
element:<BookDetails></BookDetails>,
loader:()=>fetch('./Books.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
