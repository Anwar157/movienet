import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">
            Movie<span className="text-amber-600">Net</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Your ultimate destination for movies and entertainment.
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0 text-center">
          <a href="/" className="hover:text-white">
            Home
          </a>
          <a href="/movies" className="hover:text-white">
            Movies
          </a>
          <a href="/collection" className="hover:text-white">
            My Collection
          </a>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Right side - Social links */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/anwar.anwarhossen.7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
            <Facebook size={20} />
          </a>
          <a
            href="https://x.com/NilAkas52477402"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-colors">
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition-colors">
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        &copy; {new Date().getFullYear()} MovieHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
