import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

function AuthenticatedRoute( {children} ) {
    const authContext = useContext(AuthContext);
    if(authContext.authenticated) {
        return children;
    } else {
        return <Navigate to="/" />
    }
}

export default AuthenticatedRoute;