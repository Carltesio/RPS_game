import React from 'react'
import { Link } from "react-router-dom";


const startingPage = () => {
    return (
        <div className="shapes">
            <h1>Welcome to the classic Rock, Paper, Scissors!</h1>
            <h2>Please read the game rules before starting the game.</h2>

            <p id= "WelcomePageP" className="WelcomePageP">
            The game is played where players deliver hand signals
            that will represent the elements of the game; rock, paper and scissors.
            </p>
            <p id= "WelcomePageP" className="WelcomePageP">
            The outcome of the game is determined by 3 simple rules:
            </p>
            <p id= "WelcomePageP">Rock wins against scissors.</p>
            <p id= "WelcomePageP">Scissors win against paper.</p>
            <p id= "WelcomePageP">Paper wins against rock.</p>
            <Link id="linkToGame" to="/game"> Go to Game page!</Link>
        </div>
    )
}

export default startingPage