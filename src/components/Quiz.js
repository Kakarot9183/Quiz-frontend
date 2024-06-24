import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import AuthProvider, { AuthContext } from "./security/AuthContext";
import { useContext } from "react";
// import AuthenticatedRoute from "./security/AuthenticatedRoute";
function AuthenticatedRoute( {children} ) {
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated)
    if(authContext.authenticated) {
        return children;
    } else {
        console.log("in authenticated route");
        return <Navigate to="/login" />
    }
}

function Quiz() {
    return(
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={

                                <Login />
                            
                        }></Route>

                        <Route path='/home' element = {
                            <AuthenticatedRoute>
                                <Home />
                            </AuthenticatedRoute>
                        }></Route>

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default Quiz;