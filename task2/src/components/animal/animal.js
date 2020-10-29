import React from 'react';
import './animal.css'

const greetingText = (animal) => {
    alert(`Hello, I am ${animal}. Nice to meet you.`);
};

const Animal = (props) => {
    return(
        <div className="cards">
            <h1>{props.animal}</h1>
            <img alt={props.animal} src={props.img}/>
            <button onClick={() => greetingText(props.animal)}>Click me!</button>
        </div>

    );
};

export default Animal;