import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Home from './Components/Home';
import ListedBooks from './Components/ListedBooks';
import PagesToRead from './Components/PagesToRead';
import BookDetails from './Components/BookDetails';
import Read from './Components/Read';
import Wishlist from './Components/Wishlist';
import About from './Components/about';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/listed&books',
        element: <ListedBooks />,
        children: [
          {
            path: 'read',
            element: <Read />,
            loader: () => fetch('/books.json')
          },
          {
            path: 'wishlist',
            element: <Wishlist />,
            loader: () => fetch('/books.json')
          }
        ]
      },
      {
        path: '/pages&to&reload',
        element: <PagesToRead />,
        loader: () => fetch('/books.json')
      },
      {
        path: '/book/:ids',
        element: <BookDetails />,
        loader: () => fetch('/books.json')
      },
      {
        path: '/about&us',
        element: <About />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
