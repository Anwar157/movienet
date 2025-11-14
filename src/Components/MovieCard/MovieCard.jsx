import React, { useEffect, useState } from "react";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => (
        <div key={movie.id} className="card bg-base-100 w-96 shadow-sm m-4">
          <figure>
            <img src={movie.poster} alt={movie.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p>{movie.description}</p>
            <p>
              Category: {movie.category} | Type: {movie.type}
            </p>
            <p>Rating: {movie.rating}</p>
            <p>Year: {movie.releaseYear}</p>
            <div className="card-actions justify-end">
              <a href={movie.downloadLink} className="btn btn-primary">
                Download
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
