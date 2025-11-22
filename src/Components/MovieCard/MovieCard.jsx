import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle Download → Add to My Collection
  const handleDownload = (movie) => {
    if (!user) {
      toast.error("Please Sign in first!");
      navigate("/signin");
      return;
    }

    fetch(`http://localhost:3000/add-to-collection/${user.uid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Movie added to your collection!");
        } else {
          toast.error("Failed to add movie.");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="flex flex-wrap justify-center">
      {movies.slice(0, 10).map((movie) => (
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
              <button
                className="btn btn-primary"
                onClick={() => handleDownload(movie)}>
                Download
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
