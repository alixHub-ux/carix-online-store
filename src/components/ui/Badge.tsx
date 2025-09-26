import React from "react";
import CheckIcon from "../../assets/icons/check.svg";

type BadgeProps = {
    label: string;// Propiétés Obligatoires
    label2?: string; // Propriété Optionnelle
};

const Badge: React.FC<BadgeProps> = ({ label, label2 }) => {


    return (
        <span className ={`flex flex-col items-center justify-center text-brownDark`} >
            <span
                className={`w-[5em] h-[5em] flex items-center justify-center rounded-full bg-brownDark text-white`}
            >
                {/* Icône fixée */}
                <img src={CheckIcon} alt="check" className="w-8" />
            </span>

            <span className={`flex flex-col items-center justify-center mt-6 font-noyh text-2xl`} >
                {label}
                <span className={`min-h-[1.2em]`}>
                    {label2}
                </span>
            </span>
        </span>
    );
}

export default Badge;