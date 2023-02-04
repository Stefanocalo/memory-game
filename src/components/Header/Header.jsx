import { useSpring, animated } from "@react-spring/web";
import React from "react";
import './Header.css';

export function Header({isGameOn}) {

    const header = useSpring({
        top: isGameOn ? '-30%' : '0%'
    })

    return(
        <animated.div 
        style={header}
        className="headerContainer">
            <div id='headerImg'></div>
            <div className="subContainer">
                <span>Memory Game</span>
            </div>

        </animated.div>
    )
}