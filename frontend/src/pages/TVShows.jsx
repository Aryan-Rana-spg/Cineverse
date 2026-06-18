import React from "react";
import TopNav from "../components/topnav.jsx";
import "./Home.css";

const tvShows = [
  {
    id: 1,
    title: "Midnight Run",
    genre: "Mystery",
    rating: "8.1",
    description:
      "A small town investigation reveals a far-reaching conspiracy.",
  },
  {
    id: 2,
    title: "Pulse",
    genre: "Drama",
    rating: "8.5",
    description:
      "A character-driven series about ambition, risk, and redemption.",
  },
  {
    id: 3,
    title: "Quantum Nights",
    genre: "Sci-Fi",
    rating: "8.9",
    description:
      "A scientist uncovers a parallel reality with unexpected consequences.",
  },
];

function TVShows() {
  return (
    <div className="dashboard-container">
      <TopNav />
      <main className="dashboard-content">
        <h2 className="row-title">TV Shows</h2>
        <p className="hero-description">
          Explore what’s currently available in the frontend-only TV show demo
          section.
        </p>
        <div className="movies-grid">
          {tvShows.map((show) => (
            <div key={show.id} className="movie-card">
              <div className="card-image-placeholder">
                <span className="poster-icon">📺</span>
              </div>
              <div className="movie-details">
                <h3>{show.title}</h3>
                <p className="movie-description">{show.description}</p>
                <div className="movie-meta">
                  <span className="movie-genre">{show.genre}</span>
                  <span className="movie-rating">⭐ {show.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TVShows;
