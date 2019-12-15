import React, { Fragment } from "react";

function CredentialsForm({ username, password, setUsername, setPassword }) {

    return (
        <Fragment>
            <label htmlFor="username">Username</label>
            <input id="username" value={username} placeholder="Enter your username" onChange={event => setUsername(event.target.value)}></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} placeholder="Enter your password" onChange={event => setPassword(event.target.value)}></input>
        </Fragment>
    )
}

export default CredentialsForm;