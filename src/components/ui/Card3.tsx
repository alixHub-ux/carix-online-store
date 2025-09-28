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
    chipBgColor,
    chipTextColor,
    mainTitle,
    description
}) => {

    const cardStyle = `
        relative w-[30vw] h-[40vh] rounded-3xl mb-10 overflow-hidden
    `;

    const chipStyle = `
        ${chipBgColor ?? ""} 
        ${chipTextColor ?? ""} 
        flex items-center justify-center rounded-full 
        w-[4em] h-[4em] text-[1.2em]
        absolute top-3 left-3
    `;

    return (
        <div className="flex flex-col items-center justify-center">
            <div
                className={cardStyle}
                style={{
                    backgroundImage: backgroundImg ? `url(${backgroundImg})` : undefined,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {chipText && <span className={chipStyle}>{chipText}</span>}
            </div>

            <h2 className="font-noyh text-3xl mt-4 mb-2 text-center w-[30vw]">
                {mainTitle}
            </h2>

            <p className="text-brownDark text-[1.2em] text-center w-[30vw]">
                {description}
            </p>
        </div>
    );
};

export default Card3;
