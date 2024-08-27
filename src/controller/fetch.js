const getSearch = (req, res) => {
	console.log(req.query.name);
	fetch(
		"https://api.rawg.io/api/games?key=" +
			process.env.API_KEY +
			"&search=" +
			req.query.name +
			"&dates=2024-01-01,2024-09-01"
	)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data.results)
			res.json(data.results);
		})
		.catch((error) => {
			console.log(error);
		});
};

export { getSearch };
