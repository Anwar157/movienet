import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-indigo-700 w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        {/* Logo + Mobile Menu */}
        <div className="flex items-center gap-x-2">
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/">
            <h2 className="font-bold text-xl text-white md:text-4xl">
              Movie<span className="text-amber-700">Net</span>
            </h2>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-4 text-white">
          <Link to="/">Home</Link>
          <Link to="/allMovies">All Movies</Link>
          <Link to="/myCollection">My Collection</Link>
        </div>

        {/* Right Side Buttons / Profile */}
        <div className="hidden md:flex items-center gap-x-4 font-semibold">
          {/* Always show Login button */}
          <Link to="/login">
            <button className="btn text-gray-100 bg-amber-700 border-none">
              Login
            </button>
          </Link>

          {/* Show Sign In button ONLY if user NOT logged in */}
          {!user && (
            <Link to="/signin">
              <button className="btn text-gray-100 bg-amber-700 border-none">
                Sign In
              </button>
            </Link>
          )}

          {/* IF Logged In → Show profile photo + dropdown */}
          {user && (
            <div className="relative group cursor-pointer">
              <img
                src={user.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />

              {/* Hover dropdown */}
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black p-3 rounded shadow-lg w-48 z-50">
                <p className="font-semibold">{user.displayName}</p>
                <p className="text-sm text-gray-600">{user.email}</p>

                <Link to="/profile">
                  <button className="btn btn-sm mt-2 w-full bg-indigo-700 text-white">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-600 text-white flex flex-col items-center gap-y-3 py-4">
          <Link to="/" className="hover:text-amber-400">
            Home
          </Link>
          <Link to="/allMovies" className="hover:text-amber-400">
            All Movies
          </Link>
          <Link to="/myCollection" className="hover:text-amber-400">
            My Collection
          </Link>

          {/* Mobile Logged In view */}
          {user ? (
            <div className="text-center mt-2">
              <img
                src={user.photoURL}
                className="w-12 h-12 rounded-full mx-auto mb-1"
              />
              <p>{user.displayName}</p>
              <p className="text-sm text-gray-300">{user.email}</p>

              <Link to="/profile">
                <button className="btn btn-sm bg-amber-700 mt-2">
                  Profile
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-x-3 mt-2">
              <Link to="/login">
                <button className="btn text-gray-100 bg-amber-700 border-none">
                  Login
                </button>
              </Link>

              <Link to="/signin">
                <button className="btn text-gray-100 bg-amber-700 border-none">
                  Sign In
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
