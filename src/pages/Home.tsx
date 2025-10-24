import { Sparkles, ArrowRight, Heart, Star } from "lucide-react";
import CustomButton from "../components/ui/CustomButton";
import Shirt from "../assets/images/chemise.jpeg";
import Card1 from "../components/ui/Card1";
import Card2 from "../components/ui/Card2";
import Top from "../assets/images/top.jpeg";
import Chemise from "../assets/images/chemise.jpeg";
import { useEffect, useRef, useState } from "react";
import Stat from "../components/ui/Stat";
import { useNavigate } from 'react-router-dom'; 


function Home() {
    const navigate = useNavigate();
    const collectionRef = useRef<HTMLElement>(null);
    const [isCollectionVisible, setIsCollectionVisible] = useState(false);
    

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsCollectionVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        if (collectionRef.current) {
            observer.observe(collectionRef.current);
        }

        return () => {
            if (collectionRef.current) {
                observer.unobserve(collectionRef.current);
            }
        };
    }, []);

    const bottomRef = useRef<HTMLElement>(null);
    const [isBottomVisible, setIsBottomVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsBottomVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full min-h-screen bg-ivory overflow-hidden">
            {/* Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-32 relative">
                {/* Decorative circles */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-mint/10 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-20 left-10 w-96 h-96 bg-coffee/5 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />

                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
                    {/* Textual data */}
                    <div className="flex-1 text-center lg:text-left animate-fadeInUp">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 sm:gap-3 text-coffee mb-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                            <Sparkles
                                size={20}
                                className="sm:w-6 sm:h-6 flex-shrink-0 animate-spin-slow text-coffee"
                            />
                            <h2 className="text-sm sm:text-base md:text-lg font-medium">
                                Fabriqué à la main avec amour
                            </h2>
                        </div>

                        {/* Main Title */}
                        <h1
                            className="text-brownDark  font-bold leading-tight mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl animate-fadeInUp"
                            style={{ animationDelay: "0.2s" }}
                        >
                            De Magnifiques <br />
                            <span className="text-coffee relative inline-block">
                                accessoires
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    height="12"
                                    viewBox="0 0 200 12"
                                    fill="none"
                                >
                                    <path
                                        d="M2 10C60 2 140 2 198 10"
                                        stroke="#B8956A"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        className="animate-draw"
                                    />
                                </svg>
                            </span>{" "}
                            <br />
                            tricotés
                        </h1>

                        {/* Description */}
                        <p
                            className="text-coffee text-sm sm:text-base md:text-lg lg:text-2xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fadeInUp"
                            style={{ animationDelay: "0.4s" }}
                        >
                            Découvrez notre collection d'accessoires tricotés à la main,
                            chaque pièce confectionnée avec passion et souci du détail pour
                            ceux qui apprécient l'élégance intemporelle.
                        </p>

                        {/* Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start animate-fadeInUp"
                            style={{ animationDelay: "0.6s" }}
                        >
                            <CustomButton
                                text="Découvrir la Collection"
                                background="bg-brownDark"
                                textColor="text-white"
                                icon={
                                    <ArrowRight
                                        size={20}
                                        className="sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
                                    />
                                }
                                onClick={() => 
                                    {window.scrollTo({ top: 0, behavior: "smooth" });
                                    navigate('/products')}}
                                className="group"
                                
                            />
                            <CustomButton
                                text="Notre Histoire"
                                background="bg-ivory"
                                textColor="text-brownDark"
                                border={true}
                                borderColor="border-brownDark"
                                onClick={() => 
                                    {window.scrollTo({ top: 0, behavior: "smooth" });
                                    navigate('/about')}}
                            />
                        </div>

                        {/* Mini Stats */}
                        <div
                            className="flex gap-6 sm:gap-8 justify-center lg:justify-start mt-12 animate-fadeInUp"
                            style={{ animationDelay: "0.8s" }}
                        >
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-brownDark">
                                    150+
                                </p>
                                <p className="text-xs sm:text-sm text-coffee">Clients</p>
                            </div>
                            <div className="w-px bg-coffee/20" />
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-brownDark">
                                    300+
                                </p>
                                <p className="text-xs sm:text-sm text-coffee">Produits</p>
                            </div>
                            <div className="w-px bg-coffee/20" />
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-brownDark ">
                                    100%
                                </p>
                                <p className="text-xs sm:text-sm text-coffee">Fait Main</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full max-w-md lg:max-w-lg xl:max-w-xl animate-fadeInRight">
                        <div className="relative group">
                            {/* Main Image */}
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-mint/20 hover:-translate-y-2">
                                <img
                                    src={Shirt}
                                    alt="Accessoire tricoté à la main"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay décoratif */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brownDark/30 to-transparent pointer-events-none" />

                                {/* Badge flottant */}
                                <div className="absolute top-6 right-6 bg-mint text-brownDark px-4 py-2 rounded-full font-bold shadow-lg animate-float">
                                    100% Fait Main
                                </div>

                                {/* Rating Badge */}
                                <div
                                    className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg animate-fadeIn"
                                    style={{ animationDelay: "1s" }}
                                >
                                    <Star size={16} className="text-coffee fill-mint" />
                                    <span className="font-bold text-brownDark">4.9/5</span>
                                    <span className="text-coffee text-sm">(150+ avis)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collection */}
            <section
                ref={collectionRef}
                className="container mx-auto sm:px-6 md:px-12 pt-5 px-4"
            >
                <div
                    className={`flex items-center justify-center gap-2 transition-all duration-700 ${isCollectionVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                >
                    <Heart size={20} className="text-coffee" />
                    <h2 className="text-sm sm:text-base md:text-lg font-medium text-coffee text-center">
                        Collection Signature
                    </h2>
                </div>

                <h1
                    className={`text-3xl lg:text-6xl xl:text-4xl font-bold text-center py-3 text-brownDark sm:text-4xl md:text-5xl transition-all duration-700 delay-100 ${isCollectionVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                >
                    Sélection d'Exception
                </h1>

                <p
                    className={`text-sm sm:text-base md:text-2xl text-coffee text-center font-light transition-all duration-700 delay-200 ${isCollectionVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                >
                    Découvrez une sélection emblématique, où chaque création reflète
                    l'excellence du savoir-faire <br />
                    et l'élégance intemporelle de notre Maison.
                </p>

                {/* Cards avec animation en cascade */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 my-10">
                    {[
                        { title: "Chemise", delay: "300" },
                        { title: "Top", delay: "500" },
                        { title: "Pull", delay: "700" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`transition-all duration-700 delay-${item.delay} ${isCollectionVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-12"
                                }`}
                        >
                            <Card1
                                category="Habits"
                                title={item.title}
                                description="Chemise élégante en crochet, confectionnée en laine douce et respirante. Son style artisanal apporte une touche bohème et chaleureuse, idéale pour un look à la fois chic et décontracté."
                                price={"50"}
                                imageUrl={Shirt}
                                rating={5}
                            />
                        </div>
                    ))}
                </div>

                <div
                    className={`flex justify-center py-10 transition-all duration-700 delay-900 ${isCollectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 "
                        }`}
                >
                    <CustomButton
                        text="Voir Toute la Collection"
                        background="bg-brownDark"
                        textColor="text-white"
                        icon={
                            <ArrowRight
                                size={20}
                                className="sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
                            />
                        }
                         onClick={() => 
                            {window.scrollTo({ top: 0, behavior: "smooth" });
                            navigate('/products')}}
                        className="group hover:bg-coffee "
                    />
                </div>
            </section>

            {/* Bottom */}

            <section
                ref={bottomRef}
                className="container mx-auto px-4 sm:px-6 md:px-12 pt-10 pb-16"
            >
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Contenu texte */}
                    <div
                        className={`w-full lg:w-1/2 transition-all duration-700 ${isBottomVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-12"
                            }`}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 sm:gap-3 text-coffee mb-6">
                            <Sparkles
                                size={20}
                                className="sm:w-6 sm:h-6 flex-shrink-0 text-coffee"
                            />
                            <h2 className="text-sm sm:text-base md:text-lg font-medium">
                                Conceptions Artisanales
                            </h2>
                        </div>

                        <h1
                            className={`text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-brownDark py-5 transition-all duration-700 delay-100 ${isBottomVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                        >
                            Confectionnés avec <br /> Soin et Passion
                        </h1>

                        <p
                            className={`text-sm sm:text-base md:text-lg lg:text-xl text-coffee font-light leading-relaxed transition-all duration-700 delay-200 ${isBottomVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                        >
                            Chaque point raconte une histoire. Nos artisans qualifiés mettent
                            tout leur cœur à créer chaque pièce, vous garantissant ainsi non
                            seulement un accessoire, mais une véritable œuvre d'art.
                        </p>

                        <div
                            className={` flex justify-center lg:justify-start gap-10 sm:gap-8 lg:gap-12 font-light py-8 scale-90 sm:scale-100 transition-all duration-700 delay-300 ${isBottomVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                        >
                            <Stat
                                mainTitle="500+"
                                mainTitleColor="text-brownDark"
                                description="Clients Satisfaits"
                                descriptionColor="text-coffee"
                            />

                            <Stat
                                mainTitle="100%"
                                mainTitleColor="text-brownDark"
                                description="Fait à la Main"
                                descriptionColor="text-coffee"
                            />
                        </div>

                        <div
                            className={`transition-all duration-700 delay-500 ${isBottomVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                        >
                            <CustomButton
                                text="Découvrez notre Histoire"
                                background="bg-ivory"
                                border={true}
                                textColor="text-brownDark"
                                borderColor="border-brownDark"
                                icon={
                                    <ArrowRight
                                        size={20}
                                        className="sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
                                    />
                                }
                                 onClick={() => 
                                    {window.scrollTo({ top: 0, behavior: "smooth" });
                                    navigate('/about')}}
                                                                    className="group hover:bg-coffee"
                            />
                        </div>
                    </div>

                    {/* Images */}
                    <div
                        className={`w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6 transition-all duration-700 delay-200 ${isBottomVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-12"
                            }`}
                    >
                        <Card2
                            src={Top}
                            alt="Top en crochet"
                            maxWidthClass="w-full"
                            className="transform lg:-translate-y-8 hover:scale-105 transition-transform duration-300"
                        />

                        <Card2
                            src={Chemise}
                            alt="Chemise en crochet"
                            maxWidthClass="w-full"
                            className="transform lg:translate-y-8 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>

            {/* CSS Animations */}
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes draw {
          from {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
          }
          to {
            stroke-dasharray: 200;
            stroke-dashoffset: 0;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-draw {
          animation: draw 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>
        </div>
    );
}

export default Home;
