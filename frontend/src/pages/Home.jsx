import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/movies")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error communicating with movie-service:", err);
        setError("Failed to fetch movies from the backend microservice.");
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Navbar section */}
      <header style={styles.navbar}>
        <div style={styles.logo}>🎬 Cineverse</div>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Log Out
        </button>
      </header>

      {/* Core Welcome Panel */}
      <section style={styles.heroSection}>
        <h1>Welcome to Your Dashboard</h1>
        <p>
          Explore trending movies, manage reviews, and customize your experience
          across our microservices.
        </p>
      </section>

      {/* Movies Grid Shell */}
      <main style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>Trending Content</h2>

        {loading && (
          <p style={{ color: "#aaa" }}>
            Loading live cinematic library matrix...
          </p>
        )}
        {error && <p style={{ color: "#E50914" }}>{error}</p>}

        {!loading && !error && (
          <div style={styles.movieGrid}>
            {movies.map((movie) => (
              <div key={movie.id} style={styles.movieCard}>
                {/* Fallback pattern handles both camelCase and snake_case properties seamlessly */}
                <img
                  src={movie.imageUrl || movie.image_url}
                  alt={movie.title}
                  style={styles.poster}
                />
                <div style={styles.movieDetails}>
                  <h3 style={styles.movieTitle}>{movie.title}</h3>
                  <span style={styles.genreBadge}>{movie.genre}</span>
                  <div style={styles.rating}>⭐ {movie.rating}/10</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

const styles = {
  dashboardContainer: {
    minHeight: "100vh",
    backgroundColor: "#141414",
    color: "#ffffff",
    fontFamily: "Segoe UI, Roboto, sans-serif",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#090909",
    borderBottom: "1px solid #222",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#E50914",
    letterSpacing: "1px",
  },
  logoutBtn: {
    padding: "8px 16px",
    backgroundColor: "#E50914",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  heroSection: {
    textAlign: "center",
    padding: "60px 20px",
    background: "linear-gradient(180deg, #1f1f1f 0%, #141414 100%)",
  },
  contentSection: { padding: "0 40px 40px 40px" },
  sectionTitle: {
    fontSize: "22px",
    marginBottom: "20px",
    borderBottom: "2px solid #E50914",
    display: "inline-block",
    paddingBottom: "5px",
  },
  movieGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "25px",
  },
  movieCard: {
    backgroundColor: "#1f1f1f",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    transition: "transform 0.2s",
  },
  poster: { width: "100%", height: "240px", objectFit: "cover" },
  movieDetails: { padding: "12px" },
  movieTitle: {
    fontSize: "16px",
    margin: "0 0 8px 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  genreBadge: {
    fontSize: "12px",
    backgroundColor: "#333",
    padding: "3px 8px",
    borderRadius: "12px",
    marginRight: "8px",
  },
  rating: { fontSize: "13px", color: "#ffc107", marginTop: "8px" },
};

export default Home;
