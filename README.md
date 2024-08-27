# FINAL NODE

Création d'une Application Web de "insert what you want to do !!!"

## Objectif

Créer une application web avec les sujets abordés tout au long de ce module.

Utiliser les dépendances suivantes:

- express
- EJS
- nodemon
- dotenv (bonus) pour y stocker la clé API
- jsonfile (bonus) pour lire et écrire dans un fichier JSON
- bcrypt (bonus) pour hacher le mot de passe

## Fonctionnalités

L'application permettra aux utilisateurs

- consulter une liste de "produits"
  - effectuer une recherche sur cette liste ou sur l'API
  - ajouter des produits à leur compte (bonus)
- créer un compte
- se connecter
  - gérer son compte (bonus)

### Requis

- Type Module (ESM)
- Express
  - Configurer un serveur Express.
  - Utiliser l'objet Router pour gérer les routes.

- EJS
  - Utiliser EJS pour les vues.
  - Créer des vues pour les pages d'accueil, connexion, création de compte, gestion de compte.

- Formulaires
  - Créer un formulaire de connexion.
  - Créer un formulaire de création de compte.

- Dotenv
  - Utiliser le fichier .env pour stocker les variables d'environnement, comme la clé API.

- Fetch vers une API Externe
  - Récupérer des données depuis une API externe (par exemple, l'API RAWG pour les jeux vidéo).

- Gestion des Comptes Utilisateurs
  - Stocker les informations des utilisateurs dans un fichier JSON en utilisant le module jsonfile.
  - Permettre aux utilisateurs de créer un compte et de se connecter.

## Étapes de Réalisation

### Initialiser le projet

Créez un nouveau projet Node.js et configurez-le pour utiliser les modules ES, et les commandes de script.
Installez les dépendances nécessaires : nodemon, express, ejs, *dotenv, jsonfile, bcrypt*.

### Configuration du Serveur Express

Créez un fichier app.js pour configurer le serveur Express.
Configurez les routes de base en utilisant l'objet Router.

### Configuration des Vues avec EJS

Configurez Express pour utiliser EJS comme moteur de template.
Créez des vues pour les pages d'accueil, connexion, création de compte...

### Fetch vers une API Externe

Utilisez fetch pour récupérer des données depuis l'API choisie.
Affichez les données récupérées dans une vue EJS.
Manipulez ces données. (filtre, tri ...).

Tips:
Le fetch s'effectue dans un fichier javascript, comme en natif (appel dans le document HTML), c'est un fichier `static`

## BONUS

### Utilisation de Dotenv

Créez un fichier .env pour stocker la clé API et d'autres variables d'environnement.
Chargez les variables d'environnement dans votre application.

### Formulaires de Connexion et de Création de Compte

Configurez Express pour pouvoir manipuler les données des formulaires.
Créez des formulaires HTML pour la connexion et la création de compte.
Gérez les soumissions de formulaires.

#### Gestion des Comptes Utilisateurs avec JSON

Implémentez la logique pour créer un compte et se connecter.
Hachez le mot de passe avec `bcrypt`.
Utilisez le module jsonfile pour lire et écrire les informations des utilisateurs dans un fichier JSON.

## Exemple de Structure de Projet

```txt
/game-list
|
├── /public
│       └── /css
│          └── styles.css
├── /src
|   ├── app.js
│   ├── /views
│   │   ├── login.ejs
│   │   ├── register.ejs
│   │   ├── home.ejs
│   │   └── template.ejs
│   │
│   ├── /routes
│   │   └── index.routes.js
│   │
│   └── users.json
│
├── .gitignore
├── .env
└── package.json
```

## Instructions

1. Initialisez votre projet en suivant les étapes ci-dessus.
2. N'allez pas trop loin, fixez-vous un objectif atteignable puis avancez doucement.
3. Testez votre application pour vous assurer que toutes les fonctionnalités fonctionnent correctement.
4. Testez à nouveau !

HAVE FUN
