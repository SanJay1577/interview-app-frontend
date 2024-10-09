import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  //get route details from context
  const isLoggedin = true;
  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
