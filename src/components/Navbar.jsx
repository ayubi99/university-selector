import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = ({ onOpenAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Universities", href: "#universities" },
    { name: "Programs", href: "#programs" },
    { name: "Scholarships", href: "#scholarships" },
    { name: "Admissions", href: "#admissions" },
    { name: "Compare", href: "#compare" },
    { name: "Rankings", href: "#rankings" },
  ];

  return (
    <nav className="sticky top-0 bg-blue-400 backdrop-blur-md shadow-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo size="medium" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center space-x-4 ml-6">
              <button
                onClick={() => onOpenAuth("login")}
                className="text-dark hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                Log in
              </button>
              <button
                onClick={() => onOpenAuth("signup")}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark font-medium shadow-sm hover:shadow transition"
              >
                1. Sign up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark py-2 px-2 hover:text-primary transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    onOpenAuth("login");
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-dark py-3 border rounded-lg hover:bg-gray-50"
                >
                  Log in
                </button>
                <button
                  onClick={() => {
                    onOpenAuth("signup");
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium"
                >
                  1. Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
