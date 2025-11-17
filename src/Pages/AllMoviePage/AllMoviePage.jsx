import React, { useEffect, useState } from "react";

const AllMoviePage = () => {
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
        <div
          key={movie.id}
          className="card bg-base-100 w-[300px] shadow-sm m-4">
          <figure>
            <img
              className="h-[300px] w-[250px]"
              src={movie.poster}
              alt={movie.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{movie.title}</h2>
            <p className="text-left">{movie.description}</p>
            <div className="flex gap-x-4 text-left items-center">
              <p className="text-sm">Category: {movie.category}</p>
              <p className="text-sm"> Type: {movie.type}</p>
            </div>
            <div className="flex gap-x-4 items-center text-left">
              <p>Rating: {movie.rating}</p>
              <p>Year: {movie.releaseYear}</p>
            </div>
            <div className="card-actions justify-center">
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

export default AllMoviePage;
