import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './GameField.css';

import { Score } from "../Score/Score";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

export function GameField({isGameOn, setIsGameOn}) {

    const [score, setScore] = useState(0);

    const gameOn = useSpring({
        top: isGameOn ? '0%' : '-100%',
        config: {
            friction: 12,
            tension: 300
        }
    })


    return(
        <div 
        className="gameFieldWrapper">
            <Button
            isGameOn={isGameOn}
            setIsGameOn={setIsGameOn}
            >New Game</Button>
            <animated.div
            style={gameOn}
            className='gameOn'
            >
                <Score score={score} setScore={setScore}/>
                <div className="cardsSection">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </animated.div>
        </div>
    )
}