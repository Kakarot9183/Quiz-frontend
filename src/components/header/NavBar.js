import { Link, useNavigate } from "react-router-dom";
import userPhoto from "./../../resources/user-profile-photo.png"
import { AuthContext } from "../security/AuthContext";
import { useContext } from "react";

function NavBar() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const logout = () => {
        authContext.logout();
        navigate('/auth?mode=login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                    <span className="navbar-brand fs-2 fw-bold mx-4 my-1">Quiz.</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active fs-5 mx-3" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/quiz" className="nav-link active fs-5 mx-3" aria-current="page">My Quizzes</Link>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center mx-5" style={{width : "75px"}} data-bs-toggle="dropdown">
                            <img 
                                alt="pfp"
                                src={userPhoto}
                                style={{
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    overflow: 'hidden'
                                }}
                                className="dropdown-toggle"
                            />
                            <div className="drop-icon my-auto mx-2"></div>
                            <ul className="dropdown-menu dropdown-list">
                                <li><Link className="dropdown-item" >Profile</Link></li>
                                <li><Link className="dropdown-item" onClick={logout} >Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>           
        </>
    );
}

export default NavBar;