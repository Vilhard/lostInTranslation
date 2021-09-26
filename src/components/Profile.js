import { useEffect } from "react";
import { useTranslationContext } from "../context/TranslationContext";
import styles from './Profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import TranslationsAPI from "../api/TranslationsAPI";
import withUser from "../hoc/withUser.jsx";

const Profile = () => {
	const { translationState, dispatch } = useTranslationContext();
	const username = localStorage.getItem("username");
	const userId = localStorage.getItem("id");

	// push empty array to translation state to clear it
	function clearTranslations() {
		dispatch({ type: "SET_TRANSLATIONS", payload: [] });
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
		<div className={styles.mainContainer}>
			<div className={styles.formContainer}>
				<h2 className={styles.header}>Translations</h2>
				<ul className={styles.listContainer}>
					{translationState.translations.slice(0, 10).reverse().map((trans, i) => (
						<li className={styles.text} key={i}>{trans}</li>
					))}
				</ul>
				<button className={styles.button} onClick={clearTranslations}>
					<FontAwesomeIcon icon={faTrashAlt} size="2x" />
				</button>
			</div>
		</div>
	);
};

export default withUser(Profile);
