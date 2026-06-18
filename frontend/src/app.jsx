import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import MyList from "./pages/MyList";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default path redirects straight to the login/register screen */}
          <Route path="/" element={<Navigate to="/auth" />} />

          {/* Main Core Application Routes */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/my-list" element={<MyList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
