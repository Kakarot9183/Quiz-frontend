import { useState } from "react";
import QuizDetails from "../quiz-details/QuizDetails";
import Sidebar from "../sidebar/SIdebar";
import NavBar from "../../header/NavBar";

function CreateQuiz() {
    const [details, setDetails] = useState('quiz');

    return (
        <>
            <div className="d-flex flex-column" style={{height: '100vh'}}>
                <NavBar />
                <div className="quiz-container my-auto">
                    <div className="create-quiz-form shadow-lg">
                        <Sidebar details={details} setDetails={setDetails} create={true}/>
                        <QuizDetails />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateQuiz;