import React from "react";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  background?: "bg-brownDark" | "bg-mint" | "bg-ivory";
  textColor?: "text-white" | "text-brownDark" | "text-mint";
  border?: boolean;
  borderColor?: "border-brownDark" | "border-mint" | "border-ivory";
};

const CustomButton: React.FC<ButtonProps> = ({
  text,
  icon,
  background,
  textColor,
  border,
  borderColor,
}) => {
  const buttonClasses = `
    flex gap-4 items-center px-6 py-2 rounded-full transition duration-200 justify-center text-[1.2em] h-[10vh]
    ${background ?? ""}
    ${textColor ?? ""}
    ${border ? `border ${borderColor ?? ""}` : ""}
  `.trim();

  return (
    <span>
      <button className={buttonClasses}>
        {text}
        {icon && <span>{icon}</span>}
      </button>
    </span>
  );
};

export default CustomButton;
