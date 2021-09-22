import axios from "axios";

const apiURL = 'https://noroff-assignment-api-lit.herokuapp.com'
const apiKey = "ByvuHqRoCVXC9G9Z06xa3ec9rDXYgZyJZRDXJ9k3arjVxy2AuUXX6c34Z2dgnlx2";

const TranslationsAPI = {
	
     async getUsername(username) {
       return await axios.get(`${apiURL}/translations?username=${username}`).then(response => 
            response.data
        )
    },
	async fetchTranslations(username) {
		fetch(`${apiURL}/translations?username=${username}`)
			.then((response) => response.json())
			.then((results) => {
				// results will be an array of users that match the username of argument.
				console.log("fetchTranslations: " + results);
			})
			.catch((error) => {});
	},
	async setNewUser(username) {
		fetch(`${apiURL}/translations`, {
			method: "POST",
			headers: {
				"X-API-Key": apiKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				translations: [],
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Could not create new user");
				}
				return response.json();
			})
			.then((newUser) => {
				// newUser is the new user with an id
				console.log("New User: " + newUser);
			})
			.catch((error) => {});
	},
	async updateTranslations(userId) {
		fetch(`${apiURL}/translations/${userId}`, {
			method: "PATCH", // NB: Set method to PATCH
			headers: {
				"X-API-Key": apiKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// Provide new translations to add to user with id 1
				translations: ["easy", "i love javascript"],
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Could not update translations history");
				}
				return response.json();
			})
			.then((updatedUser) => {
				// updatedUser is the user with the Patched data
			})
			.catch((error) => {});
	},
};
export default TranslationsAPI