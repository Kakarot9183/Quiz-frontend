import { useContext, useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../security/AuthContext';
function Login(){

    const[username, setUsername] = useState('xpnsn');
    const[name, setName] = useState('');
    const[password, setPassword] = useState('0109');
    const[login, setLogin] = useState(true); 
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSignup = async () => {
        if(await authContext.signup(username, password)) {
            navigate('/home')
        }
    }

    const handleLogin = async () => {
        if(await authContext.login(username, password)) {
            navigate('/home');
        }
        
    }

    return (
        <>
            <div className='login-container'>
                <div className='login shadow rounded px-3 pt-5 pb-1'>
                    <div className='my-4 mx-2'>
                        {login ? 
                        <>
                            <h3 className='text-center m-0'>Welcome Back</h3>
                            <p className='fs-6 m-0'>Please enter your details to sign in.</p>
                        </>
                        : 
                        <>
                            <h3 className='text-center m-0'>Sign Up</h3>
                            <p className='fs-6 m-0'>Enter your personal details.</p>
                        </>
                        
                        }
                        
                    </div>
                    {!login && 
                        <div className="row g-3 align-items-center m-2">
                            <div className="col-auto">
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                className="form-control"
                                placeholder="Name"
                            />
                            </div>
                        </div>
                    }
                    <div className="row g-3 align-items-center m-2">
                        <div className="col-auto">
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            className="form-control"
                            placeholder="Username"
                        />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center m-2">
                        <div className="col-auto">
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="form-control"
                            placeholder="Password"
                        />
                        </div>
                    </div>
                    {login && 
                        <div className='d-flex flex-row-reverse forgot p-2'>
                            <span className='text-decoration-underline mx-1'>
                                Forgot Password?
                            </span>
                        </div>
                    }
                    
                    <div className='m-4 mb-5'>
                        {login ? <button type='submit' onClick={handleLogin} className='logibfalse-btn btn btn-dark shadow-lg px-4 py-2'>Login</button> : <button type='submit' onClick={handleSignup} className='logib-btn btn btn-dark shadow-lg px-4 py-2'>Create Account</button>}
                        
                    </div>
                    {login ? 
                        <div className='my-2'>
                            <span>Don't have account yet? </span>
                            <span className='fw-bold hover-underline-animation' onClick={() => setLogin((value) => !value)}>Sign up</span>
                        </div>
                        : 
                        <div className='my-2'>
                            <span>Already have an account? </span>
                            <span className='fw-bold hover-underline-animation' onClick={() => setLogin((value) => !value)}>Login</span>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default Login ;