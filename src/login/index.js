import React, { Fragment, useState } from "react";
import CredentialsForm from "../credentials-form";
import { db, routes } from "../db-service";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler() {
        const data = { username, password };
        db.post(routes.loginUser, data);
    }

    return (
        <Fragment>
            <h1>Login</h1>
            <div className="auth-forms">
                <p>Login to enjoy the full benefits of our site.</p>
                <form className="credentials-form" onSubmit={loginHandler}>
                    <CredentialsForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
                    <button>Login</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Login;