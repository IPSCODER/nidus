import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!localStorage.getItem("user")) {
        navigate("/login"); // Redirect to login if not authenticated
      }else{
        navigate("/"); // Redirect to login if not authenticated
      }
    }, [user, navigate]);

    if (!user) {
      return null; // Prevents unauthorized access before redirecting
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
