import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import React from "react";

// Define the PrivateRoute component
const PrivateRoute: React.FC = () => {
  const { user, isLoading, isFetched } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isFetched && !user) {
      navigate("/signin");
    }
  }, [user, isLoading, isFetched, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : null;
};

export default PrivateRoute;
