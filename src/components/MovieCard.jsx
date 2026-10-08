export default function MovieCard({
  movie,
  isFavorite,
  userRating,
  onSelect,
  onToggleFavorite,
}) {
  return (
    <article className="card">
      <button
        className="card__open"
        type="button"
        onClick={() => onSelect(movie.id)}
        aria-label={`Ver detalle de ${movie.title}`}
      >
        <img referrerPolicy="no-referrer" className="card__poster" src={movie.image} alt={`Póster de ${movie.title}`} />
        <div className="card__body">
          <h2 className="card__title">{movie.title}</h2>
          <p className="card__meta">
            {movie.genre}, {movie.year}
          </p>
          <p className="card__rating">
            <span className="star on">★</span> {movie.rating.toFixed(1)}
            {userRating > 0 && <span className="card__mine">Tu nota: {userRating}/5</span>}
          </p>
          <p className="card__desc">{movie.description}</p>
        </div>
      </button>

      <button
        className={`fav ${isFavorite ? "fav--on" : ""}`}
        type="button"
        aria-pressed={isFavorite}
        aria-label={
          isFavorite
            ? `Quitar ${movie.title} de favoritos`
            : `Agregar ${movie.title} a favoritos`
        }
        onClick={() => onToggleFavorite(movie.id)}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
    </article>
  );
}
