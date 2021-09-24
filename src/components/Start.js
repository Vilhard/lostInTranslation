import StartHeading from "./StartHeading";
import TranslationsAPI from "../api/TranslationsAPI";
import Input from './Input';
import styles from './Start.module.css'
import { useUser } from "../context/UserContext";
import { useHistory } from "react-router-dom";

const Start = () => {
	const { user, setUser } = useUser();
	const history = useHistory();

	const onInputChange = (e) => {
		setUser(e.target.value.trim());
	};

	function loginUser(username, userId) {
		localStorage.setItem("username", username);
		localStorage.setItem("id", userId);
	}

	const onLoginSubmit = async (e) => {
		e.preventDefault();
		if (user === "") return;

		const fetchUser = await TranslationsAPI.getUser(user);
		//If username not found in DB, create new user
		if (fetchUser.length === 0) {
			const newUser = await TranslationsAPI.setNewUser(user);
			loginUser(user, newUser.id);
		} else {
			//Save to localStorage
			loginUser(user, fetchUser[0].id);
		}
		history.push("/translations");
	};

	return (
		<>
		
			<StartHeading />
			<div className={styles.center}>
				<form className={styles.formContainer}>
					<Input id="username" placeholder="What's your name?" onInputChange={onInputChange} onButtonSubmit={onLoginSubmit}/>
				</form>
			</div>
		</>
	);
};

export default Start;
