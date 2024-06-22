import './Login.css'
function Login(){
    return (
        <>
        <div class="card">
            <div class="header">
                <h3>login</h3>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
                </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    remember me
                </label>
            </div>
            <div  class="button">
                <button type="button" class="btn btn-dark">Login</button>
            </div>

        </div>
        


        
        
        
        </>
    )
}
export default Login ;