import { useEffect } from "react";
import { useTranslationContext } from "../context/TranslationContext";
import { useUser } from "../context/UserContext";
import TranslationsAPI from "../api/TranslationsAPI";
// import { useHistory } from "react-router-dom";
import withUser from "../hoc/withUser.jsx"

const Profile = () => {
    // const history = useHistory();
    const { translationState, dispatch } = useTranslationContext()
    const { user } = useUser()
    const username = localStorage.getItem('username')

    useEffect(() => {
        const loadTranslation  = async () => {
            // if(localStorage.getItem('username') === null) history.push("/");
            try {
               const response = await TranslationsAPI.getUser(username)
               const translations = response[0].translations
               console.log(response)
              dispatch({ type: 'SET_TRANSLATIONS', payload: translations})
            } catch (e) {
                console.log(e.message)
            }
        }
        loadTranslation()  
    }, [dispatch, user, username])

    return (  
        <>
            <h1>Translations for user: {username}</h1>
            { translationState.loading && <p>Loading translations...</p> }
            <ul>
                { translationState.translations.map((trans, i) => <li key={i}>{trans}</li>) }
            </ul>

        </>
    );
}

export default withUser(Profile)