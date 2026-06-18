import React from "react";
import TopNav from "../components/topnav.jsx";
import "./Home.css";

const movies = [
  {
    id: 1,
    title: "Starship Saga",
    genre: "Science Fiction",
    rating: "8.7",
    description:
      "A crew of explorers travels beyond the edge of the known universe.",
  },
  {
    id: 2,
    title: "City of Shadows",
    genre: "Thriller",
    rating: "8.3",
    description:
      "A detective must navigate a neon city full of secrets and danger.",
  },
  {
    id: 3,
    title: "Epic Quest",
    genre: "Fantasy",
    rating: "8.4",
    description:
      "A band of heroes races to recover an ancient artifact before time runs out.",
  },
];

function Movies() {
  return (
    <div className="dashboard-container">
      <TopNav />
      <main className="dashboard-content">
        <h2 className="row-title">Movie Catalog</h2>
        <p className="hero-description">
          Browse the demo movie collection. Each card is an interactive preview
          for the frontend-only experience.
        </p>
        <div className="movies-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="card-image-placeholder">
                <span className="poster-icon">🎥</span>
              </div>
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p className="movie-description">{movie.description}</p>
                <div className="movie-meta">
                  <span className="movie-genre">{movie.genre}</span>
                  <span className="movie-rating">⭐ {movie.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Movies;
