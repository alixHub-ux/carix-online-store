import { useState, useEffect, useRef } from "react";
import { Sparkles, Send, Phone, Mail, Package, MessageSquare, User, Star } from "lucide-react";
import CustomButton from "../components/ui/CustomButton";

function Order() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    product: "",
    message: "",
  });

  // Animation states
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const helpRef = useRef<HTMLElement>(null);

  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isHowItWorksVisible, setIsHowItWorksVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const createObserver = (
      ref: React.RefObject<HTMLElement | null>,
      setState: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState(true);
          }
        });
      }, observerOptions);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const observers = [
      createObserver(heroRef, setIsHeroVisible),
      createObserver(formRef, setIsFormVisible),
      createObserver(howItWorksRef, setIsHowItWorksVisible),
      createObserver(testimonialsRef, setIsTestimonialsVisible),
      createObserver(helpRef, setIsHelpVisible),
    ];

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const products = [
    "Chemise en crochet",
    "Top tricoté",
    "Pull artisanal",
    "Écharpe personnalisée",
    "Chouchou",
    "Ourson en tricot",
    "Autre (préciser dans le message)",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.fullName || !formData.email || !formData.product) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `🌟 *Nouvelle Commande Carix* 🌟

👤 *Nom Complet:* ${formData.fullName}
📧 *Email:* ${formData.email}
🎁 *Produit:* ${formData.product}

💬 *Message:*
${formData.message || "Aucun message supplémentaire"}`;

    const phoneNumber = "22664242467";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      product: "",
      message: "",
    });
  };

  const testimonials = [
    {
      text: "J'adore mon écharpe personnalisée ! La qualité est incroyable et le savoir-faire est évident dans les moindres détails.",
      author: "Nadine ",
    },
    {
      text: "Les chouchous sont si doux et si beaux. Parfaits pour mon quotidien, ils font aussi de superbes cadeaux!",
      author: "Lydia N.",
    },
    {
      text: "Ma fille adore son ours en peluche tricoté ! C'est devenu son compagnon préféré.",
      author: "Patricia S.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Soumettez votre demande",
      description: "Remplissez le formulaire avec vos coordonnées et préférences",
      icon: <Send size={24} />,
    },
    {
      number: "2",
      title: "Nous vous contactons",
      description: "Notre équipe vous contactera sous 24h pour discuter des détails",
      icon: <MessageSquare size={24} />,
    },
    {
      number: "3",
      title: "Fabrication commence",
      description: "Nous confectionnons votre pièce avec amour et attention",
      icon: <Sparkles size={24} />,
    },
    {
      number: "4",
      title: "Livraison",
      description: "Votre magnifique accessoire arrive à votre porte",
      icon: <Package size={24} />,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-ivory overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20"
      >
        <div
          className={`text-center transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 text-coffee mb-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <Sparkles
              size={20}
              className="sm:w-6 sm:h-6 flex-shrink-0 animate-spin-slow text-coffee"
            />
            <h2 className="text-sm sm:text-base md:text-lg font-medium">
              Commandez Maintenant
            </h2>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-brownDark mb-6">
            Créez Votre Pièce <br />
            <span className="text-coffee">Sur Mesure</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-coffee max-w-3xl mx-auto leading-relaxed">
            Chaque création est unique, confectionnée spécialement pour vous avec passion et savoir-faire artisanal.
            Commencez votre commande en quelques clics.
          </p>
        </div>
      </section>

      {/* Order Form Section */}
      <section
        ref={formRef}
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16"
      >
        <div
          className={`max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl transition-all duration-700 ${isFormVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="flex items-center gap-2 text-brownDark font-medium mb-2 text-sm sm:text-base"
              >
                <User size={18} className="text-coffee" />
                Nom Complet *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-coffee/20 bg-white/80 focus:border-coffee focus:outline-none transition-all text-brownDark placeholder:text-coffee/40"
                placeholder="Votre nom complet"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-brownDark font-medium mb-2 text-sm sm:text-base"
              >
                <Mail size={18} className="text-coffee" />
                Adresse Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-coffee/20 bg-white/80 focus:border-coffee focus:outline-none transition-all text-brownDark placeholder:text-coffee/40"
                placeholder="votre@email.com"
              />
            </div>

            {/* Product Selection */}
            <div>
              <label
                htmlFor="product"
                className="flex items-center gap-2 text-brownDark font-medium mb-2 text-sm sm:text-base"
              >
                <Package size={18} className="text-coffee" />
                Produit d'Intérêt *
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-coffee/20 bg-white/80 focus:border-coffee focus:outline-none transition-all text-brownDark cursor-pointer"
              >
                <option value="">Sélectionnez un produit</option>
                {products.map((product, index) => (
                  <option key={index} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-brownDark font-medium mb-2 text-sm sm:text-base"
              >
                <MessageSquare size={18} className="text-coffee" />
                Message (Optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-coffee/20 bg-white/80 focus:border-coffee focus:outline-none transition-all text-brownDark placeholder:text-coffee/40 resize-none"
                placeholder="Décrivez vos préférences, couleurs souhaitées, taille, ou toute autre demande spéciale..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <CustomButton
                text="Envoyer la Commande sur WhatsApp"
                background="bg-brownDark"
                textColor="text-white"
                icon={<Send size={20} />}
                onClick={handleSubmit}
                className="w-full group hover:bg-coffee transition-all duration-300"
              />
            </div>

            <p className="text-xs sm:text-sm text-coffee/60 text-center mt-4">
              * Champs obligatoires. Vos informations seront envoyées via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={howItWorksRef}
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16"
      >
        <div
          className={`text-center mb-12 transition-all duration-700 ${isHowItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brownDark mb-4">
            Comment Ça Marche
          </h2>
          <p className="text-sm sm:text-base text-coffee max-w-2xl mx-auto">
            Un processus simple et transparent pour votre commande personnalisée
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-700 hover:scale-105 hover:shadow-xl ${isHowItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full mb-4 text-brownDark">
                {step.icon}
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-brownDark text-white rounded-full font-bold text-sm mb-3">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brownDark mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-coffee">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsRef}
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16"
      >
        <div
          className={`text-center mb-12 transition-all duration-700 ${isTestimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brownDark mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-sm sm:text-base text-coffee max-w-2xl mx-auto">
            Des retours authentiques de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:scale-105 hover:shadow-xl ${isTestimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber fill-amber" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-coffee italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium text-brownDark">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Need Help */}
      <section
        ref={helpRef}
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 mb-12"
      >
        <div
          className={`max-w-4xl mx-auto bg-gradient-to-br from-mint/20 to-coffee/10 rounded-3xl p-8 sm:p-10 lg:p-12 text-center transition-all duration-700 ${isHelpVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brownDark mb-4">
            Besoin d'Aide ?
          </h2>
          <p className="text-sm sm:text-base text-coffee mb-8 max-w-2xl mx-auto">
            Des questions sur nos produits ou le processus de commande ? Nous sommes là pour vous aider !
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:carixshop1@gmail.com"
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Mail size={20} className="text-coffee" />
              <span className="text-brownDark font-medium text-sm sm:text-base">
                carixshop1@gmail.com
              </span>
            </a>

            <a
              href="tel:+22664242467"
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone size={20} className="text-coffee" />
              <span className="text-brownDark font-medium text-sm sm:text-base">
                +226 64-24-24-67
              </span>
            </a>
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

export default Order;