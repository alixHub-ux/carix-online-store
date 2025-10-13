// components/Header.tsx
import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  logo?: React.ReactNode;
  links?: { name: string; href: string }[];
  className?: string; // pour personnalisation externe
};

const Header: React.FC<HeaderProps> = ({
  logo = <span className="text-brownDark font-bold text-xl">Carix</span>,
  links = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#" },
    { name: "About", href: "#" },
    { name: "Order", href: "#" },
  ],
  className = "",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique en dehors (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={`w-full bg-white shadow-sm relative z-40 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          {logo}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="group relative text-brownDark font-medium transition-colors duration-300 hover:text-coffee"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brownDark transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brownDark z-50 p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - CORRIGÉ */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1 bg-white border-t">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="block py-3 px-4 text-brownDark font-medium rounded-lg transition-colors hover:bg-mint/20 hover:text-coffee"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;