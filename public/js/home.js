const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
	fetch("https://api.rawg.io/api/games?key=" +
			process.env.API_KEY +
			"&search=" + e.target.value )
	// fetch("/search?name=" + e.target.value)
		.then((response) => response.json())
		.then((data) => {
			const ctn = document.getElementById("results");
			ctn.innerHTML = "";
			data.forEach((game) => {
				const article = document.createElement("article");
				const title   = document.createElement("p");
				const release = document.createElement("p");
				const rating  = document.createElement("p");
                const divider = document.createElement("hr");

                title.textContent = game.name;
                release.textContent = "Released : " + new Date(game.released).toLocaleDateString();
                rating.textContent = "Rating : " + game.rating;
                console.log(title)
                article.append(title, release, rating);
				ctn.append(article, divider);
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

