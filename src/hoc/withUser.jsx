import React from "react";
import {Redirect} from "react-router-dom";

const withUser = Component => props => {

    const user = localStorage.getItem('username')

    if (user !== null) {
        return <Component {...props} />
    } else {
        return  <Redirect to="/" />
    }
}

export default withUser
