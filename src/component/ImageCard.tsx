// components/ImageCard.tsx
import React from "react";

type ImageCardProps = {
    imageSrc: string;
    altText: string;
    onClick: () => void;
    isSelected: boolean;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, altText, onClick, isSelected }) => {
    return (
        <div
            className={`w-32 h-32 bg-white rounded-lg shadow-md flex justify-center items-center cursor-pointer ${isSelected ? "opacity-50" : ""}`}
            onClick={onClick}
        >
            <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
        </div>
    );
};

export default ImageCard;
