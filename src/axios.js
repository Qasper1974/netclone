import axios from "axios";

//base url from where we make requests

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default instance;
