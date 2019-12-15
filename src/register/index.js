import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import CredentialsForm from "../credentials-form";
import { db, routes } from "../db-service";

function Register() {

    const [repassword, setRepassword] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    function registrationHandler() {
        const data = { username, password, repassword };
        db.post(routes.registerUser, data);
        setRedirect(true);
    }

    return (
        redirect ? <Redirect to="/" /> :
        <Fragment>
            <h1>Registration Form</h1>
            <p>Registered users get the best deals on our products. <br />Register now to enjoy discounts, special offers and more!</p>
            <form className="credentials-form" onSubmit={registrationHandler}>
                <CredentialsForm username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>
                <label htmlFor="repassword">Repeat password</label>
                <input type="password" id="repassword" value={repassword} placeholder="Repeat your password" onChange={event => setRepassword(event.target.value)}></input>
                <button>Register</button>
            </form>
        </Fragment>
    )
}

export default Register;