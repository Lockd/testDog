import React from 'react';
import classes from './DogCard.module.css'

const dogCard = (props) => {
    
    return (
        <div className={classes.DogCard}>
            <div className={classes.Favorites} onClick={props.clicked}>Add to favorites</div>
            <div><img src={props.img} alt={props.dogName} /></div>
            <p>{props.dogName}</p>
        </div>
    );
}

export default dogCard;