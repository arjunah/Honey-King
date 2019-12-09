import React from "react";

function CredentialsForm ({ registration }) {
    return (
        <form className="CredentialsForm">
            <label htmlFor="email">Email</label>
            <input type="email" name="email"></input>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"></input>
            <div id="repassword" display={registration ? "block" : "none"}>
                <label htmlFor="repassword">Repeat password</label>
                <input type="password" name="repassword"></input>
            </div>
            <button type="submit">{registration ? "Register" : "Login"}</button>
        </form>
    )
}

export default CredentialsForm;