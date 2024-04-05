import { Outlet, redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoute() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    redirect("/signin");
  }

  return <Outlet />;
}

export default PrivateRoute;
