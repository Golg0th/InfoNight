"use client";
import { useState } from "react";
import styles from "./Game.module.css";

interface Card {
    id: number;
    frontImage1: string; // Première image du recto
    frontImage2: string; // Deuxième image du recto
    description: string; // Texte au verso
}

const Game = () => {
    const [cards] = useState<Card[]>([
        {
            id: 1,
            frontImage1: "/cerveau.png",
            frontImage2: "/Coraille.png",
            description: "Corps humain : Le cerveau est composé de milliards de neurones connectés en réseaux complexes pour transmettre des informations.\n" +
                "Océans : Les récifs coralliens sont des \"centres\" écologiques où se croisent une immense biodiversité et des interactions, agissant comme des réseaux de vie.\n",
        },
        {
            id: 2,
            frontImage1: "/squelette.png",
            frontImage2: "/dorsale.png",
            description: "Corps humain : Le squelette soutient le corps et offre une structure rigide.\n" + "Océans : Les dorsales océaniques et les formations sous-marines forment la structure physique sur laquelle repose l'écosystème marin.",

        },
        {
            id: 3,
            frontImage1: "/reins.png",
            frontImage2: "/maree.png",
            description: "Corps humain : Les reins filtrent le sang, éliminant les déchets et régulant l’équilibre hydrique.\n" +
                "Océans : Les marées et les zones humides purifient les eaux en éliminant les sédiments et les polluants, jouant un rôle similaire à un système de filtration.\n",
        },
        {
            id: 4,
            frontImage1: "/Peau.png",
            frontImage2: "/surface.png",
            description: "Corps humain : La peau est une barrière qui protège le corps des agressions extérieures et régule la température.\n" +
                "Océans : La surface de l'océan agit comme une membrane entre l'atmosphère et les eaux profondes, influençant l’échange de chaleur, d'humidité et de gaz.",
        },
        {
            id: 5,
            frontImage1: "/estomac.png",
            frontImage2: "/abysse.jpeg",
            description: "Corps humain : L’estomac décompose les aliments en nutriments grâce aux enzymes et à l’acide gastrique.\n" +
                "Océans : Les écosystèmes marins, comme les abysses, décomposent les matières organiques tombant des couches supérieures, recyclant les nutriments.",
        },
    ]);

    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

    const handleCardClick = (cardId: number) => {
        setFlippedCards((prev) => ({
            ...prev,
            [cardId]: !prev[cardId],
        }));
    };

    return (
        <div className={styles.container}>
            <h1>Card Game</h1>
            <div className={styles.cardsContainer}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`${styles.card} ${flippedCards[card.id] ? styles.flipped : ""}`}
                        onClick={() => handleCardClick(card.id)}
                    >
                        {/* Face avant */}
                        <div className={styles.cardFront}>
                            <div className={styles.imageContainer}>
                                <img src={card.frontImage1} alt={`Front of card ${card.id} - Image 1`} />
                                <img src={card.frontImage2} alt={`Front of card ${card.id} - Image 2`} />
                            </div>
                        </div>
                        {/* Face arrière */}
                        <div className={styles.cardBack}>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Game;
