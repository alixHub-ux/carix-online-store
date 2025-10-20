import React from 'react';

type Card3Props = {
  backgroundImg?: string;
  chipText?: string;
  chipBgColor?: string;
  chipTextColor?: string;
  mainTitle?: string;
  description?: string;
};

const Card3: React.FC<Card3Props> = ({
  backgroundImg,
  chipText,
  chipBgColor = "bg-brownDark",
  chipTextColor = "text-ivory",
  mainTitle,
  description
}) => {
  return (
    <div className="flex flex-col items-start w-full group">
      {/* Card Image Container */}
      <div
        className="relative w-full aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
        style={{
          backgroundImage: backgroundImg ? `url(${backgroundImg})` : undefined,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gradient pour améliorer la lisibilité du chip */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        
        {/* Chip Badge */}
        {chipText && (
          <span
            className={`
              ${chipBgColor} ${chipTextColor}
              flex items-center justify-center rounded-full
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
              text-base sm:text-lg md:text-xl font-bold
              absolute top-3 left-3 sm:top-4 sm:left-4
              shadow-lg backdrop-blur-sm
              transition-transform duration-300 group-hover:scale-110
            `}
          >
            {chipText}
          </span>
        )}
      </div>

      {/* Text Content */}
      <div className="w-full mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-3">
        {mainTitle && (
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-brownDark leading-tight transition-colors duration-300 group-hover:text-coffee">
            {mainTitle}
          </h3>
        )}
        
        {description && (
          <p className="text-sm sm:text-base text-coffee leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card3;