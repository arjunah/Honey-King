import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import CredentialsForm from "../credentials-form";
import { db, routes } from "../db-service";
import Errors from "../errors";

function Register() {

    const [repassword, setRepassword] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [errors, setErrors] = useState(null);

    function registrationHandler(event) {
        event.preventDefault();
        const data = { username, password, repassword };
        db.post(routes.registerUser, data)
            .then(res => {
                if (res.status === 201) {
                    setRedirect(true); 
                } else if (res.status === 400) {
                    res.json().then(err => {
                        let errorMessages = [];
                        Object.values(err).map(error => {
                            return errorMessages.push(error.message);
                        });
                        return setErrors(errorMessages);
                    });
                }
            }).catch(error => {
                console.log(error)
            });
    }

    return (
        redirect ? <Redirect to="/" /> :
        <Fragment>
            {errors !== null ? <Errors errors={errors} /> : null}
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