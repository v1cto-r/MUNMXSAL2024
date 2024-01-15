import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './styles/index.css'

import Landing from "./components/Landing.tsx";
import Committees from "./components/Committees.tsx";
import Sponsors from "./components/Sponsors.tsx";
import Tools from "./components/Tools.tsx";
import NotFound from "./components/NotFound.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header route="home"/>
        <Landing />
        <Footer />
      </>
    ),
  },
  {
    path: "committees",
    element: (
      <>
        <Header route="committees"/>
        <Committees />
        <Footer />
      </>
    ),
  },
  {
    path: "sponsors",
    element: (
      <>
        <Header route="sponsors"/>
        <Sponsors />
        <Footer />
      </>
    ),
  },
  {
    path: "tools",
    element: (
      <>
        <Header route="tools"/>
        <Tools />
        <Footer />
      </>
    ),
  },
  {
    path: "121123",
    element: (
      <>
        <h1 style={{color: "white", fontFamily: "Fredoka"}}> {"<3"} </h1>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header route=""/>
        <NotFound />
        <Footer />
      </>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
