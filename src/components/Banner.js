import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import requests from "../requests";

import styles from './Banner.module.css'

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

    function truncateString(str, num) {
        if (str?.length <= num) {
          return str
        }
        return str?.slice(0, num) + '...'
      }

	return (
		<header
			className={styles.banner}
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(
                    https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
                    )`,
				backgroundPosition: "center center",
			}}
		>
			<div className={styles.banner__contents}>
				<h1 className={styles.banner__title}>{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className={styles.banner__buttons}>
					<button className={styles.banner__button}>Play</button>
					<button className={styles.banner__button}>My List</button>
				</div>
                <h1 className={styles.banner__description}>
                    {truncateString(movie?.overview,150)}
                </h1>
			</div>
                <div className={styles.banner__fadeBottom} />
		</header>
	);
}

export default Banner;
