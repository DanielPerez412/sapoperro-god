const MIN_RATINGS = [0, 6, 7, 8, 9];

export default function Filters({ movies, filters, onChange, resultCount }) {
  const genres = [...new Set(movies.map((movie) => movie.genre))].sort((a, b) =>
    a.localeCompare(b, "es")
  );
  const years = [...new Set(movies.map((movie) => movie.year))].sort((a, b) => b - a);

  const update = (field, value) => onChange({ ...filters, [field]: value });

  return (
    <div className="filters" role="group" aria-label="Filtros">
      <label className="field">
        Género
        <select value={filters.genre} onChange={(e) => update("genre", e.target.value)}>
          <option value="all">Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        Año
        <select value={filters.year} onChange={(e) => update("year", e.target.value)}>
          <option value="all">Todos</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        Calificación mínima
        <select
          value={filters.minRating}
          onChange={(e) => update("minRating", Number(e.target.value))}
        >
          {MIN_RATINGS.map((rating) => (
            <option key={rating} value={rating}>
              {rating === 0 ? "Cualquiera" : `${rating}+`}
            </option>
          ))}
        </select>
      </label>

      <label className="check">
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={(e) => update("onlyFavorites", e.target.checked)}
        />
        Solo favoritas
      </label>

      <p className="filters__count" aria-live="polite">
        {resultCount} {resultCount === 1 ? "película" : "películas"}
      </p>
    </div>
  );
}
