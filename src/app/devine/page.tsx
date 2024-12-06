"use client";
import { useState } from "react";
import styles from "./Devine.module.css";

interface Card {
    id: number;
    frontImage1: string;
    frontImage2: string;
    description: string;
}

const Game = () => {
    const [cards] = useState<Card[]>([
        {
            id: 1,
            frontImage1: "/cerveau.png",
            frontImage2: "/Coraille.png",
            description: "This is the description for card 1.",
        },
        {
            id: 2,
            frontImage1: "/squelette.png",
            frontImage2: "/dorsale.png",
            description: "This is the description for card 2.",
        },
        {
            id: 3,
            frontImage1: "/reins.png",
            frontImage2: "/maree.png",
            description: "This is the description for card 3.",
        },
        {
            id: 4,
            frontImage1: "/Peau.png",
            frontImage2: "/surface.png",
            description: "This is the description for card 3.",
        },
        {
            id: 5,
            frontImage1: "/estomac.png",
            frontImage2: "/abysse.jpeg",
            description: "This is the description for card 3.",
        },
    ]);

    const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
    const [isShaking, setIsShaking] = useState<boolean>(false);

    const showNextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const shakeCard = () => {
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
        }, 500); // Tremblement pendant 0.5 secondes
    };

    const currentCard = cards[currentCardIndex];

    return (
        <div className={styles.container}>
            <h1>Card Game</h1>
            <div
                className={`${styles.card} ${isShaking ? styles.shake : ""}`}
                onClick={shakeCard}
            >
                <div className={styles.cardFront}>
                    <div className={styles.imageContainer}>
                        <img
                            src={currentCard.frontImage1}
                            alt={`Front of card ${currentCard.id} - Image 1`}
                        />
                        <img
                            src={currentCard.frontImage2}
                            alt={`Front of card ${currentCard.id} - Image 2`}
                        />
                    </div>
                </div>
                <div className={styles.cardBack}>
                    <p>{currentCard.description}</p>
                </div>
            </div>
            <button className={styles.nextButton} onClick={showNextCard}>
                Next Card
            </button>
        </div>
    );
};

export default Game;
