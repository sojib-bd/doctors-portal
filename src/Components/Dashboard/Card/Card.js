import React from 'react';
import './Card.css';
const Card = (props) => {

    const myStyle = {
        background: props.color
    }
    return (
        <div className="cardContainer" style={myStyle}>
            <h1>{props.digit}</h1>
            <p>{props.message}</p>
        </div>
    );
};

export default Card;