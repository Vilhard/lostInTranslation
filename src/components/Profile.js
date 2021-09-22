import { useEffect } from "react";
import { useTranslationContext } from "../context/TranslationContext";
import { useUser } from "../context/UserContext";
import TranslationsAPI from "../api/TranslationsAPI";

const Profile = () => {
    const { translationState, dispatch } = useTranslationContext()
    const { user } = useUser()

    useEffect(() => {
        const loadTranslation  = async () => {
            try {
               const response = await TranslationsAPI.getUser(user)
               const translations = response[0].translations
               console.log(response)
              dispatch({ type: 'SET_TRANSLATIONS', payload: translations})
            } catch (e) {
                console.log(e.message)
            }
        }
          loadTranslation()  
    }, [])

    return (  
        <>
            <h1>Translations in Profile page</h1>
            { translationState.loading && <p>Loading translations...</p> }
            <ul>
                { translationState.translations.map((trans, i) => <li key={i}>{trans}</li>) }
            </ul>

        </>
    );
}

export default Profile