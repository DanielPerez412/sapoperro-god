# Cartelera: catálogo interactivo de películas

Aplicación web hecha con React y Vite, sin backend. Permite explorar un catálogo de películas, buscar por título, filtrar, ver el detalle, guardar favoritas y valorarlas de 1 a 5 estrellas.

## Cómo ejecutarlo

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

Para generar la versión de producción: `npm run build`.

## Funcionalidades

- Catálogo con imagen, título, género, año, calificación y descripción.
- Buscador que se actualiza mientras se escribe (ignora mayúsculas y tildes).
- Filtros por género, año, calificación mínima y solo favoritas, combinables con el buscador.
- Detalle de la película en una ventana que se cierra con la X, con Escape o al pulsar fuera.
- Favoritos: agregar, quitar y ver solo las favoritas.
- Valoración personal con estrellas (pulsar la misma estrella otra vez quita la nota).
- Mensaje cuando no hay resultados, con botón para limpiar búsqueda y filtros.

## Estructura

```
src/
├── App.jsx                 estado compartido y funciones
├── data/movies.js          12 películas
├── utils/filterMovies.js   búsqueda y filtros combinados con filter()
└── components/
    ├── Header.jsx
    ├── SearchBar.jsx
    ├── Filters.jsx
    ├── MovieList.jsx
    ├── MovieCard.jsx
    ├── MovieDetail.jsx
    ├── StarRating.jsx
    └── Favorites.jsx
```

Los favoritos se guardan solo como IDs; las películas favoritas se obtienen filtrando `movies` con esos IDs.

## Pósters

Las imágenes se cargan desde URLs externas definidas en el campo `image` de `src/data/movies.js`. Se necesita conexión a internet para verlas.

## Autor

Nombre del estudiante o pareja: _completar_
