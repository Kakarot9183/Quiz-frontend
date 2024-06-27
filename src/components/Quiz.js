import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import AuthProvider from "./security/AuthContext";
import AuthenticatedRoute from "./security/AuthenticatedRoute";
import QuizDetails from "./home/quiz-details/QuizDetails";

function Quiz() {
    return(
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/auth' element={
                            <Login />
                        }></Route>

                        <Route path='/' element={
                            <Navigate to='/auth?mode=login' />
                        }></Route>

                        <Route path='/home' element = {
                            <AuthenticatedRoute>
                                <Home />
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path='/create' element = {
                            <AuthenticatedRoute>
                                <QuizDetails />
                            </AuthenticatedRoute>
                        }></Route>

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default Quiz;