import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import RoomView from './Pages/RoomView';
import Restaurant from './Pages/Restaurant';
import Hotel from './Pages/Hotel';
import Facility from './Pages/Facility';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Register from './Pages/Register';
import Login from './Pages/Login';
// import CardInfo from './components/CardInfo.jsx'
import ErrorPage from "./Pages/error-page";

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hotel",
    element: <Hotel/>,
  },
  {
    path: "/RoomView",
    element: <RoomView/>,
  },
  {
    path: "/Restaurant",
    element: <Restaurant/>,
  },
  {
    path: "/Facility",
    element: <Facility/>,
  },
  {
    path: "/contact",
    element: <ContactUs/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  // {
  //   path: "/card/:name",
  //   element: <CardInfo/>,
  // },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)