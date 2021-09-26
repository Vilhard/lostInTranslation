import axios from "axios";

const apiURL = 'https://noroff-assignment-api-lit.herokuapp.com'
const apiKey = "ByvuHqRoCVXC9G9Z06xa3ec9rDXYgZyJZRDXJ9k3arjVxy2AuUXX6c34Z2dgnlx2";

const TranslationsAPI = {

	// GET: user from DB
	async getUser(username) {
		return await axios.get(`${apiURL}/translations?username=${username}`).then(response =>
			response.data
		).catch(error => console.log(error))
	},
	// POST: user to DB
	async setNewUser(username) {
		const user = { username: username, translations: [] };
		const headers = {
			headers: {
				"X-API-Key": apiKey,
				"Content-Type": "application/json",
			}
		};
		return await axios
			.post(`${apiURL}/translations?username=${username}`, user, headers)
			.then((response) => response.data)
			.catch((error) => console.log(error.response));
	},

	//PATCH: update user translations in DB
	async updateTranslations(userId, translationsArray) {
		const headers = {
			headers: {
				"X-API-Key": apiKey,
				"Content-Type": "application/json",
			}
		};
		return await axios
			.patch(`${apiURL}/translations/${userId}`, translationsArray, headers)
			.then((response) => response.data)
			.catch((error) => console.log(error.response));
	},
};
export default TranslationsAPI