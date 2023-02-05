import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";

import './Card.css';

export function Card({card, flipped ,setFlipped}) {

    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = useSpring({
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        config: {
            friction: 12,
            tension:200
        }
    });

    const trigger = () => {
        const newCount = flipped + 1;
        setIsFlipped(true);
        setFlipped(newCount);
    }

    return(
        <animated.div
        style={flipCard}
        className='cardWrapper'
        onClick={() => trigger()}
        >
            <animated.div 
            style={flipCard}
            className='front'>
                <div className="imageContainer">
                    <img
                    className="image"
                    src={require(`../media/${card.id}.png`)} />
                </div>
            </animated.div>
            <div 
            className='back'>
            </div>
        </animated.div>
    )
}