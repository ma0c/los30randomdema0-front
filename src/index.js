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
import Registration from "./routes/registration/registration";
import Invitation from "./routes/registration/invitation";
import Profile from "./routes/registration/profile";
import UpdateProfilePic from "./routes/registration/updateProfilePic";
import Pokedex from "./routes/pokedex/pokedex";
import PokedexAdd from "./routes/pokedex/pokedex_add";
import PokedexProfile from "./routes/pokedex/pokedex_profile";
import SakuraIndex from "./routes/sakura/sakura_index";
import CardList from "./routes/sakura/sakura_card_list";
import CardDetail from "./routes/sakura/sakura_card_detail";
import SakuraAdd from "./routes/sakura/sakura_add";
import TheRules from "./routes/da_rulez";

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
  },
  {
    path: "me",
    element: <PokedexProfile me/>
  },
  {
    path: "sakura",
    element: <SakuraIndex/>
  },
  {
    path: "sakura/add",
    element: <SakuraAdd/>
  },
  {
    path: "sakura/captured",
    element: <CardList captured />
  },
  {
    path: "sakura/unsolved",
    element: <CardList />
  },
  {
    path: "sakura/card/:slug",
    element: <CardDetail />
  },
  {
    path: "reglamento",
    element: <TheRules />
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
