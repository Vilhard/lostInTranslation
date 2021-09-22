import { createContext, useContext, useReducer } from "react";

const TranslationContext = createContext(null)

export const useTranslationContext = () => {
    return useContext(TranslationContext)
}

const translationReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSLATION': 
            return {
                loading: false,
                translations: action.payload
            }
        case 'SET_TRANSLATIONS':
            return {
                loading: false,
                translations: action.payload
            }
        case 'CLEAR_TRANSLATIONS':
            return {
                loading: false,
                translations: action.payload 
            }
        default:
            return state
    }
}

const initialState = {
    loading: true,
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