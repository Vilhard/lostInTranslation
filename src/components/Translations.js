import withUser from "../hoc/withUser.jsx";
import styles from "./Translations.module.css";
import { useEffect } from "react";
import TranslationsAPI from "../api/TranslationsAPI";
import { useTranslationContext } from "../context/TranslationContext";
import { useState } from "react";

const Translation = () => {
	const username = localStorage.getItem("username");
	const userId = localStorage.getItem("id");
	const { translationState, dispatch } = useTranslationContext();
	const [input, setInput] = useState("");
	const invalidCharacters = /[0-9!¤@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

	function translate(e) {
		setInput(e.target.value);
	}
	//@"^[0-9*#+]+$"
	function saveTranslation() {
		if (input.trim() === "" || input.trim().toLowerCase().match(invalidCharacters)) return;
		//Save to context
		dispatch({
			type: "ADD_TRANSLATION",
			payload: input,
		});
		setInput("");
	}

	//Get user from API and init context
	useEffect(() => {
		const initTranslationContext = async () => {
			const fetchUser = await TranslationsAPI.getUser(username);
			dispatch({
				type: "ADD_TRANSLATIONS",
				payload: fetchUser[0].translations,
			});
		};
		initTranslationContext();
	}, [username, dispatch]);

	//Save new translation to api when state changes
	useEffect(() => {
		const translationsToApi = async () => {
			await TranslationsAPI.updateTranslations(userId, translationState);
		}
		translationsToApi();
	}, [userId, translationState]);

	return (
		<>
			<h1>Translation page for user: {username}</h1>
			<input id="translation" type="text" placeholder="Enter translation..." value={input} onChange={translate} className="Input-text" maxLength="40" />
			<button onClick={saveTranslation}>Save translation</button>
			<div>
				{input
					.split("")
					.map((character, index) =>
						character.toLowerCase().match(/[a-z]/) ? <img src={"/signs/" + character + ".png"} key={index} alt="sign-language" onError={(event) => (event.target.style.display = "none")} className={styles.SignImage} /> : console.log("Character not supported: " + character)
					)}
			</div>
		</>
	);
};

export default withUser(Translation);
