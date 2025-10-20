type StatProps = {
    mainTitle?: string;
    mainTitleColor?: string;
    descriptionColor?: string;
    description?: string;
};

const Stat: React.FC<StatProps> = ({
    mainTitleColor,
    descriptionColor,
    mainTitle,
    description
}) => {

    const statStyle = `
        ${descriptionColor ?? ""} 
        ${mainTitleColor ?? ""} 
        flex flex-col items-center justify-center text-center
        w-[20vw] gap-3
    `;

    return (
        <div className={statStyle}>
            <div  className={`font-bold text-3xl`}>
                {mainTitle}
            </div>
            <div  className={`text-2xl`}>
                {description}
            </div>
        </div>
    );
};

export default Stat;
