import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from "./requests";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="app">
            <Navbar />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
                largePic={true}
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Western Movies" fetchUrl={requests.fetchWesternMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
