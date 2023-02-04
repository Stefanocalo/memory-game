import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './GameField.css';

import { Score } from "../Score/Score";

import { Button } from "../Button/Button";

export function GameField({isGameOn, setIsGameOn}) {

    const [score, setScore] = useState(0);

    const gameOn = useSpring({
        top: isGameOn ? '30%' : '-100%',
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
            </animated.div>
        </div>
    )
}