import React, {useState} from "react";
import './Header.css';

export function Header() {

    return(
        <div className="headerContainer">
            <div id='headerImg'></div>
            <div className="subContainer">
                <span>Memory Game</span>
            </div>

        </div>
    )
}