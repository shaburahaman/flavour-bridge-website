import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300
      ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">

        <div className="flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/image.png"
              alt="Flavour Bridge"
              className="h-16 md:h-18 w-auto"
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex space-x-10 text-[15px] font-medium">

            <a
              href="#home"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              Home
            </a>

            <a
              href="#products"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              Our Spices
            </a>

            <a
              href="#journey"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              Our Journey
            </a>

            <a
              href="#quality"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              Quality Process
            </a>

            <a
              href="#customers"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              Global Customers
            </a>

            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              Contact
            </a>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">

            <nav className="flex flex-col space-y-4 text-sm font-medium">

              <a href="#home" className="text-gray-700 hover:text-orange-600">
                Home
              </a>

              <a href="#products" className="text-gray-700 hover:text-orange-600">
                Our Spices
              </a>

              <a href="#journey" className="text-gray-700 hover:text-orange-600">
                Our Journey
              </a>

              <a href="#quality" className="text-gray-700 hover:text-orange-600">
                Quality Process
              </a>

              <a href="#customers" className="text-gray-700 hover:text-orange-600">
                Global Customers
              </a>

              <a href="#contact" className="text-gray-700 hover:text-orange-600">
                Contact
              </a>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
};

export default Header;