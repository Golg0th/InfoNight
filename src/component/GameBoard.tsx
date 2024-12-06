import { useState } from "react";
import ImageCard from "./ImageCard";

const imagePairs = [
    { src1: "/images/animal1.jpg", src2: "/images/habitat1.jpg", matched: false },
    { src1: "/images/animal2.jpg", src2: "/images/habitat2.jpg", matched: false },
    { src1: "/images/animal3.jpg", src2: "/images/habitat3.jpg", matched: false },
];

const GameBoard = () => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<boolean[]>(imagePairs.map(() => false));

    const handleCardClick = (imageSrc: string) => {
        setSelectedImages((prev) => [...prev, imageSrc]);

        if (selectedImages.length === 1) {
            const lastSelected = selectedImages[selectedImages.length - 1];
            const pairIndex = imagePairs.findIndex(
                (pair) => (pair.src1 === lastSelected && pair.src2 === imageSrc) || (pair.src2 === lastSelected && pair.src1 === imageSrc)
            );

            if (pairIndex !== -1) {
                const newMatchedPairs = [...matchedPairs];
                newMatchedPairs[pairIndex] = true;
                setMatchedPairs(newMatchedPairs);
            }

            setSelectedImages([]);
        }
    };

    return (
        <div className="grid grid-cols-3 gap-6 p-8">
            {imagePairs.map((pair, index) => (
                <div key={index} className="space-y-6">
                    <ImageCard
                        imageSrc={pair.src1}
                        altText={`Image ${index + 1} - Animal`}
                        onClick={() => handleCardClick(pair.src1)}
                        isSelected={selectedImages.includes(pair.src1) || matchedPairs[index]}
                    />
                    <ImageCard
                        imageSrc={pair.src2}
                        altText={`Image ${index + 1} - Habitat`}
                        onClick={() => handleCardClick(pair.src2)}
                        isSelected={selectedImages.includes(pair.src2) || matchedPairs[index]}
                    />
                </div>
            ))}
        </div>
    );
};

export default GameBoard;
