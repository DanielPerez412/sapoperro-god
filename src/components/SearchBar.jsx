// Input controlado: el valor vive en App y se actualiza en cada tecla.
export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Buscar por título"
      aria-label="Buscar películas por título"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
