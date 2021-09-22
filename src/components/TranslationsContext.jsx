import { createContext, useState } from "react"

export const TranslationsContext = createContext(null)

// const TranslationsContext = ({ children }) => {
//     const [translations, setTranslations] = useState(null)
//     return (
//         <TrnaslatinsContext.Provider value={[ user, setTranslations ]}>
//             { children }
//         </TrnaslatinsContext.Provider>
//     )
// }

// export default TranslationsContext