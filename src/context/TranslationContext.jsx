import { createContext, useContext, useReducer } from "react";

const TranslationContext = createContext(null)

export const useTranslationContext = () => {
    return useContext(TranslationContext)
}

const translationReducer = (state, action) => {
    console.log("Payload: " + JSON.stringify(action.payload))
    switch (action.type) {
        case 'ADD_TRANSLATION': 
            return {
                translations: [...state.translations, action.payload]
            }
        case 'ADD_TRANSLATIONS': 
            return {
                translations: [...action.payload]
            }
        case 'SET_TRANSLATIONS':
            return {
                translations: action.payload 
            }
        default:
            return state
    }
}

const initialState = {
    translations: []
}

const TranslationProvider = ({ children }) => {
    const [ translationState, dispatch ] = useReducer(translationReducer, initialState)

    return (
        <TranslationContext.Provider value={{ translationState, dispatch }}>
            { children }
        </TranslationContext.Provider>
    )
}
export default TranslationProvider