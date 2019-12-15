import React from "react";
import { Link } from "react-router-dom";

function ProfileLink () {
    return (
        <Link to="/users/:userID">Hristo</Link>
    )
}

export default ProfileLink;