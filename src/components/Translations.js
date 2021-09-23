import withUser from "../hoc/withUser.jsx";
import { useEffect } from "react";
import TranslationsAPI from "../api/TranslationsAPI";
import { useTranslationContext } from "../context/TranslationContext";
import { useState } from "react";

const Translation = () => {
	const username = localStorage.getItem("username");
	const userId = localStorage.getItem("id");
	const { translationState, dispatch } = useTranslationContext();
	const [input, setInput] = useState("");

	function translate(e) {
		setInput(e.target.value);
		console.log("Translation changed: " + input);
	}
	function saveTranslation() {
		if (input.trim() === "") return;

		console.log("Save to context: " + JSON.stringify(input));
		//Save to context
		dispatch({
			type: "ADD_TRANSLATION",
			payload: input,
		});
		setInput("");
	}

	useEffect(() => {
		const translationsToApi = async () => {
			await TranslationsAPI.updateTranslations(userId, translationState);
			//Save to API
			console.log("Save to API: " + JSON.stringify(translationState));
		};
        translationsToApi()
	}, [translationState, userId]);

	return (
		<>
			<h1>Translation page for user: {username}</h1>
			<input id="translation" type="text" placeholder="Enter translation..." value={input} onChange={translate} className="Input-text" />
			<button onClick={saveTranslation}>Save translation</button>
		</>
	);
};

export default withUser(Translation);
