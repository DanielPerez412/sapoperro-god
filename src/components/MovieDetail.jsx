import { useEffect } from "react";
import StarRating from "./StarRating";

export default function MovieDetail({
  movie,
  isFavorite,
  userRating,
  onToggleFavorite,
  onRate,
  onClose,
}) {
  // Cerrar con la tecla Escape.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="detail__close" type="button" onClick={onClose} aria-label="Cerrar detalle">
          ×
        </button>

        <img referrerPolicy="no-referrer" className="detail__poster" src={movie.image} alt={`Póster de ${movie.title}`} />

        <div className="detail__info">
          <h2 id="detail-title">{movie.title}</h2>
          <p className="card__meta">
            {movie.genre}, {movie.year}
          </p>
          <p className="card__rating">
            <span className="star on">★</span> {movie.rating.toFixed(1)} de calificación general
          </p>
          <p className="detail__desc">{movie.description}</p>

          <div className="detail__rate">
            <p>{userRating > 0 ? `Tu valoración: ${userRating}/5` : "Aún no la has valorado"}</p>
            <StarRating value={userRating} onRate={(stars) => onRate(movie.id, stars)} />
          </div>

          <button
            className={`btn ${isFavorite ? "btn--on" : ""}`}
            type="button"
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(movie.id)}
          >
            {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
}
