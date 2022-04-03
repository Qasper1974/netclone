import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

function App() {
	return (
		<div className="App">
			<h1>START</h1>
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
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
