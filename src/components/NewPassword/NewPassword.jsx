import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../home/Home';
import Login from '../Login/Login';

function NewPassword() {



    const [flag, setFlag] = useState(false);

    const [login, setLogin] = useState(true);
    const [newpasswordlog, setNewpasswordlog] = useState("");
    const [confirmNewpasswordlog, setConfirmNewpasswordlog] = useState("");

     // Directly to the Sign up page
    //  function handleClick() {
    //     //setLogin(!login)
    //     setSignUp(!signUp)
    // }


    function handleNewPassword(e) {
        e.preventDefault();

        if (!newpasswordlog || !confirmNewpasswordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((newpasswordlog !== confirmNewpasswordlog) ) {
            setFlag(true);
        } else {
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(confirmNewpasswordlog));
            setLogin(!login);
            setFlag(false);
        }
    }


    return (
        <>
            {login ?
            <div> <form onSubmit={handleNewPassword}>
            <h3>Enter your new Password!</h3>
            <br/>
            <div className="form-group">
                <label>Enter Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setNewpasswordlog(event.target.value)} />
            </div>

            <div className="form-group">
                <label>Confirm your password</label>
                <input type="password" className="form-control" placeholder="Confirm your password" onChange={(event) => setConfirmNewpasswordlog(event.target.value)} />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
            {/* <p className="forgot-password text-right">
                Don't have account <a href="#" onClick={handleClick} >Sign up?</a>
            </p> */}

            {flag && <Alert color='primary' variant="warning" >
                Not matching Your password! Please try again
                    </Alert>}
        </form>
        </div>
      : <Login />
}
        </>

    )
}

export default NewPassword
