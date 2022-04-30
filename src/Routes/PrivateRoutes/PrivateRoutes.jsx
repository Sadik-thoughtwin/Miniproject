import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

function PrivateRoutes() {
  const location = useLocation();
  const auth = localStorage.getItem("token");

  return auth ? (
    <Outlet />
  ) : (
    <Navigate
      to="login"
      state={{ from: location }} // <-- pass in route state
      replace
    />
  );
}

export default PrivateRoutes;
