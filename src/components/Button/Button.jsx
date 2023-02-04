import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Button.css';

export function Button({children, isGameOn, setIsGameOn}) {

    const [isHover, setIsHover] = useState(false);

    const hover = useSpring({
        scale: isHover ? 1.2 : 1,
        border: isHover ? '3px solid black' : '2px solid black',
        top: isGameOn ? '-20%' : '80%',
        config: {
            friction: 12,
            tension: 300
        }
    })


    return(
        <animated.div
        style={hover}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        role='button'
        onClick={() => setIsGameOn(true)}
        className='startButton'
        >
            {children}
        </animated.div>
    )
}