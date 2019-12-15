import React, { useState } from "react";
import {db, routes } from "../db-service";

function CredentialsForm ({ registration }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    function formHandler () {
        const data = { username, password, repassword };
        db.post(routes.registerUser, data);
    }

    return (
        <form className="CredentialsForm" onSubmit={formHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" value={username} placeholder="Set your username" onChange={event => setUsername(event.target.value)}></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} placeholder="Set your password" onChange={event => setPassword(event.target.value)}></input>
            <div id="repassword" display={registration ? "block" : "none"}>
                <label htmlFor="repassword">Repeat password</label>
                <input type="password" id="repassword" value={repassword} placeholder="Repeat your password" onChange={event => setRepassword(event.target.value)}></input>
            </div>
            <button>{registration ? "Register" : "Login"}</button>
        </form>
    )
}

export default CredentialsForm;