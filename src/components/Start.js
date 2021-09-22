import StartHeader from "./StartHeader";
import TranslationsAPI from "../api/TranslationsAPI";
import './StartStyles.css'
import { useUser } from "../context/UserContext";
import {useHistory} from "react-router-dom";

const Start = () => {
    const { user, setUser} = useUser()
    const history = useHistory()

    const onInputChange = e => {
        setUser(e.target.value)
    }
    const onLoginSubmit = async e => {
        e.preventDefault()
        const fetchUser = await TranslationsAPI.getUser(user)
        fetchUser.length === 0 
        ? TranslationsAPI.setNewUser(user).then(() => history.push('/profile')) 
        : history.push('/profile')
    }

    return (
        <div>
            <StartHeader />
            <div className="center">
                <form className="form-container">
                    <div className="Input">
                        <input id="username" type="text" placeholder="What's your name?" onChange={onInputChange} className="Input-text" />
                        <button type="submit" onClick={onLoginSubmit}>GO</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Start