import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaArrowRight,
  FaUniversity,
  FaGraduationCap,
  FaUsers,
  FaClock,
} from "react-icons/fa";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add your search logic here
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
            radial-gradient(circle at 25px 25px, white 2%, transparent 0%),
            radial-gradient(circle at 75px 75px, white 2%, transparent 0%)
          `,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36 md:pt-32 md:pb-48">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Discover Your Path to
              <span className="block mt-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Higher Education
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Find, compare, and choose the perfect university across Pakistan
              with comprehensive data, updated insights, and expert guidance.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-14">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search universities, programs, or courses..."
                  className="w-full pl-12 pr-40 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg transition-all duration-300"
                />

                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  Search
                  <FaArrowRight />
                </button>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
              <Link
                to="/login"
                className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-xl"
              >
                <FaGraduationCap className="h-5 w-5" />
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/universities"
                className="group bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20 flex items-center gap-3"
              >
                <FaUniversity className="h-5 w-5" />
                Browse Universities
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {/* Universities */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">
                  <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <FaUniversity className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-300">Universities</div>
              </div>

              {/* Programs */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">
                  <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <FaGraduationCap className="h-6 w-6 text-green-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-gray-300">Programs</div>
              </div>

              {/* Students */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">
                  <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <FaUsers className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-gray-300">Students</div>
              </div>

              {/* Updated */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">
                  <div className="h-12 w-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <FaClock className="h-6 w-6 text-orange-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-300">Updated</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
