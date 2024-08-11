import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error_page";
import Registration from "./routes/registration";
import ProfileInfo from "./routes/profileInfo";
import ProfileConfirm from "./routes/profileConfirm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "registration",
    element: <Registration />
  },
  {
    path: "profile/:profile-name",
    element: <ProfileInfo />
  },
  {
    path: "profile/:profile-name/confirm",
    element: <ProfileConfirm />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
