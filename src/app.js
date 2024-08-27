import "dotenv/config";
import express from "express";
import path from "path";

import router from "./router/index.routes.js";

// process est un objet global de Node.js qui permet d'accéder à des informations sur le processus en cours, notamment sur l'environnement de l'application
// c'est là dedans que sont stockées les variables d'environnement définies dans le fichier .env
const PORT = process.env.LOCAL_PORT;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

// fichier static (css, js, img) chacun sa route, chacun son chemin 
// utile pour la maintenabilité du code et ajouter des middlewares par la suite pour améliorer les performances
app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/js", express.static(path.join(process.cwd(), "public/js")));
app.use("/img", express.static(path.join(process.cwd(), "public/img")));
// middleware pour le body-parser (req.body) pour récupérer les données des formulaires
app.use(express.urlencoded({ extended: false }));

// middleware pour ajouter des variables globales à toutes les vues
// locals est un objet d'express qui permet de stocker des variables et les utiliser dans les vues sans avoir à les passer en paramètre de la méthode render (ici voir le fichier header.ejs) 
app.use((req, res, next) => {
    res.locals.isActive = (route) => req.path === route ? "active" : "";
    // c'est un middleware custom donc il faut appeler next() pour passer au middleware suivant dans la pile de middlewares, ici le prochain est le middleware de la route ligne 32
    next(); 
});

app.use(router); // middleware de la route (router/index.routes.js)

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
