# Test Star Wars

Le but de ce test est de créer une application React qui permet d'afficher des informations sur les personnages de Star Wars.  
Cette application aura un header, une zone de recherche, une liste de personnages ainsi que des boutons qui permettent d'afficher la page suivante et la page précédente.

Prérequis, avoir node 18+ installé sur sa machine

## 1. Installer le projet

- Cloner le répertoire
- Installer les packages node avec `npm install`
- Démarrer le projet avec `npm run dev`
- Créer une nouvelle branche nommée `<date(au format aaaa/mm/jj)>-<nom>-<prenom>`
- Faire un checkout vers cette branche avant de développer

## 2. Les fonctionnalités

L'application possèdera 3 fonctionnalités :

- Une liste de personnages
- Un champs de recherche afin de rechercher un personnage par son nom
- Des boutons de navigation qui permettent d'afficher les personnages suivants ou précédents

### 2.1 La liste de personnages

Pour afficher la liste de personnages, on s'appuie sur l'API publique https://swapi.dev/ et notamment sur le endpoint https://swapi.dev/api/people/.

Un loader est affiché le temps de récupérer la donnée de l'API.

### 2.2 Le champs de recherche

Composé d'un input et d'un bouton de recherche.

Au clique sur le bouton, on lance une recherche avec la valeur de l'input, en s'appuyant sur l'endpoint https://swapi.dev/api/people/?search=keyword (en remplaçant "keyword" par la valeur de l'input)

### 2.3 Les boutons de navigation

https://swapi.dev/api/people/ retourne entre autre, des valeurs `next` et `previous`. Il faudra s'appuyer dessus afin de faire le bon appel pour afficher les personnages suivants ou précédents.

Le bouton "Précédent" doit être masqué si `previous` vaut `null`, idem pour "Suivant" avec `next`

## 3. Ce qui est attendu

- L'intégration doit respecter la maquette fournie. Il s'agit d'une simple image, nous n'attendons donc pas de pixel perfect, ni d'avoir l'hexadécimale exacte pour les couleurs.
- Un maximum de commits sera le bienvenu afin de voir les étapes de développement.
- Un maximum de commentaires sera également apprécié afin d'expliquer le code.
- L'app peut être développée en JavaScript ou en TypeScript (TypeScript est préférable 😉)
- Les images utilisées dans la maquettes sont
  - icon : https://www.svgrepo.com/show/322152/death-star.svg
  - logo : https://static.wikia.nocookie.net/logopedia/images/2/25/Star_Wars.svg
  - loupe du bouton de recherche : https://www.svgrepo.com/show/13652/magnifying-glass.svg
  - loader : https://samherbert.net/svg-loaders/svg-loaders/ball-triangle.svg
- Créer des nouveaux composants React quand c'est nécessaire et bien les nommer.
- Utiliser des hooks.
- La méthode pour gérer le style est libre.
- La méthode pour faire les calls API est libre.
- Il est possible d'installer des packages node si besoin, sans en abuser 🙂
- La typographie utilisée est Nunito (disponible ici : https://fonts.google.com/specimen/Nunito)
