import axios from "axios";
import tokens from "./tokens.service";

const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_SERVER_URI,
	headers: {
		"Content-Type": "application/json",
	},
});

instance.interceptors.request.use(
	(config) => {
		const token = tokens.getToken();
		if (token) {
			config.headers["Authorization"] = "Bearer " + token;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default instance;
