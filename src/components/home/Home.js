import { useNavigate } from "react-router-dom";
import NavBar from "./header/NavBar";
import "./Home.css";
import add from "./../../resources/add-svgrepo-com.svg"

function Home() {

    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate('/create');
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="heading">
                    <h1 className="m-0 fw-bold">My Quizzes</h1>
                    <p>You can manage your quiz here.</p>
                </div>
                <div className="create-quiz">
                    <button 
                    type="button" 
                    className="btn btn-dark button rounded-pill" 
                    onClick={onButtonClick}
                    >
                        <img alt={add} src={add} />
                        <span className="button-text fw-bold p-2">Create Quiz</span>
                    </button>
                </div>
            </div>
        </>
    );
} 

export default Home;