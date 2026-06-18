import React from "react";
import "./Home.css";

const mockMovies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: "8.8" },
  { id: 2, title: "The Dark Knight", genre: "Action", rating: "9.0" },
  { id: 3, title: "Interstellar", genre: "Adventure", rating: "8.6" },
  { id: 4, title: "Pulp Fiction", genre: "Crime", rating: "8.9" },
  { id: 5, title: "Blade Runner 2049", genre: "Neo-noir", rating: "8.0" },
  { id: 6, title: "The Matrix", genre: "Action", rating: "8.7" },
];

function Home() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-navbar">
        <div className="navbar-logo">CINEVERSE</div>
        <nav className="navbar-links">
          <span className="nav-link active">Home</span>
          <span className="nav-link">Movies</span>
          <span className="nav-link">TV Shows</span>
          <span className="nav-link">My List</span>
        </nav>
        <div className="navbar-profile">
          <div className="profile-avatar">A</div>
        </div>
      </header>

      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">NOW STREAMING</span>
          <h1 className="hero-title">Explore the Universe of Cinema</h1>
          <p className="hero-description">
            Stream unlimited high-definition movies and enjoy a polished frontend-only
            experience powered entirely by the browser.
          </p>
          <div className="hero-buttons">
            <button className="btn-play">► Play Now</button>
            <button className="btn-info">ⓘ More Info</button>
          </div>
        </div>
      </section>

      <main className="dashboard-content">
        <h2 className="row-title">Trending Content</h2>
        <div className="movies-grid">
          {mockMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="card-image-placeholder">
                <span className="poster-icon">🎬</span>
              </div>
              <div className="movie-details">
                <h3>{movie.title}</h3>
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

export default Home;
