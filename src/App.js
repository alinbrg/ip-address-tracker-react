import "leaflet/dist/leaflet.css";
import "./App.scss";

import MapComponent from "./Components/MapComponent";
import Result from "./Components/Result";
import Search from "./Components/Search";

function App() {
	const position = [42.2546647, 42.6829771];

	return (
		<main className="App">
			<div className="top-part">
				<Search />
				<Result />
			</div>
			<MapComponent position={position} />
		</main>
	);
}

export default App;
