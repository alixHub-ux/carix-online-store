// components/layout/Footer.tsx
import React from "react";
import { Mail, Phone, Heart } from "lucide-react"; // ✅ Suppression des imports inutilisés
import Top from "../../assets/images/top.jpeg";

type SocialLink = {
  icon: React.ReactNode;
  href: string;
};

type FooterProps = {
  description: string;
  email: string;
  phone: string;
  links: { label: string; href: string; onClick?: () => void }[]; // ✅ Ajout de onClick
  socials: SocialLink[];
  year?: number;
};

const Footer: React.FC<FooterProps> = ({
  description,
  email,
  phone,
  links,
  socials,
  year = new Date().getFullYear(),
}) => {
  // ✅ Fonction pour gérer le clic
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof links[0]) => {
    if (link.onClick) {
      e.preventDefault();
      link.onClick();
      // Scroll vers le haut pour une meilleure UX
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brownDark text-ivory text-noyhr px-6 md:px-20 py-12 flex flex-col">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* --- Logo & description --- */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={Top}
              alt="Carix Brand Logo"
              className="w-28 h-auto object-contain"
            />
            <span className="text-xl font-bold">Carix</span>
          </div>
          <p className="text-sm mb-6">{description}</p>
          <div className="flex gap-4 text-noyhr">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mint transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-mint font-bold text-noyhr mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {links.map((l, i) => (
              <li key={i}>
                <a
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l)} // ✅ Gestion du clic
                  className="hover:text-mint transition-colors cursor-pointer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Contact --- */}
        <div>
          <h3 className="text-mint font-bold text-noyhr mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail className="text-mint" size={18} /> <span>{email}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-mint" size={18} /> <span>{phone}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom --- */}
      <div className="mt-10 border-t border-ivory/10 pt-6 text-center text-sm text-ivory text-noyhr">
        © {year} Carix. All rights reserved. Made with{" "}
        <Heart className="inline-block text-mint mx-1" size={16} fill="currentColor" />
        for knitting lovers.
      </div>
    </footer>
  );
};

export default Footer;