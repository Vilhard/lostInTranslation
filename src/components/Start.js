import StartHeading from "./StartHeading";
import { useTranslationContext } from "../context/TranslationContext";
import TranslationsAPI from "../api/TranslationsAPI";
import "./StartStyles.css";
import { useUser } from "../context/UserContext";
import { useHistory } from "react-router-dom";

const Start = () => {
	const { user, setUser } = useUser();
	const history = useHistory();
	const { dispatch } = useTranslationContext();

	const onInputChange = (e) => {
		setUser(e.target.value.trim());
		console.log(user);
	};

	function loginUser(username, userId) {
		localStorage.setItem("username", username);
		localStorage.setItem("id", userId);
	}

	const onLoginSubmit = async (e) => {
		e.preventDefault();
		if (user === "") return;

		const fetchUser = await TranslationsAPI.getUser(user);
		console.log(fetchUser);
		//If username not found in DB, create new user
		if (fetchUser.length === 0) {
			const newUser = await TranslationsAPI.setNewUser(user);
			console.log("New user: " + newUser);
			loginUser(user, newUser.id);
		} else {
			//Save to context
			dispatch({
				type: "ADD_TRANSLATIONS",
				payload: fetchUser[0].translations,
			});
			//Save to localStorage
			loginUser(user, fetchUser[0].id);
		}
		history.push("/translations");
	};

	return (
		<div>
			<StartHeading />
			<div className="center">
				<form className="form-container">
					<div className="Input">
						<input id="username" type="text" placeholder="What's your name?" onChange={onInputChange} className="Input-text" />
						<button type="submit" onClick={onLoginSubmit}>
							GO
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Start;
