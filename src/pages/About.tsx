import Card2 from "../components/ui/Card2";
import Badge from "../components/ui/Badge";
import Stat from "../components/ui/Stat";
import Top from "../assets/images/top.jpeg";
import Shirt from "../assets/images/chemise.jpeg";

function About() {
  return (
    <div className="p-20 bg-ivory">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-5xl font-bold text-brownDark mb-6">
          Notre Histoire
        </h1>
        <p className="text-xl text-brownLight max-w-3xl mx-auto leading-relaxed">
          Carix est née d'une passion pour l'artisanat et la mode durable. 
          Chaque pièce que nous créons raconte une histoire, celle de mains 
          expertes qui transforment la laine en œuvres d'art portables.
        </p>
      </section>

      {/* Image Section */}
      <section className="mb-20">
        <div className="flex justify-center gap-10 flex-wrap">
          <Card2
            src={Top}
            alt="Artisan au travail"
            maxWidthClass="max-w-md"
            className="mx-auto"
          />
          <Card2
            src={Shirt}
            alt="Création en cours"
            maxWidthClass="max-w-md"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-brownDark mb-12 text-center">
          Nos Valeurs
        </h2>
        <div className="flex gap-10 justify-center flex-wrap">
          <Badge label="Handcrafted" label2="Excellence" />
          <Badge label="Sustainable" label2="Materials" />
          <Badge label="Timeless Design" />
          <Badge label="Personal Touch" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-brownDark mb-6">
          Notre Mission
        </h2>
        <div className="space-y-4 text-brownLight text-lg leading-relaxed">
          <p>
            Chez Carix, nous croyons que la mode peut être à la fois belle et responsable. 
            Notre mission est de créer des vêtements qui durent, qui respectent l'environnement 
            et qui célèbrent le savoir-faire artisanal.
          </p>
          <p>
            Chaque pièce est confectionnée à la main avec des matériaux soigneusement 
            sélectionnés pour leur qualité et leur durabilité. Nous travaillons avec 
            des artisans locaux pour préserver les techniques traditionnelles du crochet 
            tout en créant des designs modernes et intemporels.
          </p>
          <p>
            Notre engagement va au-delà de la simple création de vêtements. Nous voulons 
            inspirer un mouvement vers une mode plus consciente, où chaque achat est un 
            vote pour un monde meilleur.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-brownDark mb-12 text-center">
          Notre Impact
        </h2>
        <div className="flex gap-10 justify-center flex-wrap">
          <Stat
            mainTitle="150+"
            mainTitleColor="text-brownDark"
            description="Happy Customers"
            descriptionColor="text-brownLight"
          />
          <Stat
            mainTitle="300+"
            mainTitleColor="text-brownDark"
            description="Products Created"
            descriptionColor="text-brownLight"
          />
          <Stat
            mainTitle="5 Years"
            mainTitleColor="text-brownDark"
            description="Of Experience"
            descriptionColor="text-brownLight"
          />
          <Stat
            mainTitle="100%"
            mainTitleColor="text-brownDark"
            description="Eco-Friendly"
            descriptionColor="text-brownLight"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-brownDark mb-6">
          Notre Équipe
        </h2>
        <p className="text-lg text-brownLight max-w-2xl mx-auto">
          Derrière Carix, il y a une équipe passionnée d'artisans et de créateurs 
          qui mettent leur cœur dans chaque point de crochet. Ensemble, nous 
          tissons plus que des vêtements, nous tissons des liens.
        </p>
      </section>
    </div>
  );
}

export default About;