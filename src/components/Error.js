import React from "react" ;
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err); 
    return(
        <div>
            <h1>Welcome to this page, you've navigated to the wrong side of the website.</h1>
            <h3> {err.status} : {err.statusText}</h3>
        </div>
    )
}


export default Error;