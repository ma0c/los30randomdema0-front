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
import Invitation from "./routes/invitation";
import Profile from "./routes/profile";
import UpdateProfilePic from "./routes/updateProfilePic";
import Pokedex from "./routes/pokedex";
import PokedexAdd from "./routes/pokedex_add";
import PokedexProfile from "./routes/pokedex_profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "invitation/:slug",
    element: <Invitation />
  },
  {
    path: "invitation/:slug/confirm",
    element: <Registration />
  },
  {
    path: "profile/:slug",
    element: <Profile />
  },
  {
    path: "profile/:slug/profile-pic",
    element: <UpdateProfilePic />
  },
  {
    path: "pokedex",
    element: <Pokedex />
  },
  {
    path: "pokedex/add",
    element: <PokedexAdd />
  },
  {
    path: "pokedex/profile/:slug",
    element: <PokedexProfile />
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
