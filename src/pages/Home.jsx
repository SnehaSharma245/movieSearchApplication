import React from "react";
import SearchForm from "../Components/SearchForm";
import MovieList from "../Components/MovieList";
import { apiKey } from "../constants";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
export async function loader({ request }) {
	// throw new Error("Big fat error")
	const url = new URL(request.url);
	const searchTerm = url.searchParams.get("search") || "conjuring";
	// console.log(searchTerm)
	// return null
	try {
		const movieSearchEndpoint = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
		const response = await axios.get(movieSearchEndpoint);
		return {
			movieApiResponse: response.data,
			searchTerm,
			isError: false,
			error: "",
		};
	} catch (error) {
		const errorMessage =
			error?.response?.data?.Error ||
			error.message ||
			"something went wrong";
		return {
			movieApiResponse: null,
			searchTerm,
			isError: true,
			error: errorMessage,
		};
	}
}
function Home() {
	const data = useLoaderData();
	return (
		<div>
			<SearchForm searchTerm={data.searchTerm} />
			<MovieList data={data} />
		</div>
	);
}

export default Home;
