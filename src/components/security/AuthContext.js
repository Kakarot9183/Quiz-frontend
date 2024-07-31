import { createContext, useState } from "react";
import { loginApi, signUpApi } from "../api/AuthenticationApi";
import ApiClient from "../api/ApiClient";

export const AuthContext = createContext();

export default function AuthProvider( {children} ) {

    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    console.log(token,"token")

    const login = async (username, password) => {
        const authToken = 'Basic ' + window.btoa(username + ":" + password); 

        try {

            const response = await loginApi(authToken);

            console.log(response);

            if(response.data === "SUCCESS") {
                setUsername(username);
                setToken(authToken);
                setAuthenticated(true);

                console.log(authToken,"asdff")
                ApiClient.interceptors.request.use((config) => {
                    config.headers.Authorization=authToken;
                    console.log(config,"config")
                    return config;
                });

                return true;
            } else {
                logout();
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const signup = async (name, username, password) => {
        const authToken = window.btoa(username + ":" + password);

        try {

            const response = await signUpApi(name, username, password);

            if(response.status === 201) {
                setUsername(username);
                setToken(authToken);
                setAuthenticated(true);

                ApiClient.interceptors.request.use((config) => {
                    config.headers.Authorization=authToken;
                    console.log(config,"config")
                    return config;
                });

                return true;
            } else {
                logout();
                return false;
            }
        } catch (error) {
            console.log(error);
        }

    }

    const logout = () => {
        setUsername(null);
        setToken(null);
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{login, username, authenticated, token, signup, logout}} >
            {children}
        </AuthContext.Provider>
    );
}