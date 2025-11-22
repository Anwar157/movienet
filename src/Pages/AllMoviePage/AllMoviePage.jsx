import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const AllMoviePage = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDownload = async (movie) => {
    if (!user) {
      toast.error("Please login first!");
      return;
    }

    const payload = {
      _id: movie._id,
      title: movie.title,
      poster: movie.poster,
      category: movie.category,
      downloadedAt: new Date(),
    };

    try {
      const res = await fetch(
        `http://localhost:3000/add-to-collection/${user.uid}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Movie added to your collection!");
      } else {
        toast.error("Failed to save movie!");
      }
    } catch (error) {
      toast.error("Server error!");
      console.error(error);
    }
  };
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => (
        <div
          key={movie._id}
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
                onClick={() => handleDownload(movie)}
                className="btn btn-primary">
                Download
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMoviePage;
