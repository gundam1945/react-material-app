import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AboutRoutes } from "@/features/about";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
            Loading now....
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export const aboutRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "about/*", element: <AboutRoutes /> }
    ]
  }
];
