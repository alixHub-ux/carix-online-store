import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Order from "./pages/Order";
import { Instagram, Twitter } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Composant séparé pour utiliser useNavigate
// Dans App.tsx
function AppContent() {
  const navigate = useNavigate();

  const TikTokIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.5 2h2.1c.2 1.4 1 2.8 2.2 3.7 1 .7 2.1 1.1 3.2 1.2v2.2c-1.6 0-3.2-.5-4.6-1.5v6.9c0 3.1-2.5 5.5-5.5 5.5S4.4 17.6 4.4 14.5c0-3.1 2.5-5.5 5.5-5.5.3 0 .7 0 1 .1v2.3c-.3-.1-.6-.2-1-.2-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3V2z"/>
    </svg>
  );

  
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <Header
        linkSize="text-xl"
        // logo={
        //   <div className="flex items-center gap-2 text-brownDark font-bold text-2xl">
        //     <span className="text-2xl">♥</span> Carix
        //   </div>
        // }
        links={[
          { name: "Acceuil", href: "/", onClick: () => navigate("/") },
          { name: "Produits", href: "/products", onClick: () => navigate("/products") },
          { name: "À propos", href: "/about", onClick: () => navigate("/about") },
          { name: "Commander", href: "/order", onClick: () => navigate("/order") },
        ]}
      />
      
      {/* Contenu de la page */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <Footer
        description="Boutique en ligne spécialisée dans la confection d'articles en laine."
        email="carixshop1@gmail.com"
        phone="+226 64-24-24-67"
        links={[
          { label: "Acceuil", href: "/", onClick: () => navigate("/") },
          { label: "Produits", href: "/products", onClick: () => navigate("/products") },
          { label: "Nous", href: "/about", onClick: () => navigate("/about") },
          { label: "Commander", href: "/order", onClick: () => navigate("/order") },
        ]}
        socials={[
          { icon: <Instagram />, href: "https://www.instagram.com/carix_shop?igsh=MWRmcXFuY295N3IzaQ==" },
          { icon: <TikTokIcon />,href: "https://www.tiktok.com/@alixcarine?_r=1&_t=ZM-92lTNJDTMTI" },
          { icon: <Twitter />, href: "https://x.com/CarixShop" },
        ]}
      />
    </div>
  );
}

// function AppContent() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-ivory min-h-screen">
//       {/* Header */}
//       <Header
//         linkSize="text-xl"
//         logo={
//           <div className="flex items-center gap-2 text-brownDark font-bold text-2xl">
//             <span className="text-2xl">♥</span> Carix
//           </div>
//         }
//         links={[
//           { name: "Acceuil", href: "#", onClick: () => navigate("/") },
//           { name: "Produits", href: "#", onClick: () => navigate("/products") },
//           { name: "À propos", href: "#", onClick: () => navigate("/about") },
//           { name: "Commander", href: "#", onClick: () => navigate("/order") },
//         ]}
//       />

//       {/* Contenu de la page - React Router gère automatiquement l'affichage */}
//       <main className="min-h-screen">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/order" element={<Order />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <Footer
//         description="Boutique en ligne spécialisée dans la confection d'articles en laine."
//         email="carixshop1@gmail.com"
//         phone="+226 64-24-24-67"
//         links={[
//           { label: "Acceuil", href: "#", onClick: () => navigate("/") },
//           { label: "Produits", href: "#", onClick: () => navigate("/products") },
//           { label: "Nous", href: "#", onClick: () => navigate("/about") },
//           { label: "Commander", href: "#", onClick: () => navigate("/order") },
//         ]}
//         socials={[
//           { icon: <Instagram />, href: "https://www.instagram.com" },
//           { icon: <Facebook />, href: "https://www.facebook.com" },
//           { icon: <Twitter />, href: "https://www.twitter.com" },
//         ]}
//       />
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;