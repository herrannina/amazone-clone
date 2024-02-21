import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Datacontext } from "../Dataprovider/Dataprovider";

const ProtectedRoute = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(Datacontext);

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);

  return children;
};

// pyament ---> /auth (/)

export default ProtectedRoute;
