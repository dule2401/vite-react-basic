import React from "react";
import { useRoutes } from "react-router-dom";

export const Router = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
  ]);
  return router;
};

const Home = React.lazy(() => import("@/ui/page/Home"));
