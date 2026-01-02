// components/layout/Header.tsx
import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoImage from "../../assets/logo/logo 2.svg";
import { useLocation } from "react-router-dom"; 

type HeaderProps = {
  links?: { name: string; href: string; onClick?: () => void }[];
  className?: string;
  linkSize?: string;
};

const Header: React.FC<HeaderProps> = ({
  links = [
    { name: "Acceuil", href: "#" },
    { name: "Produits", href: "#" },
    { name: "À propos", href: "#" },
    { name: "Commander", href: "#" },
  ],
  className = "",
  linkSize = "text-base",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation(); 

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

  // Fonction pour gérer le clic
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof links[0]) => {
    if (link.onClick) {
      e.preventDefault();
      link.onClick();
      setMenuOpen(false); // Fermer le menu mobile après le clic
    }
  };

   // ✨ Fonction pour vérifier si un lien est actif
  const isActive = (href: string) => {
    return location.pathname === href;
  };


  return (
    <header className={`w-full bg-white shadow-sm relative z-40 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={LogoImage}
            alt="Carix Brand Logo"
            className="h-20 w-auto object-contain" // ✅ h-10 au lieu de w-32 pour meilleur contrôle
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`group relative ${linkSize} text-brownDark font-medium transition-colors duration-300 hover:text-coffee cursor-pointer ${
                isActive(link.href)
                  ? "text-amber-900" // ✨ Couleur pour le lien actif
                  : "text-amber-800"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {/* ✨ Soulignement permanent pour le lien actif */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-amber-900 transition-all duration-300 ${
                  isActive(link.href)
                    ? "w-full" // ✨ Toujours visible si actif
                    : "w-0 group-hover:w-full" // Visible au survol sinon
                }`}
              />
            </a>
          ))}
        </nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brownDark z-50 p-2 rounded-md hover:bg-gray-100 transition-colors "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen
          ? "max-h-96 opacity-100 pointer-events-auto"
          : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1 bg-white border-t">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`block py-3 px-4 ${linkSize} font-medium rounded-lg transition-colors cursor-pointer ${
                isActive(link.href)
                  ? "bg-emerald-100 text-amber-900 border-l-4 border-amber-900" // ✨ Style actif mobile
                  : "text-amber-800 hover:bg-emerald-50 hover:text-amber-900"
              }`}
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