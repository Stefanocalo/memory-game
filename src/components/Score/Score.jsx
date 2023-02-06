import React, {useState} from "react";
import { useEffect } from "react";
import './Score.css';

export function Score({score, setScore, showScore}) {

    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        if(showScore) {
            if(bestScore === 0) {
                setBestScore(score)
            } else {
                if(score < bestScore) {
                    setBestScore(score);
                }
            }
            setScore(0)
        }
    },[showScore]);

    

    return(
        <div className="scoreContainer">
            <div className="scoreWrapper">
                <p>Score: {score}</p>
                <p>Your best score is: {bestScore}</p>
            </div>
        </div>
    )
}