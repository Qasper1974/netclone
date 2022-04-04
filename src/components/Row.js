import axios from "axios";
import React, { useEffect, useState } from "react";
import instance from "../axios";
import styles from "./Row.module.css";

const baseUrlForPic = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await instance.get(props.fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [props.fetchUrl]);

	return (
		<div className={styles.row}>
			<h2>{props.title}</h2>
			<div className={styles.row__posters}>
				{movies.map((movie) => (
					 (movie.poster_path) && (movie.backdrop_path) && <img
                    	/* add key to optimize performance */
						key={movie.id}
						className={`${styles.row__poster} ${props.largePic && styles.row__poster__large}`}
						src={`${baseUrlForPic}${props.largePic ? movie.poster_path : movie.backdrop_path}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Row;
