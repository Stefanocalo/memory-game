import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './GameField.css';

import { Score } from "../Score/Score";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import cards from "../../utils/cards";

export function GameField({isGameOn, setIsGameOn}) {

    const [score, setScore] = useState(0);

    useEffect(() => {
        if(!isGameOn) {
            randomCards=[];
        }
    },[isGameOn]);





    const gameOn = useSpring({
        top: isGameOn ? '0%' : '-100%',
        config: {
            friction: 12,
            tension: 300
        }
    })

    let randomCards = [];

    const renderCards = () => {
        if(!isGameOn) {
            randomCards = [];
        } else {
            while(randomCards.length < 12) {
                let randomCardIndex = Math.floor(Math.random() * 6);
                if(randomCards.filter(single => single.id === cards[randomCardIndex].id).length < 2) {
                    randomCards.push(cards[randomCardIndex]);
                };
            };
        }        
    };

    renderCards();


    return(
        <div 
        className="gameFieldWrapper">
            <Button
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
                    {randomCards.map((card, index) => (
                        <Card
                        card={card}
                        key={index}
                         />
                    ))}
                </div>
            </animated.div>
        </div>
    )
}