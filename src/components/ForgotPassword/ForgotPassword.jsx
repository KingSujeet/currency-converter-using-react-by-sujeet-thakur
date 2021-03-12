import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../home/Home';
import Login from '../Login/Login';
import Newpassword from '../NewPassword/NewPassword';

function ForgotPassword() {

    const [emaillog, setEmaillog] = useState(" ");
    const [SecurityQuestionlog, setSecurityQuestionlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);
    const [login, setLogin] = useState(true);
    const [newpassword, setNewpassword] = useState(true);

     // Directly to the Sign up page
    //  function handleClick() {
    //     //setLogin(!login)
    //     setSignUp(!signUp)
    // }


    function handleLogin(e) {
        e.preventDefault();
        let secutityq = localStorage.getItem('SecurityQuestion').replace(/"/g, "");
        let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !SecurityQuestionlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((SecurityQuestionlog !== secutityq) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setNewpassword(!newpassword);
            setFlag(false);
        }
    }


    return (
        <>
    
            {newpassword ?
            <div> <form onSubmit={handleLogin}>
                <h3>Recover Your Password!</h3>
                <br/>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Security Question: What is your nickname ?</label>
                    <input type="text" className="form-control" placeholder="Enter Your answer" onChange={(event) => setSecurityQuestionlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                {/* <p className="forgot-password text-right">
                    Don't have account <a href="#" onClick={handleClick} >Sign up?</a>
                </p> */}

                {flag && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
            </form>
        </div>
        : <Newpassword />
}
        </>

    )
}

export default ForgotPassword
