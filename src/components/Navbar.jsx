import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      // Scroll smoothly if section exists
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // If section does not exist (on details page), go back to home and scroll after render
      navigate("/");

      // Wait a little to allow page to render, then scroll
      setTimeout(() => {
        const sectionAfterNav = document.getElementById(id);
        if (sectionAfterNav) {
          sectionAfterNav.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    // Close mobile menu after click
    setOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white px-6 py-2 shadow-2xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center overflow-hidden ring-2 ring-slate-900">
            <img
              src="/logoimage1.jpg"
              alt="UniSelection Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-wide">UniSelection</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <button
              className="hover:text-blue-400 transition"
              onClick={() => handleScroll("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="hover:text-blue-400 transition"
              onClick={() => handleScroll("universities")}
            >
              Universities
            </button>
          </li>
          <li>
            <button
              className="hover:text-blue-400 transition"
              onClick={() => handleScroll("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="hover:text-blue-400 transition"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            "☰"
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 space-y-3 text-center text-sm bg-slate-800 py-4 rounded-lg">
          <li>
            <button
              className="w-full py-2 hover:bg-slate-700"
              onClick={() => handleScroll("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="w-full py-2 hover:bg-slate-700"
              onClick={() => handleScroll("universities")}
            >
              Universities
            </button>
          </li>
          <li>
            <button
              className="w-full py-2 hover:bg-slate-700"
              onClick={() => handleScroll("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="w-full py-2 hover:bg-slate-700"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
