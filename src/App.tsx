import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Order from "./pages/Order";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Composant séparé pour utiliser useNavigate
// Dans App.tsx
function AppContent() {
  const navigate = useNavigate();
  
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
          { icon: <Instagram />, href: "https://www.instagram.com" },
          { icon: <Facebook />, href: "https://www.facebook.com" },
          { icon: <Twitter />, href: "https://www.twitter.com" },
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