export const portfolioData = [
  {
    id: 1,
    name: 'Api de Citations',
    languages: ['javascript','css'],
    languagesIcons: ['fab fa-js','fab fa-css3-alt'],
    source: 'https://github.com/ChougarAbdelhadi/CitationApi',
    info: "Une api qui récupère une citation au hasard et applique un background au hasard également à chaque fois qu'on réinitialise la page. les citations et les images sont récupérées avec la méthode fetch sur une base de données en ligne /fetch('https://api.quotable.io/random')/ le site est hébergé sur github.io",
    picture: './media/citationApi.JPG'
  },
  {
    id: 2,
    name: 'Date JS',
    languages: ['javascript','css'],
    languagesIcons:['fab fa-js','fab fa-css3-alt'],
    source: 'https://chougarabdelhadi.github.io/DateJS/',
    info: "Manipuler les dates en JS avec une app qui calcule le nombre de nuiter et le prix final d'un séjour en respectant les contraintes telles que si une date est sélectionnée alors notre code ne nous permet pas de sélectionner une date inférieure à cette dernière où que cette date là ne peut être inférieur à d'aujourd'hui. /le site est hébergé sur github.io",
    picture: './media/DateJS.JPG'
  },
  {
    id: 3,
    name: 'Popup&Navbar',
    languages: ['javascript','css'],
    languagesIcons:['fab fa-js','fab fa-css3-alt'],
    source: 'https://chougarabdelhadi.github.io/Popup/',
    info: "Une navbar dynamique qui change de taille selon le scroll, pour cela on ajoute des addEventListener à chaque changement lors du scroll, en implémente des animations smoth au scroll  et à nos images et on a une partie pop-up également qui s'affiche lorsque scroll a un certain point qu'on peut fermer avec un jeu de transition.",
    picture: './media/navbar&popup.JPG'
  },
  {
    id: 4,
    name: 'Mes Recettes',
    languages: ['javascript','css'],
    languagesIcons: ['fab fa-js','fab fa-css3-alt'],
    source: 'https://chougarabdelhadi.github.io/Cooking/',
    info: "Une api qui récupère recettes de cuisine avec des liens youtube pour chaqu'une d'elle. les recettes sont récupérées avec la méthode fetch sur une base de données en ligne. le site est hébergé sur github.io. Voir github https://github.com/ChougarAbdelhadi/Cooking",
    picture: './media/Recettes.JPG'
  },
  {
    id: 5,
    name: 'ToDo list',
    languages: ['javascript','css'],
    languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
    source: 'https://chougarabdelhadi.github.io/TodoList/',
    info: "ToDo liste réalisé avec JS et CSS voir le code source sur github 'https://github.com/ChougarAbdelhadi/TodoList'",
    picture: './media/ToDo_List.JPG'
  },
  {
    id: 6,
    name: 'maquette portfolio',
    languages: ['javascript', 'css'],
    languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
    source: 'https://github.com/ChougarAbdelhadi/Portfolio/settings/pages',
    info: "exemple simple de la structure d'un portfolio, pour vous montrer comment vous pourriez commencer à en créer un en utilisant HTML, CSS et JavaScript.",
    picture: './media/portfolio.JPG'
  },
  {
    id: 7,
    name: 'Les pays du monde',
    languages: ['react'],
    languagesIcons: ['fab fa-react'],
    source: 'https://chougar-countries-react-app.netlify.app/',
    info: "Une application qui nous permet de parcourir les principes de react. On effectue une requête a une api 'Countries' via axios. On renvoie les pays du monde avec un filtre selon le nombre de pays souhaités à afficher ou par continent, avec des fonctionnalités js et effets Css pour l'affichage du nom, de la capitale et la population de chaque pays.  Api sur github: https://github.com/ChougarAbdelhadi/ReactCountries",
    picture: './media/countries.JPG'
  },
  {
    id: 8,
    name: 'Portfolio Dev Web.',
    languages: ['react'],
    languagesIcons: ['fab fa-react'],
    source: '???',
    info: "Bienvenue dans mon portfolio. Ce portfolio met en lumière une sélection de mes projets dans le domaine du développement front et back. Ce dernier témoigne également de ma progression en tant que développeur web. Chaque projet m'a permis de perfectionner mes compétences techniques et compréhension des langages tels que HTML, CSS, JavaScript, ainsi que des frameworks populaires tels que React et laravel/symfony. Je suis constamment à la recherche de relever de nouveaux défis et de nouvelles technologies pour m'améliorer en tant que professionnel. Si vous avez des questions, des commentaires ou si vous souhaitez discuter, n'hésitez pas à me contacter. Je suis ouvert aux nouvelles opportunités passionnantes ! \nMerci d'avoir pris le temps de parcourir mon portfolio.",
    picture: './media/portfolioReact.JPG'
  },
  {
    id: 9,
    name: 'Blog Laravel',
    languages: ['php'],
    languagesIcons: ['fab fa-php', 'fab fa-laravel'],
    source: 'https://github.com/ChougarAbdelhadi/Portfolio/settings/pages',
    info: "Front-end : HTML5, CSS et Bootstrap. Back-End 'Framework Laravel(PHP)' : routing, Authentifaction, implémenter un CRUD, mapping Base de données et templates, validations de formulaire ... Base de données / Outil : MySQL et Git.",
    picture: './media/page_garde.JPG'
  },
  {
    id: 10,
    name: 'Agence immo Sf',
    languages: ['php'],
    languagesIcons: ['fab fa-php', 'fab fa-symfony fa-lg'],
    source: 'https://github.com/ChougarAbdelhadi/Portfolio/settings/pages',
    info: "Front-end : HTML5, CSS et Bootstrap. Back-End 'Framework Symfony(PHP)' : routing, Authentifaction, implémenter un CRUD, mapping Base de données et templates, validations de formulaire ... Base de données / Outil : MySQL et Git.",
    picture: './media/symfony.JPG'
  },
]