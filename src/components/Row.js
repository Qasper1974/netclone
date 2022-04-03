import axios from 'axios';
import React, { useEffect, useState } from 'react';
import instance from '../axios';
import styles from './Row.module.css';

const baseUrlForPic = 'https://image.tmdb.org/t/p/original/'

const Row = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await instance.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[props.fetchUrl])
    console.table(movies);

    return (
        <div className={styles.row}>
            <h2>{props.title}</h2>
            <div className={styles.row__posters}>
                {movies.map(
                movie => (
                    <img 
                    className={styles.row__poster}
                    src={`${baseUrlForPic}${movie.poster_path}`} alt={movie.name} />
                )
            )}</div>
        </div>
    );
};

export default Row;