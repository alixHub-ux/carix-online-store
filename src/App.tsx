import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Order from "./pages/Order";
import { Instagram, Facebook, Twitter } from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "products":
        return <Products />;
      case "about":
        return <About />;
      case "order":
        return <Order />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <Header
      linkSize="text-xl"
        logo={
          <div className="flex items-center gap-2 text-brownDark font-bold text-2xl">
            <span className="text-2xl">♥</span> Carix
          </div>
        }
        links={[
          { name: "Acceuil", href: "#", onClick: () => setCurrentPage("home") },
          { name: "Produits", href: "#", onClick: () => setCurrentPage("products") },
          { name: "À propos", href: "#", onClick: () => setCurrentPage("about") },
          { name: "Commander", href: "#", onClick: () => setCurrentPage("order") },
        ]}
      />

      {/* Contenu de la page */}
      <main className="min-h-screen">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        description="Handcrafted crochet clothing with a personal touch."
        email="carix.online.store@gmail.com"
        phone="+226 54 67 56 55"
        links={[
          { label: "Acceuil", href: "#", onClick: () => setCurrentPage("home") },
          { label: "Produits", href: "#", onClick: () => setCurrentPage("products") },
          { label: "Nous", href: "#", onClick: () => setCurrentPage("about") },
          { label: "Commander", href: "#", onClick: () => setCurrentPage("order") },
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

export default App;