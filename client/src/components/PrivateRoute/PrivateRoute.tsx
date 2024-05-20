import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppUser } from "../UserContext";

function PrivateRoute() {
  const { isLoading, isAuthenticated } = useAppUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, isLoading, navigate]);

  return <Outlet />;
}

export default PrivateRoute;
