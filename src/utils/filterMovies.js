// Quita mayúsculas y tildes para que "parasitos" encuentre "Parásitos".
const normalize = (text) =>
  text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// Combina buscador y filtros encadenando filter().
export function filterMovies(movies, query, filters, favorites) {
  const search = normalize(query.trim());

  return movies
    .filter((movie) => normalize(movie.title).includes(search))
    .filter((movie) => filters.genre === "all" || movie.genre === filters.genre)
    .filter((movie) => filters.year === "all" || movie.year === Number(filters.year))
    .filter((movie) => movie.rating >= filters.minRating)
    .filter((movie) => !filters.onlyFavorites || favorites.includes(movie.id));
}
