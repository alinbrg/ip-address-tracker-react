import { useEffect, useState } from "react";

export default function Search({ setData, setPosition }) {
	const [search, setSearch] = useState("");
	function getResults(url) {
		fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&${url}`
		)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setData(data);
				data.location && setPosition([data.location.lat, data.location.lng]);
			});
	}

	function handleSubmit(e) {
		e.preventDefault();
		const regExp = /[a-zA-Z]/g;
		const url = regExp.test(search)
			? `domain=${search}`
			: `ipAddress=${search}`;

		getResults(url);
	}

	useEffect(() => {
		getResults("");
	}, []);

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
