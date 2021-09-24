import { useEffect } from "react";
import { useTranslationContext } from "../context/TranslationContext";
import TranslationsAPI from "../api/TranslationsAPI";
import withUser from "../hoc/withUser.jsx";

const Profile = () => {
	const { translationState, dispatch } = useTranslationContext();
	const username = localStorage.getItem("username");
	const userId = localStorage.getItem("id");

	function clearTranslations() {
		dispatch({ type: "SET_TRANSLATIONS", payload: [] });
		console.log("translationState: " + JSON.stringify(translationState));
	}
	//Get current translations from the API and update Context
	useEffect(() => {
		const initTranslations = async () => {
			try {
				
				const fetchUser = await TranslationsAPI.getUser(username);
				dispatch({
					type: "ADD_TRANSLATIONS",
					payload: fetchUser[0].translations,
				});
			} catch (e) {
				console.log(e.message);
			}
		};
		initTranslations();
	}, [username, dispatch]);

	//Update API & display when state changes
	useEffect(() => {
		const updateTranslations = async () => {
			try {
				await TranslationsAPI.updateTranslations(userId, translationState);
			} catch (error) {
				console.log(error.message)
			}
		};
		updateTranslations();
	}, [userId, translationState]);

	return (
		<>
			<h1>Translations for user: {username}</h1>
			<ul>
				{translationState.translations.slice(0, 10).reverse().map((trans, i) => (
					<li key={i}>{trans}</li>
				))}
			</ul>
			<button onClick={clearTranslations}>Clear translations</button>
		</>
	);
};

export default withUser(Profile);
