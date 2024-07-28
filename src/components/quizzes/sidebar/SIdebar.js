import { useEffect } from "react";
import QuestionCard from "../question-details/QuestionCard";
import "./Sidebar.css"

function Sidebar({details, setDetails, create}) {

    function handleDetailsChange(e) {
        setDetails(e.target.value);
    }

    // useEffect(() => {
    //     const request = 
    // })
    

    return(
        <>
            <div className="menu-bar px-auto bg-dark-subtle rounded-4 p-4">
                <div className="radio-inputs mb-5 rounded-3">
                    <label className="radio">
                        <input type="radio" name="radio" value="quiz" checked={details === "quiz"} onChange={handleDetailsChange}/>
                        <span className="name">Quiz</span>
                    </label>
                        
                    <label className="radio">
                        <input type="radio" name="radio" value="question" checked={details === "question"} onChange={handleDetailsChange} disabled={create}/>
                        <span className="name">Questions</span>
                    </label>
                </div>
                { details === "question" &&
                    <div className="question-cards mt-4 px-4">
                        <QuestionCard id="3" number="1"/>
                        <QuestionCard id="4" number="2"/>
                        <QuestionCard id="5" number="3"/>
                        <QuestionCard id="5" number="3"/>
                        <QuestionCard id="5" number="3"/>
                        <QuestionCard id="5" number="3"/>
                        <QuestionCard id="5" number="3"/>
                        <QuestionCard id="5" number="3"/>
                    </div>
                }   
            </div>
        </>
    );
}

export default Sidebar;