import { useEffect, useRef } from "react";
import { useTranslationContext } from "../context/TranslationContext";
import { useUser } from "../context/UserContext";
import TranslationsAPI from "../api/TranslationsAPI";
import withUser from "../hoc/withUser.jsx";

const Profile = () => {
	const { translationState, dispatch } = useTranslationContext();
	const { user } = useUser();
	const username = localStorage.getItem("username");
	const userId = localStorage.getItem("id");
	const displayTranslations = useRef([]);

	async function clearTranslations() {
		dispatch({ type: "SET_TRANSLATIONS", payload: [] });
		await TranslationsAPI.updateTranslations(userId, []);
		console.log("translationState: " + JSON.stringify(translationState));
	}

	useEffect(() => {
		const loadTranslation = async () => {
			try {
				const response = await TranslationsAPI.getUser(username);
				const translations = response[0].translations;
				//Show only 10 latest translations
				displayTranslations.current = translations.reverse().slice(0, 10);
				console.log("displayTranslations: " + displayTranslations.current);
				dispatch({ type: "SET_TRANSLATIONS", payload: translations });
			} catch (e) {
				console.log(e.message);
			}
		};
		loadTranslation();
	}, [dispatch, user, username, translationState]);

	return (
		<>
			<h1>Translations for user: {username}</h1>
			{translationState.loading && <p>Loading translations...</p>}
			<ul>
				{displayTranslations.current.map((trans, i) => (
					<li key={i}>{trans}</li>
				))}
			</ul>
			<button onClick={clearTranslations}>Clear translations</button>
		</>
	);
};

export default withUser(Profile);
