import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import requests from "../requests";

const baseUrlForPic = "https://image.tmdb.org/t/p/original/";


function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function FetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]
			);
			return request;
		}
		FetchData();
	}, []);
	console.log(movie);
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
                backgroundImage: `url(
                    https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
                    )`,
                backgroundPosition: 'center center'
			}}
		>
			<div className="banner__contents">
				<h1>{movie?.title || movie?.name || movie?.original_name}</h1>
			</div>
			<img src={movie.backdrop_path} />
		</header>
	);
}

export default Banner;
