import { useState } from "react";

export default function StarRating({ value, onRate }) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;

  return (
    <div className="stars" role="group" aria-label="Tu valoración" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`star-btn ${star <= shown ? "on" : ""}`}
          aria-label={`${star} ${star === 1 ? "estrella" : "estrellas"}`}
          aria-pressed={star === value}
          onMouseEnter={() => setHover(star)}
          onClick={() => onRate(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
}
