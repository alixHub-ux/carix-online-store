import React from "react";


type Card2Props = {

  src: string;

  alt: string;

  maxWidthClass?: string;

  className?: string;
};

const Card2: React.FC<Card2Props> = ({
    src, alt, maxWidthClass = "max-w-sm", className = ""
}) => {
  return (
    <div
      className={`${maxWidthClass} bg-white rounded-xl shadow overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover rounded-xl"
      />
    </div>
  );
}
export default Card2;
