"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { menuItems } from "@/lib/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollYRef = useRef(0);
  const heroHeightRef = useRef(0);

  // Handle scroll detection for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Get hero section height (viewport height as proxy)
      const heroHeight = window.innerHeight;
      heroHeightRef.current = heroHeight;

      // Detect if past hero section
      setIsPastHero(currentScrollY > heroHeight);

      // Detect scroll direction
      if (currentScrollY < lastScrollYRef.current) {
        // Scrolling up
        setScrollDirection("up");
        setIsScrollingUp(currentScrollY > heroHeight);
      } else {
        // Scrolling down
        setScrollDirection("down");
        setIsScrollingUp(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, item) => {
    // Handle "Back to top" with smooth scroll
    if (item.isBackToTop) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  // Show floating button on mobile when scrolling up and past hero
  const shouldShowFloatingButton = isPastHero && isScrollingUp;

  return (
    <>
      {/* Hamburger Button in navbar - always visible on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Floating Hamburger Button - only visible on mobile when scrolling up past hero */}

      {shouldShowFloatingButton && (
        <button
          onClick={toggleMenu}
          className="md:hidden fixed top-3 left-3 z-50 flex items-center justify-center text-white bg-linear-to-br from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 rounded-full p-4 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed left-0 top-0 min-h-screen w-64 bg-linear-to-b from-gray-900 to-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <span className="text-white text-lg font-semibold">Menu</span>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="pt-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item)}
              className={`flex items-center gap-3 px-5 py-3 text-white navbar-item hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700 last:border-b-0 ${
                item.isBackToTop ? "bg-gray-800 font-semibold" : ""
              }`}
            >
              {item.isBackToTop && <ArrowUp size={18} />}
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay/Backdrop - closes menu when clicked outside */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-transparent z-40 md:hidden"
        />
      )}
    </>
  );
}
