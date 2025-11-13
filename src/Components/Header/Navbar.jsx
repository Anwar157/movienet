import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 w-full">
      {/* Top bar */}
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        {/* Logo + Menu icon */}
        <div className="flex items-center gap-x-2">
          {/* Mobile menu toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <h2 className="font-bold text-xl text-white md:text-4xl">
            Movie<span className="text-amber-700">Net</span>
          </h2>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-x-4 text-white">
          <Link to="/">Home</Link>
          <Link to="/">All Movies</Link>
          <Link to="/">My Collection</Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-x-4 font-semibold">
          <Link to="/login">
            <button className="btn text-gray-100 bg-amber-700 border-none">
              Login
            </button>
          </Link>
          <Link to="/Signin">
            <button className="btn text-gray-100 bg-amber-700 border-none">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-600 text-white flex flex-col items-center gap-y-3 py-4">
          <Link to="/" className="hover:text-amber-400">
            Home
          </Link>
          <Link to="/" className="hover:text-amber-400">
            All Movies
          </Link>
          <Link to="/" className="hover:text-amber-400">
            My Collection
          </Link>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
