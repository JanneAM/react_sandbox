import React from 'react';
import './Gameover.css'

const closeHandler = () =>{
    window.location.reload();
}

function Gameover(props) {
    return (
        <div className="overlay">
            <div className="gameover_popup">
                <h2>Gameover</h2>
                <p>Your score was: {props.score}</p>'
                <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
}

export default Gameover;