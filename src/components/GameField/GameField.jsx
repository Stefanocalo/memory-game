import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './GameField.css';

import { Score } from "../Score/Score";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { FinalScore } from "../Score/FinalScore";

export function GameField({isGameOn, setIsGameOn}) {

    const [score, setScore] = useState(0);
    const [flipped, setFlipped] = useState(0);
    const [cardDeck, setCardDeck] = useState([]);
    const [activeCard, setActiveCard] = useState([]);
    const [correctPair, setCorrectPair] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [isBestScore, setIsBestScore] = useState(false);

    let randomCards =[];

    useEffect(() => {
        if(correctPair.length === 6) {
            const timeoutId = setTimeout(() => {
                setCorrectPair([]);
                setIsGameOn(false);
                setShowScore(true);
            },1000);           

            return () => {
                clearTimeout(timeoutId);
            }
        }
    },[correctPair])

    useEffect(() => {
        if(!isGameOn) {
            setCardDeck([]);
        }
        if(isGameOn) {
            setShowScore(false);
        }
    },[isGameOn]);

    useEffect(() => {
        if(flipped === 2) {
            const newScore = score + 1;
            if(activeCard[0] === activeCard[1]) {
                setCorrectPair((prevState) => [...prevState, activeCard[0]]);
                setActiveCard([]);
            } else {
                setActiveCard([]);
            }
            setScore(newScore);
            const timeoutId = setTimeout(() => {
                setFlipped(0);
            },1000);           

            return () => {
                clearTimeout(timeoutId);
            }
        }
    },[flipped]);



    const gameOn = useSpring({
        top: isGameOn ? '0%' : '-100%',
        config: {
            friction: 12,
            tension: 300
        }
    });

    return(
        <div 
        className="gameFieldWrapper">
            <Button
            setIsBestScore={setIsBestScore}
            setCardDeck={setCardDeck}
            isGameOn={isGameOn}
            setIsGameOn={setIsGameOn}
            randomCards={randomCards}
            >New Game</Button>
            <animated.div
            style={gameOn}
            className='gameOn'
            >
                <Score
                score={score}
                setScore={setScore}
                showScore={showScore}
                />
                <div className="cardsSection">
                    {cardDeck.length > 1 && cardDeck.map((card, index) => (
                        <Card
                        correctPair={correctPair}
                        setActiveCard={setActiveCard}
                        card={card}
                        key={index}
                        flipped={flipped}
                        setFlipped={setFlipped}
                         />
                    ))}
                </div>
            </animated.div>
            <animated.div
                className='finalScoreWrapper'
            >
                  <FinalScore
                isBestScore={isBestScore}
                setIsBestScore={setIsBestScore}
                score={score}
                setScore={setScore}
                showScore={showScore}
                />
            
            </animated.div>
        </div>
    )
}