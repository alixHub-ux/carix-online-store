// components/ui/CustomButton.tsx
import React from "react";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  background?: "bg-brownDark" | "bg-mint" | "bg-ivory";
  textColor?: "text-white" | "text-brownDark" | "text-mint";
  border?: boolean;
  borderColor?: "border-brownDark" | "border-mint" | "border-ivory";
  onClick?: () => void;
  className?: string;
};

const CustomButton: React.FC<ButtonProps> = ({
  text,
  icon,
  background,
  textColor,
  border,
  borderColor,
  onClick,
  className = "",
}) => {
  const buttonClasses = `
    flex gap-2 sm:gap-4 items-center 
    px-4 sm:px-6 py-2 sm:py-3
    rounded-full transition duration-200 justify-center 
    text-sm sm:text-base md:text-[1.2em]
    h-auto sm:h-[8vh] min-h-[48px]
    w-full sm:w-auto
    hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer
    ${background ?? ""}
    ${textColor ?? ""}
    ${border ? `border ${borderColor ?? ""}` : ""}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
    >
      {text}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};

export default CustomButton;