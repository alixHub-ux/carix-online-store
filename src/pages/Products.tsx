import { useState, useEffect, useRef } from "react";
import { Heart, Search, Star, ShoppingBag } from "lucide-react";
import Shirt from "../assets/images/chemise.jpeg";
import Top from "../assets/images/top.jpeg";
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
  const [isVisible, setIsVisible] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "Chemise Élégante",
      category: "Clothes",
      description: "Chemise en crochet confectionnée en laine douce, style bohème chic",
      price: 15000,
      rating: 5,
      image: Shirt,
    },
    {
      id: 2,
      name: "Top Tricoté",
      category: "Clothes",
      description: "Top artisanal parfait pour l'été, respirant et confortable",
      price: 12000,
      rating: 5,
      image: Top,
    },
    {
      id: 3,
      name: "Pull Artisanal",
      category: "Clothes",
      description: "Pull chaud en laine tricotée à la main pour l'hiver",
      price: 25000,
      rating: 5,
      image: Shirt,
    },
    {
      id: 4,
      name: "Écharpe Personnalisée",
      category: "Clothes",
      description: "Écharpe douce et chaude, disponible en plusieurs couleurs",
      price: 8000,
      rating: 4,
      image: Top,
    },
    {
      id: 5,
      name: "Chouchou Élégant",
      category: "Scrunchies",
      description: "Chouchou en crochet doux pour cheveux, parfait pour le quotidien",
      price: 1500,
      rating: 5,
      image: Shirt,
    },
    {
      id: 6,
      name: "Set de Chouchous",
      category: "Scrunchies",
      description: "Lot de 3 chouchous assortis en différentes couleurs",
      price: 4000,
      rating: 5,
      image: Top,
    },
    {
      id: 7,
      name: "Ourson en Tricot",
      category: "Plush Toys",
      description: "Adorable ourson tricoté à la main, parfait cadeau pour enfants",
      price: 10000,
      rating: 5,
      image: Shirt,
    },
    {
      id: 8,
      name: "Lapin Artisanal",
      category: "Plush Toys",
      description: "Peluche lapin en crochet, doux et câlin",
      price: 12000,
      rating: 5,
      image: Top,
    },
    {
      id: 9,
      name: "Cardigan Chunky",
      category: "Clothes",
      description: "Cardigan oversize tricoté, style moderne et confortable",
      price: 28000,
      rating: 4,
      image: Shirt,
    },
    {
      id: 10,
      name: "Gants Sans Doigts",
      category: "Clothes",
      description: "Mitaines stylées pour rester au chaud tout en gardant vos mains libres",
      price: 6000,
      rating: 5,
      image: Top,
    },
  ];

  const categories = ["Tout", "Vêtements", "Chouchous", "Peluches"];
  
  const categoryMap: { [key: string]: string } = {
    "Tout": "All",
    "Vêtements": "Clothes",
    "Chouchous": "Scrunchies",
    "Peluches": "Plush Toys"
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
      <section className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
      <section
        ref={productsRef}
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-20"
      >
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-coffee">Aucun produit trouvé</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Badge catégorie */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-mint/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brownDark">
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