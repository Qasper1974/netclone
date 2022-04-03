const API_KEY = '1d0dbafcbacb283733298461d9bc49b8';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchHistoryMovies: `/discover/tv?api_key=${API_KEY}&with_genres=36`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchWesternMovies: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
