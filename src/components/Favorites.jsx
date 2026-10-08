export default function Favorites({ movies, onSelect, onRemove }) {
  return (
    <aside className="favorites" aria-label="Mis favoritas">
      <h2 className="favorites__title">Mis favoritas ({movies.length})</h2>

      {movies.length === 0 ? (
        <p className="favorites__empty">Pulsa el corazón de una película para guardarla aquí.</p>
      ) : (
        <ul className="favorites__list">
          {movies.map((movie) => (
            <li key={movie.id} className="favorites__item">
              <button className="favorites__open" type="button" onClick={() => onSelect(movie.id)}>
                <img referrerPolicy="no-referrer" src={movie.image} alt="" />
                <span>
                  {movie.title}
                  <small>{movie.year}</small>
                </span>
              </button>
              <button
                className="favorites__remove"
                type="button"
                aria-label={`Quitar ${movie.title} de favoritos`}
                onClick={() => onRemove(movie.id)}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
