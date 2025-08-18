import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppProvider } from "../providers/AppProvider";
import { ROUTES } from "../constants/routes";
import { BaseLayout } from "../layouts/BaseLayout/BaseLayout";
import { createElement, lazy } from "react";
import { withAuth } from "../hoc/withAuth";
const Home = lazy(() =>
  import("../pages/Home").then((module) => ({ default: module.Home }))
);
const Trade = lazy(() =>
  import("../pages/Trade").then((module) => ({ default: module.Trade }))
);
const Login = lazy(() =>
  import("../pages/Login").then((module) => ({ default: module.Login }))
);
const NotFound = lazy(() =>
  import("../pages/Error").then((module) => ({ default: module.NotFound }))
);

export const routes = createBrowserRouter([
  {
    element: <AppProvider />,
    children: [
      {
        element: <BaseLayout/>,
        children: [
          {
            path: ROUTES.HOME,
            element: <Home />,
          },
          {
            path: ROUTES.TRADE,
            element: createElement(withAuth(Trade)),
          },
          {
            path: ROUTES.LOGIN,
            element: <Login />,
          },
          {
            path: ROUTES.ERROR_404,
            element: <NotFound />,
          },
          { path: "*", element: <Navigate to="/error/404" replace /> },
        ],
      },
    ],
  },
]);
