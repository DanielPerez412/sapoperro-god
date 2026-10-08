import { useState } from "react";
import movies from "./data/movies";
import { filterMovies } from "./utils/filterMovies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";

const INITIAL_FILTERS = {
  genre: "all",
  year: "all",
  minRating: 0,
  onlyFavorites: false,
};

export default function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [favorites, setFavorites] = useState([]); // solo IDs
  const [ratings, setRatings] = useState({}); // { [id]: 1..5 }
  const [selectedId, setSelectedId] = useState(null);

  const visibleMovies = filterMovies(movies, query, filters, favorites);
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));
  const selectedMovie = movies.find((movie) => movie.id === selectedId);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Volver a pulsar la misma estrella quita la valoración.
  const rateMovie = (id, stars) => {
    setRatings((prev) => {
      if (prev[id] === stars) {
        const { [id]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: stars };
    });
  };

  const resetSearch = () => {
    setQuery("");
    setFilters(INITIAL_FILTERS);
  };

  return (
    <>
      <Header query={query} onQueryChange={setQuery} />

      <main className="layout">
        <section className="catalog" aria-label="Catálogo">
          <Filters
            movies={movies}
            filters={filters}
            onChange={setFilters}
            resultCount={visibleMovies.length}
          />
          <MovieList
            movies={visibleMovies}
            favorites={favorites}
            ratings={ratings}
            onSelect={setSelectedId}
            onToggleFavorite={toggleFavorite}
            onReset={resetSearch}
          />
        </section>

        <Favorites
          movies={favoriteMovies}
          onSelect={setSelectedId}
          onRemove={toggleFavorite}
        />
      </main>

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          userRating={ratings[selectedMovie.id] ?? 0}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
