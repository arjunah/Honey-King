import React from "react";
import CredentialsForm from "../credentials-form"

function Register() {
    return (
        <div className="Register">
            <h1>Registration Form</h1>
            <p>Registered users get the best deals on our products. <br/>Register now to enjoy discounts, special offers and more!</p>
            <CredentialsForm registration={true} />
        </div>
    )
}

export default Register;