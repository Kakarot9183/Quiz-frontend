import "./EditQuiz.css"
import { useState } from "react";
import NavBar from "../../header/NavBar";
import QuizDetails from "../quiz-details/QuizDetails";
import QuestionDetails from "../question-details/QuestionDetails";

function EditQuiz() {

    const [details, setDetails] = useState('quiz');

    function handleDetailsChange(e) {
        setDetails(e.target.value);
    }

    return (
        <>
            <div className="d-flex flex-column" style={{height: '100vh'}}>
                <NavBar />
                <div className="quiz-container my-auto">
                    <div className="create-quiz-form shadow-lg">
                        <div className="menu-bar px-auto bg-dark-subtle rounded-4">
                            <div class="radio-inputs">
                                <label class="radio">
                                    <input type="radio" name="radio" value="quiz" checked={details === 'quiz'} onChange={handleDetailsChange}/>
                                    <span class="name">Quiz</span>
                                </label>
                                    
                                <label class="radio">
                                    <input type="radio" name="radio" value="question" checked={details === 'question'} onChange={handleDetailsChange} disabled/>
                                    <span class="name">Questions</span>
                                </label>
                            </div>
                        </div>
                        {/* <QuizDetails /> */}
                        <QuestionDetails />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditQuiz;