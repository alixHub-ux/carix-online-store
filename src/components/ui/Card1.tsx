import React from "react";
import {Star,Heart} from "lucide-react";

type Card1Props = {
    category : string;
    title : string;
    description : string;
    price : number;
    imageUrl : string;
    rating? : number;
    onFavoriteClick?: () => void;

};

const Card1: React.FC<Card1Props> = ({category, title, description, price, imageUrl, rating=0, onFavoriteClick}) => {
    return(
        <div className="max-w-md bg-ivory rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-99">
      {/* Image + badge catégorie */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-70 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 bg-mint text-coffee text-xs font-noyh px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-coffee leading-tight">
            {title}
          </h3>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "fill-amber-400 text-amber" : "text-amber"}
              />
            ))}
          </div>
        </div>

        <p className="mt-1 text-sm font-noyh text-coffee">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-coffee">{price} F</span>
          <button
            onClick={onFavoriteClick}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Add to favorites"
          >
            <Heart className="text-gray-400 hover:text-red-500" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card1;