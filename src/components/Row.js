import axios from "axios";
import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import instance from "../axios";
import styles from "./Row.module.css";

const baseUrlForPic = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	useEffect(() => {
		async function fetchData() {
			const request = await instance.get(props.fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [props.fetchUrl]);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
            // console.log(movie?.title || movie?.name || movie?.original_name || '')
			movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
				.then(url => {
                    //to search for corresponding url
                    const urlParams = new URLSearchParams(new URL(url).search);
                    //to extract only last part equalling 'v'
                   setTrailerUrl(urlParams.get('v'));
                })
				.catch(error => console.log(error));
		}
	};
	return (
		<div className={styles.row}>
			<h2 className={styles.row__title}>{props.title}</h2>
			<div className={styles.row__posters}>
				{movies.map(
					(movie) =>
						movie.poster_path &&
						movie.backdrop_path && (
							<img
								/* add key to optimize performance */
								key={movie.id}
								onClick={() => {
									handleClick(movie);
								}}
								className={`${styles.row__poster} ${
									props.largePic && styles.row__poster__large
								}`}
								src={`${baseUrlForPic}${
									props.largePic ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</div>
            {console.log(trailerUrl)}
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                            
		</div>
	);
};

export default Row;
