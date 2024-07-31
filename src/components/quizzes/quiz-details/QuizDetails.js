import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createQuizApi } from "../../api/QuizApi";

function QuizDetails({quizName, setQuizName, description, setDescription}) {
    
    const navigate = useNavigate();    

    function handleQuizName(e) {
        setQuizName(e.target.value);
    }

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    async function createQuiz() {
        const response = await createQuizApi(quizName, description);
        if(response.status === 201) {
            console.log("Quiz created")
            navigate(`/quiz/edit/${response.data.uuid}`);
        }
    }

    function cancelProcess() {
        navigate('/quiz');
    }

    return (
        <>
            <div className="quiz-detail-form p-5">
                <form className="d-flex flex-column">
                    <div className="mb-5">
                        <label className="form-label">Quiz Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={quizName}
                            onChange={handleQuizName}
                        />
                    </div>
                    <div className="mb-auto">
                        <label className="form-label">Description</label>
                        <textarea 
                            type="text" 
                            className="form-control desc" 
                            value={description}
                            onChange={handleDescription}
                        />
                    </div>
                    <div className="button-group mb-4 d-flex">
                        <button 
                            type="button" 
                            className="button btn btn-light p-2 px-4 shadow me-5"
                            onClick={cancelProcess}
                            >Close</button>
                        <button 
                            type="button" 
                            className="button btn btn-dark p-2 px-4 shadow me-auto"
                            onClick={createQuiz}
                        >Save</button>
                        <button 
                            type="button" 
                            className="button btn btn-dark p-2 px-4 shadow"
                            onClick={createQuiz}
                        >Next</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default QuizDetails;