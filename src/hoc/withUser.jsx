import React, {Component} from "react";
import {useUser} from "../context/UserContext";
import {Redirect} from "react-router-dom";

const withUser = Component => props => {
    const { user } = useUser()
    if (user !== '') {
        return <Component {...props} />
    } else {
        return  <Redirect to="/" />
    }
}

export default withUser
