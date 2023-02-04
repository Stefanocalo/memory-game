import React, {useState} from "react";
import './Score.css';

export function Score({score}) {

    const [bestScore, setBestScore] = useState(0);

    return(
        <div className="scoreWrapper">
            <p>Score: {score}</p>
            <p>Your best score is: {bestScore}</p>
        </div>
    )
}