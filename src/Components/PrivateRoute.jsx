import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/loader";
import { AuthContext } from "../Provider/AuthPovider";

const PrivateRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);
  if (loader) {
    return <Loader></Loader>;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRouter;
