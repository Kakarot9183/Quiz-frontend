import { createContext, useState } from "react";
import { loginApi, signUpApi } from "../api/AuthenticationApi";

export const AuthContext = createContext();

export default function AuthProvider( {children} ) {

    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    const login = async (username, password) => {
        const authToken = 'Basic ' + window.btoa(username + ":" + password); 

        try {

            const response = await loginApi(authToken);

            if(response.data === "SUCCESS") {
                setUsername(username);
                setToken(authToken);
                setAuthenticated(true);
                return true;
            } else {
                setUsername(null);
                setToken(null);
                setAuthenticated(false);
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const signup = async (username, password) => {
        const authToken = window.btoa(username + ":" + password);

        try {

            const response = await signUpApi(username, password);

            if(response.data === "CREATED") {
                setUsername(username);
                setToken(authToken);
                setAuthenticated(true);
                return true;
            } else {
                setUsername(null);
                setToken(null);
                setAuthenticated(false);
                return false;
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <AuthContext.Provider value={{login, username, authenticated, token, signup}} >
            {children}
        </AuthContext.Provider>
    );
}