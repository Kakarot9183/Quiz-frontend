import "./EditQuiz.css"
import { useEffect, useState } from "react";
import NavBar from "../../header/NavBar";
import QuizDetails from "../quiz-details/QuizDetails";
import QuestionDetails from "../question-details/QuestionDetails";
import Sidebar from "../sidebar/SIdebar";
import { useParams } from "react-router-dom";
import { getQuizByID } from "../../api/QuizApi";

function EditQuiz() {

    const [details, setDetails] = useState('question');

    const {id} = useParams();

    useEffect(() => {
        const request = async () => {
            const response = await getQuizByID(id);
            setQuizName(response.data.name);
            setDescription(response.data.description);
        }
        request();
    }, []);
    
    const [quizName, setQuizName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <div className="d-flex flex-column" style={{height: '100vh'}}>
                <NavBar />
                <div className="quiz-container my-auto">
                    <div className="create-quiz-form shadow-lg">
                        <Sidebar details={details} setDetails={setDetails} create={false}/>
                        {details === 'quiz' ? 
                            <QuizDetails 
                                quizName={quizName}  
                                setQuizName={setQuizName}
                                description={description}
                                setDescription={setDescription}
                            /> : <QuestionDetails 

                            />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditQuiz;