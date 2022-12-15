import { useState } from "react";

export default function Search() {
	// const search = async () => {
	// 	const respons = await axios.get(
	// 		`https://geo.ipify.org/api/v2/country,city?apiKey=at_Np7ew5wGSQdfdRxr1fCsqnlbWFwh5&ipAddress=${IP}`
	// 	);
	// 	const Data: Data = await respons.data;
	// };

	const [search, setSearch] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		console.log(search);
	}
	return (
		<>
			<section id="search-section">
				<h2>IP Address Tracker</h2>
				<form className="search-form" onSubmit={handleSubmit}>
					<input
						placeholder="Search for any IP address or domain"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
							<path
								fill="none"
								stroke="#FFF"
								strokeWidth="3"
								d="M2 1l6 6-6 6"
							/>
						</svg>
					</button>
				</form>
			</section>
		</>
	);
}
