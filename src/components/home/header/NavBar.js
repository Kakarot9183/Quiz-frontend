import { Link } from "react-router-dom";
import userPhoto from "./../../../resources/user-profile-photo.png"

function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-secondary">
                <div class="container-fluid">
                    <span class="navbar-brand fs-2 fw-bold mx-4 my-1">Quiz.</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/home" class="nav-link active fs-5 mx-3" aria-current="page">Home</Link>
                            </li>
                        </ul>
                        <div class="d-flex justify-content-center">
                            <img 
                                alt={userPhoto} 
                                src={userPhoto}
                                style={{
                                    width: '30%',
                                    height: '30%', // Optional, can be omitted for equal width and height
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    overflow: 'hidden'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </nav>           
        </>
    );
}

export default NavBar;