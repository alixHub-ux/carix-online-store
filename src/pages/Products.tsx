import { useState, useEffect, useRef } from "react";
import { Heart, Search, Star, ShoppingBag } from "lucide-react";
// Category Clothes
import Shirt from "../assets/images/chemise1.jpeg";
import Shirt1 from "../assets/images/chemise3.jpeg";
import Top from "../assets/images/top1.jpeg";
import Top2 from "../assets/images/top2.jpeg";
import Top3 from "../assets/images/top3.jpeg";
import Top4 from "../assets/images/top4.jpeg";
import Top5 from "../assets/images/top5.jpeg";
import Top6 from "../assets/images/top6.jpeg";
import Jupe1 from "../assets/images/jupe1.jpeg";
import Robe from "../assets/images/robe1.jpeg";
import Robe2 from "../assets/images/robe.jpeg"; 
import Robe3 from "../assets/images/robe3.jpeg";
import Bolero from "../assets/images/bolero1.jpeg";
import Bolero1 from "../assets/images/bolero2.jpeg";
import Bolero2 from "../assets/images/bolero3.jpeg";
import Bolero3 from "../assets/images/bolero4.jpeg";

//Caterory Acessoiries
import Bandeau1 from "../assets/images/bandeau1.jpeg";
import Bandeau2 from "../assets/images/bandeau2.jpeg";
import Bandeau5 from "../assets/images/bandeau5.jpeg";
import Scrunchie1 from "../assets/images/scrunchie1.jpeg";
import Scrunchie2 from "../assets/images/scrunchie2.jpeg";
import Scrunchie3 from "../assets/images/scrunchie3.jpeg";
import Sac1 from "../assets/images/sac1.jpeg";
import Sac3 from "../assets/images/sac3.jpeg";
import Sac4 from "../assets/images/sac4.jpeg";
import Pochette from "../assets/images/pochette.jpeg";
import Pochette1 from "../assets/images/pochette1.jpeg";
import Pochette3 from "../assets/images/pochette3.jpeg";
import Pochette4 from "../assets/images/pochette4.jpeg";
import Porteclef from "../assets/images/porte_cle.jpeg";
import PorteClef1 from "../assets/images/porte_cle1.jpeg";
import Noeud from "../assets/images/noeud.jpeg";
import Noeud1 from "../assets/images/noeud1.jpeg";
import Noeud3 from "../assets/images/noeud3.jpeg";

import CustomButton from "../components/ui/CustomButton";
import { useNavigate } from 'react-router-dom'; 

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

function Products() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState<Set<number>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Hero s'affiche immédiatement au chargement
  useEffect(() => {
    setHeroVisible(true);
  }, []);

  // Observer pour les produits - s'affichent au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = parseInt(entry.target.getAttribute('data-product-id') || '0');
            setVisibleProducts(prev => new Set([...prev, productId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    Object.values(productRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "Chemise Élégante",
      category: "Clothes",
      description: "Chemise en crochet confectionnée en laine douce, style bohème chic",
      price: 17000,
      rating: 5,
      image: Shirt,
    },
    {
      id: 17,
      name: "Bandeau stylé",
      category: "Accessories",
      description: "Bandeau tricoté à la main avec des motifs uniques et colorés",
      price: 500,
      rating: 4,
      image: Bandeau1,
    },
    {
      id: 2,
      name: "Top Tricoté",
      category: "Clothes",
      description: "Top artisanal parfait pour l'été, respirant et confortable",
      price: 3000,
      rating: 5,
      image: Top,
    },
    {
      id: 18,
      name: "Taute Sac",
      category: "Accessories",
      description: "Sac à main unique en son genre, tissé à la main avec des matériaux durables",
      price: 6000,
      rating: 5,
      image: Sac1,
    },
    {
      id: 3,
      name: "Robe de Laine",
      category: "Clothes",
      description: "Robe en laine tricotée, élégante et confortable pour toutes les occasions",
      price: 10000,
      rating: 5,
      image: Robe,
    },
    {
      id: 19,
      name: "Porte-clés Amusant",
      category: "Accessories",
      description: "Porte-clés tricoté à la main en forme de rose colorée",
      price: 500,
      rating: 5,
      image: Porteclef,
    },
    {
      id: 4,
      name: "Boléro",
      category: "Clothes",
      description: "Boléro en laine tricotée, parfait pour les soirées fraîches",
      price: 4000,
      rating: 4,
      image: Bolero,
    },
    {
      id: 20,
      name: "Noeud pour Cheveux",
      category: "Accessories",
      description: "Noeud tricoté à la main, idéal pour accessoiriser vos coiffures",
      price: 1000,
      rating: 5,
      image: Noeud,
    },
    {
      id: 5,
      name: "Top Chic Blanc",
      category: "Clothes",
      description: "Top blanc en crochet, élégant et polyvalent",
      price: 3500,
      rating: 5,
      image: Top6,
    },
    {
      id: 21,
      name: "Pochette",
      category: "Accessories",
      description: "Pochette tricotée à la main pour téléphone, pratique et stylée",
      price: 2000,
      rating: 4,
      image: Pochette,
    },
    {
      id: 6,
      name: "Mini Robe",
      category: "Clothes",
      description: "Robe courte en laine tricotée, parfaite pour un look décontracté",
      price: 7000,
      rating: 5,
      image: Robe2,
    },
    {
      id: 22,
      name: "Scrunchie Tournesol",
      category: "Accessories",
      description: "Scrunchie tricoté à la main, disponible en plusieurs couleurs vives",
      price: 1500,
      rating: 5,
      image: Scrunchie1,
    },
    {
      id: 7,
      name: "Chemise en Tricot",
      category: "Clothes",
      description: "Chemise en crochet confortable, idéale pour un usage quotidien",
      price: 12000,
      rating: 5,
      image: Shirt1,
    },
    {
      id: 23,
      name: "Bandeau Rayé",
      category: "Accessories",
      description: "Bandeau tricoté à la main avec un motif grillage classique",
      price: 500,
      rating: 4,
      image: Bandeau2,
    },
    {
      id: 8,
      name: "Haut Coupe",
      category: "Clothes",
      description: "Haut tricoté à la main avec une coupe moderne et élégante",
      price: 3500,
      rating: 5,
      image: Top3,
    },
    {
      id: 24,
      name: "Sac Tissé",
      category: "Accessories",
      description: "Sac tissé à la main avec des matériaux naturels, idéal pour une sortie décontractée",
      price: 12000,
      rating: 5,
      image: Sac3,
    },
    {
      id: 9,
      name: "Boléro Oversize",
      category: "Clothes",
      description: "Cardigan oversize tricoté, style moderne et confortable",
      price: 5000,
      rating: 4,
      image: Bolero3,
    },
    {
      id: 25,
      name: "Coque de Teléphone",
      category: "Accessories",
      description: "Coque tricotée à la main avec des couleurs vives et un design unique",
      price: 3000,
      rating: 4,
      image: Pochette4,
    },
    {
      id: 26,
      name: "Scrunchie Pastel",
      category: "Accessories",
      description: "Scrunchie tricoté à la main dans des tons pastel doux",
      price: 1000,
      rating: 5,
      image: Scrunchie3,
    },
    {
      id: 10,
      name: "Robe Longue Granny Square",
      category: "Clothes",
      description: "Robe longue en laine tricotée, élégante et confortable",
      price: 20000,
      rating: 4,
      image: Robe3,
    },
    {
      id: 27,
      name: "Porte-clés Cerise",
      category: "Accessories",
      description: "Porte-clés tricoté à la main en forme de cerise, un accessoire charmant",
      price: 300,
      rating: 5,
      image: PorteClef1,
    },
    {
      id: 11,
      name: "Haut Granny Square",
      category: "Clothes",
      description: "Haut tricoté à la main avec un motif granny square coloré",
      price: 4000,
      rating: 5,
      image: Top5,
    },
    {
      id: 28,
      name: "Bandeau Coeur",
      category: "Accessories",
      description: "Bandeau tricoté à la main dans des tons doux",
      price: 1000,
      rating: 4,
      image: Bandeau5,
    },
    {
      id: 12,
      name: "Jupe",
      category: "Clothes",
      description: "Jupe en crochet faite main avec un design unique et élégant",
      price: 6000,
      rating: 5,
      image: Jupe1,
    },
    {
      id: 29,
      name: "Noeud Papillon",
      category: "Accessories",
      description: "Noeud papillon tricoté à la main, parfait pour les occasions spéciales",
      price: 2000,
      rating: 5,
      image: Noeud1,
    },
    {
      id: 13,
      name: "Top Elegant Bleu",
      category: "Clothes",
      description: "Top tricoté à la main avec un design élégant en bleu pastel",
      price: 3000,
      rating: 5,
      image: Top4,
    },
    {
      id: 30,
      name: "Pochette Fleurie",
      category: "Accessories",
      description: "Pochette tricotée à la main avec un motif floral délicat",
      price: 3000,
      rating: 4,
      image: Pochette3,
    },
    {
      id: 14,
      name: "Boléro Chunky",
      category: "Clothes",
      description: "Cardigan oversize tricoté, style moderne et confortable",
      price: 4000,
      rating: 4,
      image: Bolero1,
    },
    {
      id: 31,
      name: "Noeud Papillon Classique",
      category: "Accessories",
      description: "Noeud papillon tricoté à la main avec un design classique idéal pour attacher vos cheveux",
      price: 4000,
      rating: 5,
      image: Noeud3,
    },
    {
      id: 15,
      name: "Boléro",
      category: "Clothes",
      description: "Boléro en laine tricotée avec des motifs élégants",
      price: 5000,
      rating: 4,
      image: Bolero2,
    },
    {
      id: 32,
      name: "Scrunchie Doux",
      category: "Accessories",
      description: "Scrunchie tricoté à la main avec un tissu doux et confortable",
      price: 2000,
      rating: 5,
      image: Scrunchie2,
    },
    {
      id: 16,
      name: "Top Pastel",
      category: "Clothes",
      description: "Top tricoté à la main dans des tons pastel doux",
      price: 4000,
      rating: 5,
      image: Top2,
    },
    {
      id: 33,
      name: "Pochette Chic",
      category: "Accessories",
      description: "Pochette tricotée à la main avec des détails élégants",
      price: 4500,
      rating: 4,
      image: Pochette1,
    },
    {
      id: 34,
      name: "Sac Granny Square",
      category: "Accessories",
      description: "Sac tricoté à la main avec un motif granny square coloré",
      price: 5000,
      rating: 5,
      image: Sac4,
    }
  ];

  const categories = ["Tout", "Vêtements", "Accessoires"];
  
  const categoryMap: { [key: string]: string } = {
    "Tout": "All",
    "Vêtements": "Clothes",
    "Accessoires": "Accessories",
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const englishCategory = categoryMap[selectedCategory] || selectedCategory;
    const matchesCategory = selectedCategory === "Tout" || product.category === englishCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOrderClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/order'); 
  };

  return (
    <div className="w-full min-h-screen bg-ivory overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20"
      >
        <div className={`text-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 text-coffee mb-6">
            <Heart size={20} className="sm:w-6 sm:h-6" />
            <h2 className="text-sm sm:text-base md:text-lg font-medium">OUR COLLECTION</h2>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-brownDark mb-4">
            Accessoires Faits à la Main
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-coffee max-w-3xl mx-auto leading-relaxed mb-8">
            Parcourez notre collection soigneusement sélectionnée d'accessoires tricotés à la main, chaque pièce étant confectionnée avec amour et souci du détail.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee/60" size={20} />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-coffee/20 bg-white/80 backdrop-blur-sm focus:border-coffee focus:outline-none transition-all text-brownDark placeholder:text-coffee/40"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-3 justify-center flex-wrap mb-8">
            <button className="p-2 rounded-lg border-2 border-coffee/20 bg-white/50 text-coffee hover:bg-coffee/10 transition-all">
              <Search size={20} />
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-brownDark text-white"
                    : "bg-white/50 text-brownDark hover:bg-white/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-coffee">Aucun produit trouvé</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                ref={el => productRefs.current[product.id] = el}
                data-product-id={product.id}
                className={`bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                  visibleProducts.has(product.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index % 8) * 100}ms` }}
              >
                {/* Badge catégorie */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-mint backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brownDark">
                      {product.category}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brownDark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < product.rating ? "text-amber-400 fill-amber-400" : "text-coffee/20"}
                      />
                    ))}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-brownDark mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-coffee/80 mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-bold text-brownDark">
                      {product.price.toLocaleString()} F
                    </span>
                    <button
                      onClick={handleOrderClick}
                      className="bg-brownDark text-white px-3 py-2 rounded-full hover:bg-coffee transition-all duration-300 flex items-center gap-1.5 text-xs font-medium hover:scale-105"
                    >
                      <ShoppingBag size={14} />
                      Commander
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-mint/20 to-coffee/10 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brownDark mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-coffee mb-8 max-w-2xl mx-auto">
            Nous créons également des pièces personnalisées ! Contactez-nous et laissez-nous donner vie à votre vision avec notre touche artisanale.
          </p>
          <CustomButton
            text="Demander une Commande Personnalisée"
            background="bg-brownDark"
            textColor="text-white"
            className="hover:bg-coffee transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/order')}
          />
        </div>
      </section>
    </div>
  );
}

export default Products;