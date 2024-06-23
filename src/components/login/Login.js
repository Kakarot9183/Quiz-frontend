import { useState } from 'react';
import './Login.css'
function Login(){

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        console.log(username + " " + password);
    }

    return (
        <>
            <div className='login-container'>
                <div className='login shadow rounded px-5 pt-5 pb-1'>
                    <div className='my-4 mx-2'>
                        <h3 className='text-center m-0'>Welcome Back</h3>
                        <p className='fs-6 m-0'>Please enter your details to sign in.</p>
                    </div>
                    <div className="row g-3 align-items-center m-1">
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
                    <div className="row g-3 align-items-center m-1">
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
                    <div className='d-flex flex-row-reverse forgot p-2'>
                        <span className='text-decoration-underline mx-1'>
                            Forgot Password?
                        </span>
                    </div>
                    <div className='m-5'>
                        <button type='submit' onClick={handleLogin} className='logib-btn btn btn-dark shadow-lg px-4 py-2'>Login</button>
                    </div>
                    <div className='mb-2'>
                        <span>Don't have account yet? </span>
                        <span className='fw-bold hover-underline-animation'>Sign up</span>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Login ;