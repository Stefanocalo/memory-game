import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";

import './Card.css';
import { useEffect } from "react";

export function Card({card,correctPair, flipped ,setFlipped, setActiveCard}) {

    const [clickable, setClickable] = useState(true);
    const [animate, setAnimate] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        if(!animate) {
            return
        }

        const timeoutId = setTimeout(() => {
            setAnimate(false);
        },150);           

        return () => {
            clearTimeout(timeoutId);
        }
    },[animate])


    useEffect(() => {
       if(flipped === 2) {
        const timeoutId = setTimeout(() => {
            if(correctPair.includes(card.id)) {
                setClickable(false);
            } else {
                setIsFlipped(false);
                setClickable(true);
                setAnimate(true);
            }
        },1000);           

        return () => {
            clearTimeout(timeoutId);
        }
       }
    },[flipped, correctPair]);

    console.log(correctPair);

    const flipCard = useSpring({
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        scale: animate ? 1.2 : 1,
        config: {
            tension: 180,
            friction: 12
        }
    });

    const trigger = () => {
       if(flipped < 2 && clickable) {
        const newCount = flipped + 1;
        setIsFlipped(true);
        setFlipped(newCount);
        setClickable(false);
        setActiveCard((prevState) => [...prevState, card.id])
        }
        if(isFlipped) {
            setAnimate(true);
        }
    }

    return(
        <animated.div
        className='cardWrapper'
        style={flipCard}
        onClick={() => trigger()}
        >
            <animated.div 
            className='front'>
                <div className="imageContainer">
                    <img
                    className="image"
                    src={require(`../media/${card.id}.png`)} />
                </div>
            </animated.div>
            <animated.div
            className='back'>
            </animated.div>
        </animated.div>
    )
}