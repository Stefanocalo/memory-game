import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Button.css';

import cards from "../../utils/cards";

export function Button({children, isGameOn, setIsGameOn, setCardDeck, setIsBestScore}) {

    const [isHover, setIsHover] = useState(false);

    const hover = useSpring({
        scale: isHover ? 1.2 : 1,
        border: isHover ? '3px solid black' : '2px solid black',
        top: isGameOn ? '-20%' : '80%',
        config: {
            friction: 12,
            tension: 300
        }
    });

    const getRandomCards = () => {
        let cardsArray = [];
        while(cardsArray.length < 12) {
            let randomIndex = Math.floor(Math.random() * 6);
            if(cardsArray.filter(card => card.id === cards[randomIndex].id).length < 2) {
                cardsArray.push(cards[randomIndex]);
            }
        }
        setCardDeck(cardsArray);
    };


    const trigger = () => {
        setIsGameOn(true);
        getRandomCards();
        setIsBestScore(false);
    };


    return(
        <animated.div
        style={hover}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        role='button'
        onClick={() => trigger()}
        className='startButton'
        >
            {children}
        </animated.div>
    )
}