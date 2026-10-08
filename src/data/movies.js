// Los pósters son imágenes de relleno. Puedes reemplazarlos por la URL real de cada póster.
const poster = (title) =>
  `https://placehold.co/400x600/2a2540/f1ece2?text=${encodeURIComponent(title)}`;

const movies = [
  {
    id: 1,
    title: "Interestelar",
    genre: "Ciencia ficción",
    year: 2014,
    rating: 8.7,
    image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    description:
      "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
  },
  {
    id: 2,
    title: "El Padrino",
    genre: "Drama",
    year: 1972,
    rating: 9.2,
    image: "https://m.media-amazon.com/images/M/MV5BZmNiNzM4MTctODI5YS00MzczLWE2MzktNzY4YmNjYjA5YmY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "El patriarca de una familia mafiosa transfiere el control de su imperio a su hijo más reacio.",
  },
  {
    id: 3,
    title: "Parásitos",
    genre: "Thriller",
    year: 2019,
    rating: 8.5,
    image: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Una familia sin recursos se infiltra poco a poco en la vida de una familia adinerada, con consecuencias inesperadas.",
  },
  {
    id: 4,
    title: "Spider-Man: Un nuevo universo",
    genre: "Animación",
    year: 2018,
    rating: 8.4,
    image: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
    description:
      "Miles Morales descubre que no es el único Spider-Man cuando varias dimensiones colisionan en su ciudad.",
  },
  {
    id: 5,
    title: "Mad Max: Furia en el camino",
    genre: "Acción",
    year: 2015,
    rating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "En un desierto postapocalíptico, una guerrera y un vagabundo huyen de un tirano a toda velocidad.",
  },
  {
    id: 6,
    title: "El viaje de Chihiro",
    genre: "Fantasía",
    year: 2001,
    rating: 8.6,
    image: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Una niña queda atrapada en un mundo de espíritus y debe trabajar en una casa de baños para salvar a sus padres.",
  },
  {
    id: 7,
    title: "Pulp Fiction",
    genre: "Crimen",
    year: 1994,
    rating: 8.9,
    image: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Varias historias de criminales de Los Ángeles se cruzan en una narración no lineal llena de humor negro.",
  },
  {
    id: 8,
    title: "Cuestión de tiempo",
    genre: "Romance",
    year: 2013,
    rating: 7.8,
    image: "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_FMjpg_UX1000_.jpg",
    description:
      "Un joven descubre que puede viajar al pasado y lo usa para mejorar su vida amorosa, sin prever el costo.",
  },
  {
    id: 9,
    title: "Todo en todas partes al mismo tiempo",
    genre: "Ciencia ficción",
    year: 2022,
    rating: 7.8,
    image: "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Una dueña de lavandería salta entre universos paralelos para enfrentar una amenaza que lo abarca todo.",
  },
  {
    id: 10,
    title: "Get Out",
    genre: "Terror",
    year: 2017,
    rating: 7.8,
    image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_FMjpg_UX1000_.jpg",
    description:
      "Un fotógrafo visita a la familia de su novia y descubre un secreto inquietante detrás de su amabilidad.",
  },
  {
    id: 11,
    title: "La La Land",
    genre: "Musical",
    year: 2016,
    rating: 8.0,
    image: "https://m.media-amazon.com/images/M/MV5BMDllYjliOTUtMDJjZC00ODIzLWJmNGMtOWI2NzQxMjA2NzdlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Una aspirante a actriz y un pianista de jazz persiguen sus sueños en Los Ángeles y entre ellos.",
  },
  {
    id: 12,
    title: "Superbad",
    genre: "Comedia",
    year: 2007,
    rating: 7.6,
    image: "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Dos amigos a punto de graduarse intentan conseguir alcohol para una fiesta y vivir una noche inolvidable.",
  },
];

export default movies;
