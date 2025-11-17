import { useContext, useEffect, useState } from "react";

const MyCollection = () => {
  const { user } = useContext(AuthContext);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3000/my-collection/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setCollection(data));
  }, [user]);

  const handleRemove = (movieId) => {
    fetch(
      `http://localhost:3000/remove-from-collection/${user.uid}/${movieId}`,
      { method: "DELETE" }
    )
      .then((res) => res.json())
      .then(() => {
        setCollection(collection.filter((m) => m.movieId !== movieId));
      });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">🎬 My Collection</h1>

      {collection.length === 0 ? (
        <p className="text-gray-300 text-lg">No saved movies yet...</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {collection.map((movie) => (
            <div
              key={movie.movieId}
              className="bg-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-700">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold text-white truncate">
                  {movie.title}
                </h2>

                <p className="text-gray-400 text-sm my-1">
                  Category:{" "}
                  <span className="text-orange-400">{movie.category}</span>
                </p>

                <p className="text-gray-500 text-xs">
                  Added on: {new Date(movie.downloadedAt).toLocaleString()}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    Watch Now
                  </button>

                  <button
                    onClick={() => handleRemove(movie.movieId)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollection;
