import Badge from "./components/ui/Badge"; // importe ton Badge (ajuste le chemin si besoin)
import Card1 from "./components/ui/Card1"; // importe ton Card1 (ajuste le chemin si besoin)
import Card2 from "./components/ui/Card2"; // importe ton Card2 (ajuste le chemin si besoin)
import CustomButton from "./components/ui/CustomButton"; // importe ton Button (ajuste le chemin si besoin)
import Arrow from "./assets/icons/Arrow.svg";

import Shirt from "./assets/images/chemise.jpeg";
import Top from "./assets/images/top.jpeg";

function App() {
  const handleFavorite = (title: string) => {
    alert(`Produit "${title}" ajouté aux favoris !`);
  };
  return (
    <div className="p-20 bg-ivory">

      {/* Badges */}

      <div className=" w-full h-10vh flex gap-50">
        <Badge label="Handcrafted" label2="Excellence" />

        <Badge label="Sustainable" label2="Materials" />

       <Badge label="Timeless Design"/>

        <Badge label="Personal Touch"/>
      </div>

      {/* Card1 */}

      <div className=" w-full h-10vh flex gap-10">
        <Card1
        category="Habits"
        title="Chemise"
        description="Chemise élégante en crochet, confectionnée en laine douce et respirante.Son style artisanal apporte une touche bohème et chaleureuse, idéale pour un look à la fois chic et décontracté."
        price={"50"}
        imageUrl={Shirt}
        rating={5}
        onFavoriteClick={() => handleFavorite("Chemise")}
      />

      <Card1
        category="Habits"
        title="Top"
        description="Top en crochet réalisé à la main avec une laine douce et légère. Son design unique apporte une touche bohème et cosy, parfait à porter seul en été ou superposé en saison fraîche."
        price={"10"}
        imageUrl={Top}
        rating={5}
        onFavoriteClick={() => handleFavorite("Top")}
      />
      </div>

      {/* Card2 */}

      <div className=" w-full h-10vh flex gap-10 mt-20">
        <Card2
          src={Top}
          alt="Top en crochet"
          maxWidthClass="max-w-65 max-h-40"
          className="mx-auto"
        />
      </div>

      {/* Button */}

      <div className="mt-7 flex gap-5 w-full" >
        <CustomButton 
        text = "Click me"
        background = "bg-brownDark"
        textColor = "text-white"
         ></CustomButton>

        <CustomButton 
        text = "Click me again"
        background = "bg-ivory"
        textColor = "text-brownDark"
        border = {true}
        borderColor = "border-brownDark"
        icon={<img src={Arrow} alt="arrow icon" className="w-6 h-6" />}
         ></CustomButton>


      </div>

    </div>

  );
}
export default App;
