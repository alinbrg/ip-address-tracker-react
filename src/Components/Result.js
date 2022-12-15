export default function Result({ data }) {
	// console.log(data);
	return (
		<>
			{data &&
				(data.ip ? (
					<section id="result-section">
						<div>
							<h4>IP address</h4>
							<h2>{data.ip}</h2>
						</div>
						<div>
							<h4>location</h4>
							<h2>
								{data?.location?.city}, {data?.location?.country}
							</h2>
						</div>
						<div>
							<h4>timezone</h4>
							<h2>{data?.location?.timezone}</h2>
						</div>
						<div>
							<h4>isp</h4>
							<h2>{data?.isp}</h2>
						</div>
					</section>
				) : (
					<section id="result-section" className="no-result">
						<h3>{data.messages ? data.messages : "NO RESULT"}</h3>
					</section>
				))}
		</>
	);
}
