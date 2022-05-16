import React from 'react';
import ItemsList from '../components/Game/ItemsList';
import "../style/Game.css";

function Game(props) {
    return (
        <div className="game">
            <ItemsList />
        </div>
    );
}

export default Game;