import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import AuthProvider from "./security/AuthContext";

function Quiz() {
    return(
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />}></Route>

                        <Route path='/home' element = {<Home />}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default Quiz;