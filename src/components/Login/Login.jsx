import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Currency from '../CurrencyConverter/currencyconverter';
import SignUp from '../Registration/Registration';
import Forgot from '../ForgotPassword/ForgotPassword';

function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);
    const [signUp, setSignUp] = useState(true);
    const [forgot, setForgot] = useState(true);

     // Directly to the Sign up page
     function handleClick() {
        //setLogin(!login)
        setSignUp(!signUp)
    }

    function handleClickForgot() {
        setForgot(!forgot)
    }


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }


    return (
        <>
        {forgot ?
        <div>
        {signUp ?
        <div>
            {home ? <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <p className="forgot-password text-right">
                Forgot Your Password ?<a href="#" onClick={handleClickForgot} > click here</a>
                </p>
                <p className="forgot-password text-right">
                    Don't have account <a href="#" onClick={handleClick} >Sign up?</a>
                </p>
               

                {flag && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
            </form>
                : <Currency />
            }

        </div>
        : <SignUp />
}
        </div>
        :<Forgot />
}
    </>
    )
}

export default Login
