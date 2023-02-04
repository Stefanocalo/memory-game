import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";

import './Card.css';

export function Card() {

    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = useSpring({
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        config: {
            friction: 12,
            tension:200
        }
    });

    return(
        <animated.div
        style={flipCard}
        className='cardWrapper'
        onClick={() => setIsFlipped(true)}
        >
            <animated.div 
            style={flipCard}
            className='front'>
                <p>test</p>
            </animated.div>
            <div 
            className='back'>
            </div>
        </animated.div>
    )
}