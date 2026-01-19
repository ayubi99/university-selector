import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = ({ onOpenAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "UNIVERSITIES", href: "#universites" },
    { name: "RANKINGS", href: "#rankings" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="sticky h-17 top-0 bg-blue-800 backdrop-blur-md z-50  text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between">
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
                onClick={() => onOpenAuth("signup")}
                className="bg-blue-700 flex text-white px-6 py-2 rounded-lg hover:bg-primary-dark font-medium shadow-sm hover:shadow transition"
              >
                LOGIN
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
                    onOpenAuth("signup");
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium"
                >
                  1. LOGIN
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
