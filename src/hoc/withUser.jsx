import React from "react";
import {Redirect, useLocation } from "react-router-dom";
// import TranslationsAPI from "../api/TranslationsAPI";

const withUser = Component => props => {
    const username = localStorage.getItem('username')
    const location = useLocation();

    //Check if current username is in DB
    // const userExistsInDB = async (username) => {
    //     try {
    //         const fetchedUser = await TranslationsAPI.getUser(username);
    //         return fetchedUser.username === username
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    //Logged in 
    if (username !== null) {
        //Redirect logged in user from frontpage to "/translations"
        if(location.pathname === '/') {
            return <Redirect to="/translations" />
        }
        return <Component {...props} />
    }else{
        //Redirect NOT logged in user to frontpage
        if(location.pathname !== '/') {
            return <Redirect to="/" />
        }
        return <Component {...props} />
    }
}

export default withUser
