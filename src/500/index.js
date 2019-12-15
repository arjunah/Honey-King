import React, { Fragment } from "react";

function ServerError () {
    return (
        <Fragment>
            <h1>500</h1>
            <div className="static-page-container">
                <h2>Something went wrong...</h2>
            </div>
        </Fragment>
    )
}

export default ServerError;