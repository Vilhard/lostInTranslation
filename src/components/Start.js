import { useState } from "react";
import StartHeader from "./StartHeader";
import TranslationsAPI from "../api/TranslationsAPI";
import './StartStyles.css'

const Start = () => {

    const [user, setUser] = useState({
        username: '',
        translations: []
    })
    const onInputChange = e => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }
    const onLoginSubmit = async e => {
        e.preventDefault()
        const fetchUser = await TranslationsAPI.getUsername(user.username)
       fetchUser.length === 0 ? TranslationsAPI.setNewUser(user.username) : console.log('User exists')
    }

    return (
        <div>
            <StartHeader />
            <form className="form-container">
                <div>
                   <input id="username" type="text" placeholder="What's your name?" onChange={onInputChange} className="form-input"/> 
                   <button type="submit" onClick={onLoginSubmit}>GO</button>
                </div>
            </form>
        </div>
    );
}

export default Start