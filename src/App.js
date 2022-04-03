import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

function App() {
	return (
		<div className="App">
			<h1>START</h1>
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
		</div>
	);
}

export default App;
