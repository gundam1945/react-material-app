import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { About } from "./About";
import { AboutTwo } from "./AboutTwo";

export const AboutRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<About />} />
      <Route path="*" element={<Navigate to="test" />} />
      <Route path=":testID" element={<AboutTwo />} />
    </Routes>
  );
};
