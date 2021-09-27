import UserProvider from "./UserContext";
import TranslationProvider from "./TranslationContext";
const AppContext = ({ children }) => {
    return (
        <UserProvider>
            <TranslationProvider>
                { children }
            </TranslationProvider>
        </UserProvider>
    )
}
export default AppContext