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
        <Header />
        <Landing />
        <Footer />
      </>
    ),
  },
  {
    path: "committees",
    element: (
      <>
        <Header />
        <Committees />
        <Footer />
      </>
    ),
  },
  {
    path: "sponsors",
    element: (
      <>
        <Header />
        <Sponsors />
        <Footer />
      </>
    ),
  },
  {
    path: "tools",
    element: (
      <>
        <Header />
        <Tools />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
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
