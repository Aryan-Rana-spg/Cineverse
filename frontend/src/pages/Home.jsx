import React, { useState } from "react";
import "./Home.css";

const mockMovies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: "8.8",
    imageUrl:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1000&auto=format&fit=crop",
    description:
      "A mind-bending thriller about dreams, reality, and hidden memories.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    rating: "9.0",
    imageUrl:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1000&auto=format&fit=crop",
    description:
      "The caped crusader faces a chilling new threat from Gotham's Joker.",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Adventure",
    rating: "8.6",
    imageUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000&auto=format&fit=crop",
    description:
      "A space mission across galaxies searching for humanity's next home.",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: "Crime",
    rating: "8.9",
    imageUrl:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1000&auto=format&fit=crop",
    description:
      "An iconic crime saga with interwoven stories and unforgettable dialogue.",
  },
  {
    id: 5,
    title: "Blade Runner 2049",
    genre: "Neo-noir",
    rating: "8.0",
    imageUrl:
      "https://images.unsplash.com/photo-1542204165-72f46f3a9114?q=80&w=1000&auto=format&fit=crop",
    description: "A visually stunning future noir about identity and memory.",
  },
  {
    id: 6,
    title: "The Matrix",
    genre: "Action",
    rating: "8.7",
    imageUrl:
      "https://images.unsplash.com/photo-1514516870924-778e41c553c8?q=80&w=1000&auto=format&fit=crop",
    description:
      "A hacker discovers the world is a simulation and must fight for freedom.",
  },
];

const navItems = ["Home", "Movies", "TV Shows", "My List"];

function Home() {
  const [activeNav, setActiveNav] = useState("Home");
  const [alertMessage, setAlertMessage] = useState("");

  const clearAlert = () => {
    window.setTimeout(() => setAlertMessage(""), 2400);
  };

  const handleNavClick = (item) => {
    setActiveNav(item);
    setAlertMessage(`Selected '${item}'. This page is a frontend demo view.`);
    clearAlert();
  };

  const handlePlayNow = () => {
    setAlertMessage(
      "Enjoy the featured collection — all movie details are demo content.",
    );
    clearAlert();
  };

  const handleMoreInfo = () => {
    setAlertMessage(
      "Scroll down to explore trending titles and view sample movie cards.",
    );
    clearAlert();
  };

  const handleCardClick = (movie) => {
    setAlertMessage(
      `You clicked '${movie.title}'. This is a demo preview card.`,
    );
    clearAlert();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-navbar">
        <div className="navbar-logo">CINEVERSE</div>
        <nav className="navbar-links">
          {navItems.map((item) => (
            <span
              key={item}
              className={`nav-link ${activeNav === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </span>
          ))}
        </nav>
        <div className="navbar-profile">
          <div
            className="profile-avatar"
            onClick={() => {
              setAlertMessage("Profile clicked. This is a demo experience.");
              clearAlert();
            }}
          >
            A
          </div>
        </div>
      </header>

      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">NOW STREAMING</span>
          <h1 className="hero-title">Explore the Universe of Cinema</h1>
          <p className="hero-description">
            Dive into a polished frontend experience with interactive demo movie
            cards, playable buttons, and immersive visual styling.
          </p>
          <div className="hero-buttons">
            <button className="btn-play" onClick={handlePlayNow}>
              ► Play Now
            </button>
            <button className="btn-info" onClick={handleMoreInfo}>
              ⓘ More Info
            </button>
          </div>
          {alertMessage && <div className="hero-alert">{alertMessage}</div>}
        </div>
      </section>

      <main className="dashboard-content">
        <h2 className="row-title">Trending Content</h2>
        <div className="movies-grid">
          {mockMovies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => handleCardClick(movie)}
            >
              <div className="movie-poster-wrapper">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="movie-poster"
                />
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

export default Home;
