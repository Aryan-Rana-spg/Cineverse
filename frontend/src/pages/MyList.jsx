import React from "react";
import TopNav from "../components/topnav.jsx";
import "./Home.css";

const myList = [
  { id: 1, title: "Inception", type: "Movie" },
  { id: 2, title: "Quantum Nights", type: "TV Show" },
  { id: 3, title: "City of Shadows", type: "Movie" },
];

function MyList() {
  return (
    <div className="dashboard-container">
      <TopNav />
      <main className="dashboard-content">
        <h2 className="row-title">My List</h2>
        <p className="hero-description">
          Your saved watchlist for this demo. All selections are stored in the
          browser session.
        </p>
        <div className="movies-grid">
          {myList.map((item) => (
            <div key={item.id} className="movie-card">
              <div className="card-image-placeholder">
                <span className="poster-icon">⭐</span>
              </div>
              <div className="movie-details">
                <h3>{item.title}</h3>
                <p className="movie-description">
                  {item.type} saved to your frontend preview list.
                </p>
                <div className="movie-meta">
                  <span className="movie-genre">{item.type}</span>
                  <span className="movie-rating">Saved</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MyList;
