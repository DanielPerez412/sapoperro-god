import MovieCard from "./MovieCard";

export default function MovieList({
  movies,
  favorites,
  ratings,
  onSelect,
  onToggleFavorite,
  onReset,
}) {
  if (movies.length === 0) {
    return (
      <div className="empty">
        <p className="empty__title">No encontramos películas con esos criterios.</p>
        <p>Prueba con otro título o quita algún filtro.</p>
        <button className="btn" type="button" onClick={onReset}>
          Limpiar búsqueda y filtros
        </button>
      </div>
    );
  }

  return (
    <ul className="grid">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard
            movie={movie}
            isFavorite={favorites.includes(movie.id)}
            userRating={ratings[movie.id] ?? 0}
            onSelect={onSelect}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
