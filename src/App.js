import "leaflet/dist/leaflet.css";
import { useState } from "react";
import "./App.scss";

import MapComponent from "./Components/MapComponent";
import Result from "./Components/Result";
import Search from "./Components/Search";

function App() {
	const [data, setData] = useState(null);

	const [position, setPosition] = useState([0, 0]);

	return (
		<main className="App">
			<div className="top-part">
				<Search setData={setData} setPosition={setPosition} />
				<Result data={data} />
			</div>
			<MapComponent position={position} />
		</main>
	);
}

export default App;
