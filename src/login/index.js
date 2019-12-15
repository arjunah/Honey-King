import React, { Fragment, useState } from "react";
import CredentialsForm from "../credentials-form";

function Login () {
    return (
        <Fragment>
            <h1>Login</h1>
            <div className="AuthForms">
                <p>Login to enjoy the full benefits of our site.</p>
                <CredentialsForm />
            </div>
        </Fragment> 
    )
}

export default Login;