import Card1 from "../components/ui/Card1";
import Card2 from "../components/ui/Card2";
import Card3 from "../components/ui/Card3";
import Shirt from "../assets/images/chemise.jpeg";
import Top from "../assets/images/top.jpeg";

function Products() {
  const handleFavorite = (title: string) => {
    alert(`Produit "${title}" ajouté aux favoris !`);
  };

  return (
    <div className="p-20 bg-ivory">
      {/* Header Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-brownDark mb-4">
          Notre Collection
        </h1>
        <p className="text-xl text-brownLight max-w-3xl mx-auto">
          Découvrez notre gamme complète de vêtements en crochet, 
          confectionnés à la main avec des matériaux durables et de qualité
        </p>
      </section>

      {/* Grid Products - Card1 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-brownDark mb-8">
          Nouveautés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card1
            category="Habits"
            title="Chemise"
            description="Chemise élégante en crochet, confectionnée en laine douce et respirante. Son style artisanal apporte une touche bohème."
            price="50"
            imageUrl={Shirt}
            rating={5}
            onFavoriteClick={() => handleFavorite("Chemise")}
          />

          <Card1
            category="Habits"
            title="Top"
            description="Top en crochet réalisé à la main avec une laine douce et légère. Son design unique apporte une touche bohème et cosy."
            price="10"
            imageUrl={Top}
            rating={5}
            onFavoriteClick={() => handleFavorite("Top")}
          />

          <Card1
            category="Habits"
            title="Pull Bohème"
            description="Pull confortable en crochet, parfait pour les journées fraîches. Matériaux naturels et durables."
            price="75"
            imageUrl={Shirt}
            rating={5}
            onFavoriteClick={() => handleFavorite("Pull")}
          />
        </div>
      </section>

      {/* Featured Product - Card2 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-brownDark mb-8 text-center">
          Coup de Cœur
        </h2>
        <div className="flex justify-center">
          <Card2
            src={Top}
            alt="Top en crochet"
            maxWidthClass="max-w-4xl"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Categories - Card3 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-brownDark mb-8">
          Nos Catégories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card3
            backgroundImg={Shirt}
            chipText="1"
            chipBgColor="bg-brownDark"
            chipTextColor="text-ivory"
            mainTitle="Chemises & Hauts"
            description="Une collection de chemises et tops élégants, confectionnés en crochet avec des matériaux de qualité. Parfaits pour toutes les occasions."
          />

          <Card3
            backgroundImg={Top}
            chipText="2"
            chipBgColor="bg-brownDark"
            chipTextColor="text-ivory"
            mainTitle="Accessoires"
            description="Sacs, écharpes et accessoires uniques qui complètent parfaitement votre style bohème et chic."
          />
        </div>
      </section>
    </div>
  );
}

export default Products;