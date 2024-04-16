import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Import Route
import Contact from './Pages/Contact';
import Home from './Pages/Home/Home';
import UpdateProfile from './Pages/UpdateProfile';
import UserProfile from './Pages/UserProfile';
import MainLayout from './Root/MainLayout';
import ErrorPage from './components/ErrorPage';
import EstateDetails from './components/EstateDetails';
import Login from './components/User/Login';
import Register from './components/User/Register';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/estate/:id',
        element: <EstateDetails />,
        loader: ({ params }) =>
          fetch(`/data.json`)
            .then(res => res.json())
            .then(data => data.find(estate => estate.id === parseInt(params.id)))
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
