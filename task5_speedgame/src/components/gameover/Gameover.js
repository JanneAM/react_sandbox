import React from "react";
import './Gameover.css';

const closeHandler = () => {
    window.location.reload();
}

const Gameover = (props) => {
    return (<div className="overlay">

        <div className="gameover_box">
            <h2>Game over</h2>
            <p>Your score was: {props.score}</p>
            <button onClick={closeHandler}>Close</button>
            </div>
         </div>
    );
};

export default Gameover;