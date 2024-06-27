import { useState } from 'react';
import './LoginError.css';

function LoginError() {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const handleValidation = (e) => {
        e.preventDefault(); 

        const regExp = /password/;
        
        if (password === "") {
            setMessage("Please enter password");
        } else if (regExp.test(password)) {
            setMessage("Password is valid");
        } else {
            setMessage("Password is not valid");
        }
    };

    return (
        <div className="validation">
            <form onSubmit={handleValidation}>
                <input type="password" value={password} onChange={handleChange} />
                <p>{message}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginError;
