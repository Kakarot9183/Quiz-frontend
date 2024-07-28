import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import AuthProvider from "./security/AuthContext";
import AuthenticatedRoute from "./security/AuthenticatedRoute";
import EditQuiz from "./quizzes/edit-quiz/EditQuiz";
import MyQuizzes from "./quizzes/MyQuizzes";
import CreateQuiz from "./quizzes/create-quiz/CreateQuiz";

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

                        <Route path='/quiz/create' element = {
                            <AuthenticatedRoute>
                                <CreateQuiz />
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path='/quiz/edit/:id' element = {
                            <AuthenticatedRoute>
                                <EditQuiz />
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path='/quiz' element = {
                            <AuthenticatedRoute>
                                <MyQuizzes />
                            </AuthenticatedRoute>
                        }></Route>

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default Quiz;