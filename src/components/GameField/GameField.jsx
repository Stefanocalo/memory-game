import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './GameField.css';

import { Score } from "../Score/Score";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import cards from "../../utils/cards";

export function GameField({isGameOn, setIsGameOn}) {

    const [score, setScore] = useState(0);
    const [flipped, setFlipped] = useState(0);
    const [cardDeck, setCardDeck] = useState([]);

    let randomCards =[];

    useEffect(() => {
        if(!isGameOn) {
            setCardDeck([]);
        }
    },[isGameOn])



    useEffect(() => {
        if(flipped > 1) {
            const newScore = score + 1;
            setFlipped(0);
            setScore(newScore);
        }
    },[flipped])

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
            setCardDeck={setCardDeck}
            isGameOn={isGameOn}
            setIsGameOn={setIsGameOn}
            randomCards={randomCards}
            >New Game</Button>
            <animated.div
            style={gameOn}
            className='gameOn'
            >
                <Score score={score} setScore={setScore}/>
                <div className="cardsSection">
                    {cardDeck.length > 1 && cardDeck.map((card, index) => (
                        <Card
                        card={card}
                        key={index}
                        flipped={flipped}
                        setFlipped={setFlipped}
                         />
                    ))}
                </div>
            </animated.div>
        </div>
    )
}