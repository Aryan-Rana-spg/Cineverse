import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { API_BASE_URL } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/movies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.error(err);
        setError(
          "Failed to fetch trending titles. Please verify the Movie Microservice engine.",
        );
      });
  }, []);

  return (
    <div className="dashboard-container">
      {/* Cinematic Navigation Header */}
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

      {/* Immersive Hero Spotlight Banner */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">NOW STREAMING</span>
          <h1 className="hero-title">Explore the Universe of Cinema</h1>
          <p className="hero-description">
            Stream unlimited high-definition movies, track your watchlists, and
            witness architectural microservice integration seamlessly processing
            data in real-time.
          </p>
          <div className="hero-buttons">
            <button className="btn-play">► Play Now</button>
            <button className="btn-info">ⓘ More Info</button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="dashboard-content">
        <h2 className="row-title">Trending Content</h2>

        {error ? (
          <div className="error-card-banner">
            <span className="error-icon">⚠️</span>
            <p>{error}</p>
          </div>
        ) : (
          <div className="movies-grid">
            {movies.length === 0
              ? /* Fallback Mock Data Display if your DB table is empty so the UI still looks full */
                [
                  { id: 1, title: "Inception", genre: "Sci-Fi", rating: "8.8" },
                  {
                    id: 2,
                    title: "The Dark Knight",
                    genre: "Action",
                    rating: "9.0",
                  },
                  {
                    id: 3,
                    title: "Interstellar",
                    genre: "Adventure",
                    rating: "8.6",
                  },
                  {
                    id: 4,
                    title: "Pulp Fiction",
                    genre: "Crime",
                    rating: "8.9",
                  },
                ].map((movie) => (
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
                ))
              : /* Dynamic Database Content Render */
                movies.map((movie) => (
                  <div key={movie.id} className="movie-card">
                    <img
                      src={
                        movie.imageUrl ||
                        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop"
                      }
                      alt={movie.title}
                      className="movie-poster"
                    />
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
        )}
      </main>
    </div>
  );
}

export default Home;
