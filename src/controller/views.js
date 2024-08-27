
// utilisation de template pour éviter la répétition de code
// le fichier template.ejs est le squelette de base de toutes les vues
// il contient le header et le footer de chaque page
// <%- include("partial/header") %>
// <%- include(template) %>
// <%- include("partial/footer") %>   

// dans la méthode render, au lien d'envoyer le fichier home.ejs (par exemple), on envoie le fichier template.ejs
// ce fichier va inclure (comme un composant react) le fichier home.ejs grace à la variable 'template: "home",'
// et à la méthode <%- include(template) %> dans le fichier template.ejs
// on peut également inclure directement un fichier html comme le header et le footer avec (include)

const home_view = (req, res) => {
	fetch(
		"https://api.rawg.io/api/games?key=" +
			process.env.API_KEY +
			"&dates=2024-01-01,2024-09-01"
	)
		.then((response) => response.json())
		.then((data) => {
			res.render("template", {
				template: "home",
				games: data.results,
			});
		})
		.catch((err) => {
			console.log(err);
			res.render("template", {
				template: "not-found",
			});
		});
}

const login_view = (req, res) => {
	res.render("template", { template: "auth/login" });
}

const register_view =  (req, res) => {
	res.render("template", { template: "auth/register" });
}

const not_found_view =  (req, res) => {
	res.render("template", { template: "not-found" });
}

export { home_view, login_view, register_view, not_found_view };