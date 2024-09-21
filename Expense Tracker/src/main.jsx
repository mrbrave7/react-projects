/* eslint-disable react/no-children-prop */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx';
import Login from './Pages/Login/Login.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import ProtectedRoute from './Pages/ProtecetedRoute/ProtectedRoute.jsx';
import { UserProvider } from "./Utilities/userContext"; 
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:(
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },
    ]
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/register",
    element:<Registration />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={Router} />
    </UserProvider>
  </StrictMode>
);
