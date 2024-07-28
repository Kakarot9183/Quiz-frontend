import { useNavigate } from "react-router-dom";
import { createQuizApi } from "../../api/QuizApi";
import { useState } from "react";
import "./QuestionDetails.css"

function QuestionDetails() {

    const [questionName, setQuizName] = useState('');
    const [description, setDescription] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [correctOption, setCorrectOption] = useState('');

    const navigate = useNavigate();    

    function handleQuestionTitle(e) {
        setQuizName(e.target.value);
    }

    function handleOption1Change(e) {
        setOption1(e.target.value);
    }
    function handleOption2Change(e) {
        setOption2(e.target.value);
    }
    function handleOption3Change(e) {
        setOption3(e.target.value);
    }
    function handleOption4Change(e) {
        setOption4(e.target.value);
    }

    function handleCorrectOption(e) {
        setCorrectOption(!e.target.checked ? '' : e.target.value);
    }

    async function createQuiz() {
        const response = await createQuizApi(questionName, description);
        if(response.status === 201) {
            console.log("Quiz created")
        }
    }

    function cancelProcess() {
        navigate('/home');
    }

    return (
        <>
            <div className="quiz-detail-form p-5">
                <form className="d-flex flex-column">
                    <div className="mb-5">
                        <label className="form-label">Question title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={questionName}
                            onChange={handleQuestionTitle}
                        />
                    </div>
                    <div className="options row row-cols-2 mb-auto gap-4"> 
                        <div className="col input-group mb-3" id="option1">
                            <div className="option-input d-flex gap-4">
                                <input 
                                    className="form-input" 
                                    type="checkbox" 
                                    value="option1"
                                    checked = {correctOption === 'option1'} 
                                    onChange={handleCorrectOption}
                                />
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={handleOption1Change}
                                    value={option1}    
                                />
                            </div>
                        </div>
                        
                        <div className="col input-group mb-3" id="option1">
                            <div className="option-input d-flex gap-4">
                                <input 
                                    className="form-input" 
                                    type="checkbox" 
                                    value="option2"
                                    checked = {correctOption === 'option2'} 
                                    onChange={handleCorrectOption}
                                />
                                <input 
                                    type="text"     
                                    className="form-control"
                                    onChange={handleOption2Change}
                                    value={option2} 
                                />
                            </div>
                        </div>
                        
                        <div className="col input-group mb-3" id="option1">
                            <div className="option-input d-flex gap-4">
                                <input 
                                    className="form-input" 
                                    type="checkbox"
                                    value="option3"
                                    checked = {correctOption === 'option3'} 
                                    onChange={handleCorrectOption}
                                />
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange={handleOption3Change}
                                    value={option3}
                                />
                            </div>
                        </div>
                        
                        <div className="col input-group mb-3" id="option1">
                            <div className="option-input d-flex gap-4">
                                <input 
                                    className="form-input" 
                                    type="checkbox" 
                                    value="option4"
                                    checked = {correctOption === 'option4'} 
                                    onChange={handleCorrectOption}
                                />
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange={handleOption4Change}
                                    value={option4}
                                />
                            </div>
                        </div>
                        
                        
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
                            disabled={correctOption === ''}
                        >Add</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default QuestionDetails;