import { useSpring, animated } from "@react-spring/web";
import React, {useState} from "react";
import { useEffect } from "react";
import './FinalScore.css';

export function FinalScore({score, setScore, showScore, isBestScore, setIsBestScore}) {

    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        if(showScore) {
            if(bestScore === 0) {
                setBestScore(score);

            } else {
                if(score < bestScore) {
                    setBestScore(score);
                    setIsBestScore(true);
                }
            }
        }
    },[showScore]);

    let height = window.innerHeight;

    const modal = useSpring({
        scale: showScore ? 1 : 0,
        opacity: showScore ? 1 : 0,
        config: {
            friction: 10,
            tension: 60
        }
    })

    

    return(
        <animated.div
        className="finalScoreContainer"
        style={modal}
        >
            <div className="finalScoreWrapper">

                {isBestScore && 
                    <div className="best">
                        <h4 className="newBest">CONGRATULATION!!!🎉</h4>
                        <p className="scoreText">New Best Score: {bestScore}</p>
                    </div>}
                {!isBestScore &&
                    <div className="best">
                        <h4 className="newBest">WELL DONE!</h4>
                        <p className="scoreText">Your score: {score}</p>
                    </div>
                }
            </div>
        </animated.div>
    )
}