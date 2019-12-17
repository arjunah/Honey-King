import React from "react";

function Errors({ errors }) {
    return (
        <div className="errors">
            {errors.map((error, index) => {
                return <p key={index}>{error}</p>;
            })}
        </div>
    )
}

export default Errors;