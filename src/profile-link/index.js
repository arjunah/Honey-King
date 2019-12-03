import React from "react";
import "./profile-link.css";
import { Link } from "react-router-dom";

function ProfileLink (props) {
    return (
        <Link to="/users/:userID">Hristo</Link>
    )
}

export default ProfileLink;