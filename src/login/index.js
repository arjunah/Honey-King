import React from "react";
import CredentialsForm from "../credentials-form";

function Login () {
    return (
        <div className="AuthForms">
            <h1>Login</h1>
            <p>Login to enjoy the full benefits of our site.</p>
            <CredentialsForm />
        </div>
    )
}

export default Login;