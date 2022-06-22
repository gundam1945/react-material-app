import React from "react";
import { useRoutes } from "react-router-dom";

import { Landing } from "@/features/landing";

import { aboutRoutes } from "./about";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <Landing /> }];

  const element = useRoutes([...commonRoutes, ...aboutRoutes]);

  return <>{element}</>;
};
