import { createContext } from "react";
import { loginApi } from "../api/AuthenticationApi";

export const AuthContext = createContext();

export default function AuthProvider( {children} ) {

    const login = async (username, password) => {
        const authToken = window.btoa(username + ":" + password); 

        await loginApi(authToken)
            .then((response) => {
                if(response.data === "SUCCESS") {
                    return true;
                }
            }).catch((error) => {
                return false;
            })
    }

    return (
        <AuthContext.Provider value={{login}} >
            {children}
        </AuthContext.Provider>
    );
}