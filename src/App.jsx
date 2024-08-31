import React from 'react';
import LandingPage from './pages/LandingPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Waiter from './pages/Waiter';
import StateComponent from './context/StateComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },{
    path: "/waiter",
    element: <Waiter/>,
  },
]);

function App() {


  return (
    
    <StateComponent>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </StateComponent>
    
  )
}

export default App
