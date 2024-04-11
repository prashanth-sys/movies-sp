import { Link } from "react-router-dom";
import React from "react";
import "./index.css";

const Movie = (props) => {
  const { popularMovieDetails } = props;
  const { title, posterPath, id } = popularMovieDetails;
  return (
    <li>
      <Link to={`/movie/${id}`} className="link">
        <div className="list-container">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              alt="movie"
              className="image"
            />
          </div>
          <div>{title}</div>
        </div>
      </Link>
    </li>
  );
};

export default Movie;
