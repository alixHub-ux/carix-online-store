import { useState } from "react";
import CustomButton from "../components/ui/CustomButton";
import Card1 from "../components/ui/Card1";
import Badge from "../components/ui/Badge";
import Arrow from "../assets/icons/Arrow.svg";
import Shirt from "../assets/images/chemise.jpeg";
import Top from "../assets/images/top.jpeg";

function Order() {
  const [cart, setCart] = useState<Array<{ title: string; price: string }>>([]);

  const handleAddToCart = (title: string, price: string) => {
    setCart([...cart, { title, price }]);
    alert(`${title} ajouté au panier !`);
  };

  const handleFavorite = (title: string) => {
    alert(`Produit "${title}" ajouté aux favoris !`);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <div className="p-20 bg-ivory">
      {/* Header Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-brownDark mb-4">
          Commander
        </h1>
        <p className="text-xl text-brownLight max-w-3xl mx-auto">
          Sélectionnez vos articles préférés et passez commande en toute simplicité
        </p>
      </section>

      {/* Trust Badges */}
      <section className="mb-12">
        <div className="flex gap-8 justify-center flex-wrap">
          <Badge label="Secure" label2="Payment" />
          <Badge label="Fast" label2="Delivery" />
          <Badge label="Easy" label2="Returns" />
        </div>
      </section>

      {/* Products Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-brownDark mb-8">
          Produits Disponibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card1
            category="Habits"
            title="Chemise"
            description="Chemise élégante en crochet, confectionnée en laine douce et respirante."
            price="50"
            imageUrl={Shirt}
            rating={5}
            onFavoriteClick={() => handleFavorite("Chemise")}
          />

          <Card1
            category="Habits"
            title="Top"
            description="Top en crochet réalisé à la main avec une laine douce et légère."
            price="10"
            imageUrl={Top}
            rating={5}
            onFavoriteClick={() => handleFavorite("Top")}
          />

          <Card1
            category="Habits"
            title="Pull Bohème"
            description="Pull confortable en crochet, parfait pour les journées fraîches."
            price="75"
            imageUrl={Shirt}
            rating={5}
            onFavoriteClick={() => handleFavorite("Pull")}
          />
        </div>
      </section>

      {/* Shopping Cart */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-brownDark mb-8">
          Votre Panier ({cart.length})
        </h2>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg p-10 text-center shadow-sm">
            <p className="text-brownLight text-lg">
              Votre panier est vide. Ajoutez des produits pour commencer !
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 shadow-sm">
            {cart.map((item, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center py-4 border-b border-gray-200"
              >
                <span className="text-brownDark font-medium">{item.title}</span>
                <span className="text-brownDark font-bold">{item.price}€</span>
              </div>
            ))}
            
            <div className="mt-6 pt-6 border-t-2 border-brownDark">
              <div className="flex justify-between items-center text-2xl font-bold text-brownDark">
                <span>Total:</span>
                <span>{getTotalPrice().toFixed(2)}€</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Quick Add Buttons */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-brownDark mb-6 text-center">
          Ajout Rapide
        </h3>
        <div className="flex gap-5 justify-center flex-wrap">
          <CustomButton
            text="Ajouter Chemise (50€)"
            background="bg-brownDark"
            textColor="text-white"
            onClick={() => handleAddToCart("Chemise", "50")}
          />
          <CustomButton
            text="Ajouter Top (10€)"
            background="bg-brownDark"
            textColor="text-white"
            onClick={() => handleAddToCart("Top", "10")}
          />
          <CustomButton
            text="Ajouter Pull (75€)"
            background="bg-brownDark"
            textColor="text-white"
            onClick={() => handleAddToCart("Pull", "75")}
          />
        </div>
      </section>

      {/* Contact & Order Section */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-brownDark mb-6 text-center">
            Finaliser la Commande
          </h2>
          <p className="text-brownLight text-center mb-8 text-lg">
            Pour passer commande, contactez-nous par email ou téléphone avec 
            votre sélection
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="text-center">
              <p className="text-brownDark font-semibold">Email:</p>
              <p className="text-brownLight">carix.online.store@gmail.com</p>
            </div>
            <div className="text-center">
              <p className="text-brownDark font-semibold">Téléphone:</p>
              <p className="text-brownLight">+226 54 67 56 55</p>
            </div>
          </div>

          <div className="flex gap-5 justify-center flex-wrap">
            <CustomButton
              text="Nous Contacter"
              background="bg-brownDark"
              textColor="text-white"
            />
            <CustomButton
              text="Questions?"
              background="bg-ivory"
              textColor="text-brownDark"
              border={true}
              borderColor="border-brownDark"
              icon={<img src={Arrow} alt="arrow icon" className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;