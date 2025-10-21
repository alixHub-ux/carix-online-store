import Card2 from "../components/ui/Card2";
import Card3 from "../components/ui/Card3";
import Badge from "../components/ui/Badge";
import Stat from "../components/ui/Stat";
import Shirt from "../assets/images/chemise.jpeg";
import { Heart, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function About() {
    // Refs et states pour les animations
    const heroRef = useRef<HTMLElement>(null);
    const valuesRef = useRef<HTMLElement>(null);
    const processRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLElement>(null);
    const teamRef = useRef<HTMLElement>(null);

    const [isHeroVisible, setIsHeroVisible] = useState(false);
    const [isValuesVisible, setIsValuesVisible] = useState(false);
    const [isProcessVisible, setIsProcessVisible] = useState(false);
    const [isStatsVisible, setIsStatsVisible] = useState(false);
    const [isTeamVisible, setIsTeamVisible] = useState(false);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const createObserver = (ref: React.RefObject<HTMLElement>, setState: React.Dispatch<React.SetStateAction<boolean>>) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setState(true);
                        }
                    });
                },
                observerOptions
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return observer;
        };

        const observers = [
            createObserver(heroRef, setIsHeroVisible),
            createObserver(valuesRef, setIsValuesVisible),
            createObserver(processRef, setIsProcessVisible),
            createObserver(statsRef, setIsStatsVisible),
            createObserver(teamRef, setIsTeamVisible),
        ];

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-ivory overflow-hidden">
            {/* Hero Section */}
            <section 
                ref={heroRef}
                className="mb-16 sm:mb-20 lg:mb-24 flex flex-col lg:flex-row gap-8 lg:gap-20"
            >
                <div 
                    className={`flex-1 transition-all duration-700 ${
                        isHeroVisible 
                            ? "opacity-100 translate-x-0" 
                            : "opacity-0 -translate-x-12"
                    }`}
                >
                    <div className="flex gap-4 items-center mb-6">
                        <Heart size={20} className="sm:w-6 sm:h-6 text-coffee" />
                        <h1 className="text-base sm:text-lg md:text-xl font-light text-brownDark">
                            Notre Histoire
                        </h1>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-brownDark font-bold mb-6">
                        Créer la beauté <br /> un point à la fois
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-coffee leading-relaxed">
                        Née d'une passion pour la création de magnifiques accessoires artisanaux, Carix vous propose des pièces en maille raffinées, confectionnées avec amour et souci du détail. Chaque article est confectionné avec soin selon des techniques traditionnelles transmises de génération en génération.
                    </p>
                </div>

                <div 
                    className={`flex-1 flex justify-center gap-4 sm:gap-6 lg:gap-10 relative transition-all duration-700 delay-200 ${
                        isHeroVisible 
                            ? "opacity-100 translate-x-0" 
                            : "opacity-0 translate-x-12"
                    }`}
                >
                    <Card2
                        src={Shirt}
                        alt="Artisan au travail"
                        maxWidthClass="w-full max-w-[200px] sm:max-w-xs"
                        className="hover:scale-105 transition-transform duration-300"
                    />
                    <Card2
                        src={Shirt}
                        alt="Création en cours"
                        maxWidthClass="w-full max-w-[200px] sm:max-w-xs"
                        className="z-10 relative top-10 sm:top-20 hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </section>

            {/* Our Values */}
            <section 
                ref={valuesRef}
                className="mb-16 sm:mb-20 lg:mb-24 flex flex-col"
            >
                <div 
                    className={`w-[35%] xl:w-[13%] l inline-flex items-center gap-2 sm:gap-3 text-coffee mb-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-700 ${
                        isValuesVisible 
                            ? "opacity-100 scale-100" 
                            : "opacity-0 scale-95"
                    }`}
                >
                    <Sparkles
                        size={20}
                        className="sm:w-6 sm:h-6 flex-shrink-0 animate-spin-slow text-coffee"
                    />
                    <h2 className="text-sm sm:text-base md:text-lg font-medium">
                        Quelle est
                    </h2>
                </div>

                <h2 
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold text-brownDark mb-8 sm:mb-12 transition-all duration-700 delay-100 ${
                        isValuesVisible 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    Notre Raison d'Être
                </h2>

                <p 
                    className={`text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-3xl transition-all duration-700 delay-200 ${
                        isValuesVisible 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    Plus qu'un accessoire, un engagement. <br />
                    Nous créons des pièces tricotées uniques où le style ne fait jamais de compromis sur le confort ou la durabilité. Portez notre histoire : chaque maille est le fruit d'un savoir-faire passionné et d'une vision responsable de la mode.
                </p>

            </section>

            <section className="mb-20 flex flex-col items-center" >
                <div 
                    className={` grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl w-full px-4 transition-all duration-700 delay-300 ${
                        isValuesVisible 
                            ? "opacity-100 scale-100" 
                            : "opacity-0 scale-95"
                    }`}
                >
                    <Badge label="Excellence" label2="Artisanale" />
                    <Badge label="Matériaux" label2="Durables" />
                    <Badge label="Conceptions" label2="Intemporelles" />
                    <Badge label="Touche" label2="Personnelle" />
                </div>
            </section>

            {/* Mission Statement */}
            <section 
                ref={processRef}
                className="mb-16 sm:mb-20 lg:mb-24 max-w-6xl mx-auto flex flex-col items-center"
            >
                <div 
                    className={`inline-flex items-center gap-2 sm:gap-3 text-coffee mb-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-700 ${
                        isProcessVisible 
                            ? "opacity-100 scale-100" 
                            : "opacity-0 scale-95"
                    }`}
                >
                    <Sparkles
                        size={20}
                        className="sm:w-6 sm:h-6 flex-shrink-0 animate-spin-slow text-coffee"
                    />
                    <h2 className="text-sm sm:text-base md:text-lg font-medium">
                        Notre Processus
                    </h2>
                </div>

                <h2 
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold text-brownDark mb-8 sm:mb-12 text-center transition-all duration-700 delay-100 ${
                        isProcessVisible 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    Comment Notre Magie Opère
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full px-4">
                    {[
                        {
                            title: "Sélection des matériaux",
                            description: "Nous sélectionnons soigneusement les meilleurs fils et matériaux, garantissant durabilité et qualité dans chaque choix.",
                            delay: "delay-200"
                        },
                        {
                            title: "Fabrication artisanale",
                            description: "Nos artisans qualifiés donnent vie à chaque pièce, en utilisant des techniques traditionnelles transmises de génération en génération.",
                            delay: "delay-300"
                        },
                        {
                            title: "Assurance qualité",
                            description: "Chaque produit est minutieusement inspecté pour garantir qu'il répond à nos normes élevées avant d'être expédié.",
                            delay: "delay-500"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${item.delay} ${
                                isProcessVisible 
                                    ? "opacity-100 translate-y-0" 
                                    : "opacity-0 translate-y-12"
                            }`}
                        >
                            <Card3
                                backgroundImg={Shirt}
                                chipText={String(index + 1)}
                                chipBgColor="bg-brownDark"
                                chipTextColor="text-ivory"
                                mainTitle={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section 
                ref={statsRef}
                className="mb-16 sm:mb-20 lg:mb-24"
            >
                <h2 
                    className={`text-2xl sm:text-3xl font-bold text-brownDark mb-8 sm:mb-12 text-center transition-all duration-700 ${
                        isStatsVisible 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    Notre Impact
                </h2>

                <div 
                    className={`pl-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto transition-all duration-700 delay-200 ${
                        isStatsVisible 
                            ? "opacity-100 scale-100" 
                            : "opacity-0 scale-95"
                    }`}
                >
                    <Stat
                        mainTitle="500+"
                        mainTitleColor="text-brownDark"
                        description="Clients Satisfaits"
                        descriptionColor="text-brownLight"
                    />
                    <Stat
                        mainTitle="300+"
                        mainTitleColor="text-brownDark"
                        description="Produits Créés"
                        descriptionColor="text-brownLight"
                    />
                    <Stat
                        mainTitle="5 Years"
                        mainTitleColor="text-brownDark"
                        description="D'expérience"
                        descriptionColor="text-brownLight"
                    />
                    <Stat
                        mainTitle="100%"
                        mainTitleColor="text-brownDark"
                        description="Respectueux de l'environnement"
                        descriptionColor="text-brownLight"
                    />
                </div>
            </section>

            {/* Team Section */}
            <section 
                ref={teamRef}
                className="mb-16"
            >
                <div 
                    className={`transition-all duration-700 ${
                        isTeamVisible 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 translate-y-12"
                    }`}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-brownDark mb-4 sm:mb-6">
                        Notre Équipe
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-coffee leading-relaxed max-w-3xl mb-12">
                        Derrière Carix, il y a une équipe passionnée d'artisans et de créateurs
                        qui mettent leur cœur dans chaque point de crochet. Ensemble, nous
                        tissons plus que des vêtements, nous tissons des liens.
                    </p>

                    {/* Fondatrice */}
                    <div 
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 max-w-4xl transition-all duration-700 delay-200 ${
                            isTeamVisible 
                                ? "opacity-100 scale-100" 
                                : "opacity-0 scale-95"
                        }`}
                    >
                        {/* Photo circulaire */}
                        <div className="relative group">
                            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-gradient-to-br from-mint/20 to-coffee/20 border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                                <img
                                    src={Shirt}
                                    alt="Fondatrice de Carix"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            
                            {/* Badge flottant */}
                            <div className="absolute -bottom-2 -right-2 bg-mint px-4 py-2 rounded-full shadow-lg">
                                <Heart size={20} className="text-brownDark" fill="currentColor" />
                            </div>
                        </div>

                        {/* Contenu texte */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 mb-3 bg-coffee/10 px-3 py-1 rounded-full">
                                <Sparkles size={16} className="text-coffee" />
                                <span className="text-xs sm:text-sm font-medium text-coffee">Fondatrice</span>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl font-bold text-brownDark mb-3">
                                Alix Carine VEBAMBA
                            </h3>
                            
                            <p className="text-sm sm:text-base text-coffee leading-relaxed mb-4">
                                Passionnée par l'artisanat depuis son plus jeune âge, elle a fondé Carix avec la vision de créer des pièces uniques qui allient tradition et modernité. 
                            </p>
                            
                            <p className="text-sm sm:text-base text-coffee/80 italic">
                                "Chaque fil raconte une histoire, chaque point porte une émotion."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CSS Animations */}
            <style>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default About;