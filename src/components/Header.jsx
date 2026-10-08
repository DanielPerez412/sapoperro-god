import SearchBar from "./SearchBar";

export default function Header({ query, onQueryChange }) {
  return (
    <header className="header">
      <h1 className="header__title">Cartelera</h1>
      <SearchBar value={query} onChange={onQueryChange} />
    </header>
  );
}
