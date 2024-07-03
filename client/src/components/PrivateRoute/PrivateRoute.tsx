import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

function PrivateRoute() {
  const { isFetched, isAuthenticated } = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, isFetched, navigate]);

  return <Outlet />;
}

export default PrivateRoute;
