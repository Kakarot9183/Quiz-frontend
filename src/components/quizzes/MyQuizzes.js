import { useNavigate } from "react-router-dom";
import NavBar from "../header/NavBar";
import add from "./../../resources/svg/add-svgrepo-com.svg"
import { useEffect, useState } from "react";
import { getQuizzes } from "../api/QuizApi";
import "./MyQuizzes.css"

function MyQuizzes() {

    const navigate = useNavigate();
    const [quiz, setQuiz] = useState([]);

    const onButtonClick = () => {
        navigate('create');
    }

    useEffect(() => {
        const request = async () => {
            const response = await getQuizzes();
            setQuiz(response.data);
        }
        request();
    }, []);

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="heading">
                    <h1 className="m-0 fw-bold">My Quizzes</h1>
                    <p>You can manage your quiz here.</p>
                </div>
                <div className="create-quiz mb-5">
                    <button 
                    type="button" 
                    className="btn btn-dark button rounded-pill" 
                    onClick={onButtonClick}
                    >
                        <img alt={add} src={add} />
                        <span className="button-text fw-bold p-2">Create Quiz</span>
                    </button>
                </div>
                <div className="mt-5">
                    <div className="search-group">
                        <svg className="search-icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input placeholder="Search" type="search" className="search-input" />
                    </div>
                    <ul className="list-group list-group-flush">
                        {quiz.map((e) => (
                            <div className="list-group-item py-4 d-flex" key={e.uuid} >
                                <span className="my-auto me-auto align-items-center">{e.name}</span>
                                <btn className="btn btn-light mx-2 py-2 px-4" >Edit</btn>
                                <btn className="btn btn-dark mx-2 py-2 px-4" >Delete</btn>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MyQuizzes;